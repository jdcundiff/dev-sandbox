#!/usr/bin/env bash

# cleanup aws log group
echo "Cleaning up AWS log group"
aws logs delete-log-group --log-group-name ${AWS_PROJECT}

# clean up ecr
echo "Cleaning up ECR"
python scripts/del_ecr.py

# clean up ecs cluster
echo "Cleaning up ESC cluster"
ecs-cli compose --file docker-compose.ecs.yml --ecs-params ecs-params.ecs.yml --project-name ${AWS_PROJECT} service down --cluster-config ${AWS_PROJECT}
ecs-cli down --force --cluster-config ${AWS_PROJECT}

# delete load balancer listeners
echo "Deleting HTTP listener ${HTTP_LISTENER_ARN}"
aws elbv2 delete-listener --listener-arn ${HTTP_LISTENER_ARN}

echo "Deleting HTTPS listener ${HTTPS_LISTENER_ARN}"
aws elbv2 delete-listener --listener-arn ${HTTPS_LISTENER_ARN}

# delete load balancer
echo "Deleting load balancer ${LOAD_BALANCER_ARN}"
aws elbv2 delete-load-balancer --load-balancer-arn ${LOAD_BALANCER_ARN}

# delete target group
echo "Deleting target group"
aws elbv2 delete-target-group --target-group-arn ${TARGET_GRP_ARN}

# clean up role
echo "Detaching roles..."
aws iam detach-role-policy --role-name ${AWS_ROLE} --policy-arn arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy --profile ${AWS_PROJECT}
aws iam delete-role --role-name ${AWS_ROLE} --profile ${AWS_PROJECT}
