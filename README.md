# Dev Sandbox
Web based sandbox for developers. It is a long running work in progress built on AWS infrastructure. It utilizes Django as the backend with React as the front. This is done by way of React making API calls through the Django REST Framework. These API's can be used to get and store data to and from a database, in my case PostgreSQL.

The project is setup using Docker to containerize NGINX and the project content separately. This is done to act as a reverse proxy in AWS ECS Fargate.

The project can be deployed using included shell scripts and env files that contain AWS login info. This requires both the AWS and ECS CLI.



