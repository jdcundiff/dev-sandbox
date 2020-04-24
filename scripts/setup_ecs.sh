#!/usr/bin/env bash
set -e


# Task Execution IAM Role
# - create the task execution role

project_name="$1"
role_name="$2"

aws iam --region ${AWS_REGION} create-role --role-name ${role_name} --assume-role-policy-document file://scripts/task-execution-assume-role.json --profile ${project_name}

# attach the task execution role policy
echo "attach the task execution role policy"
aws iam --region ${AWS_REGION} attach-role-policy --role-name ${role_name} --policy-arn arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy --profile ${project_name}

# ECS CLI configuration
# create ecs cluster config
echo "create ecs cluster config"
ecs-cli configure --cluster ${project_name} --region ${AWS_REGION} --default-launch-type FARGATE --config-name ${project_name}

# create ecs profile
echo "create ecs profile"
ecs-cli configure profile --access-key "$AWS_ACCESS_KEY_ID" --secret-key "$AWS_SECRET_ACCESS_KEY" --profile-name ${project_name}

# ecs-cli up
echo "ecs-cli up running"
result=$(ecs-cli up --azs ${AWS_REGION}a,${AWS_REGION}b --force --instance-role ${role_name} --cluster ${project_name})
echo "ecs-cli up done"


vpc_id=$(echo "$result" | grep -o "VPC created: .*" | cut -f2 -d ":" | xargs)
echo "vpc_id=${vpc_id}"

subnet_ids=$(echo "$result" | grep -o "Subnet created: .*" | cut -f2 -d ":" | xargs)
echo "subnet_ids=${subnet_ids}"

security_grp_id=$(aws ec2 describe-security-groups --filters Name=vpc-id,Values=${vpc_id} --region ${AWS_REGION} | jq '.SecurityGroups | .[0] | .GroupId' | tr -d '"')
echo "security_grp_id=${security_grp_id}"

# use an array
array=(${subnet_ids//,/ })
subnet_a=${array[0]}
subnet_b=${array[1]}

# call the python script with the arguments passed
python scripts/set_ecs_params.py "${vpc_id}" "${security_grp_id}" "${subnet_a}" "${subnet_b}"

# create load balancer
load_balancer_arn=$(aws elbv2 create-load-balancer --name ${project_name} --subnets ${subnet_a} ${subnet_b} --security-groups ${security_grp_id} --ip-address-type ipv4 | jq '.LoadBalancers | .[0] | .LoadBalancerArn' | tr -d '"')
echo "load_balancer_arn=${load_balancer_arn}, updating .env"
sed -i "/^export LOAD_BALANCER_ARN/s|=.*$|=${load_balancer_arn}|" scripts/.env

# create target group
health_check_path="/healthcheck"
echo "health_check_path=${health_check_path}"
target_grp_arn=$(aws elbv2 create-target-group --name ${project_name} --protocol HTTP --port 80 --target-type ip --vpc-id ${vpc_id} --health-check-path ${health_check_path} | jq '.TargetGroups | .[0] | .TargetGroupArn' | tr -d '"')
echo "target_grp_arn=${target_grp_arn}, updating .env"
sed -i "/^export TARGET_GRP_ARN/s|=.*$|=${target_grp_arn}|" scripts/.env

# register listeners between alb and target group
http_listener_arn=$(aws elbv2 create-listener \
	--load-balancer-arn ${load_balancer_arn} \
    --protocol HTTP \
    --port 80 \
		--default-actions Type=forward,TargetGroupArn=${target_grp_arn}| jq '.Listeners | .[0] | .ListenerArn' | tr -d '"')
echo "http_listener_arn=${http_listener_arn}, updating .env"
sed -i "/^export HTTP_LISTENER_ARN/s|=.*$|=${http_listener_arn}|" scripts/.env

https_listener_arn=$(aws elbv2 create-listener \
    --load-balancer-arn ${load_balancer_arn} \
    --protocol HTTPS \
    --port 443 \
    --certificates CertificateArn=${ACM_CERTIFICATE_ARN} \
    --ssl-policy ELBSecurityPolicy-2016-08 --default-actions Type=forward,TargetGroupArn=${target_grp_arn}| jq '.Listeners | .[0] | .ListenerArn' | tr -d '"')
echo "https_listener_arn=${https_listener_arn} with Certificate ${ACM_CERTIFICATE_ARN}, updating .env"
sed -i "/^export HTTPS_LISTENER_ARN/s|=.*$|=${https_listener_arn}|" scripts/.env

# deploy to the ecs cluster
ecs-cli compose --file ${DOCKER_COMPOSE_YML_OUTPUT} --ecs-params ${ECS_PARAMS_OUTPUT} --project-name ${project_name} service up --create-log-groups --cluster-config ${project_name} --target-group-arn ${target_grp_arn} --container-name nginx --container-port 80
