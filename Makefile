build:
	docker-compose build --build-arg build_env="production"

deploy:
	./scripts/deploy.sh

build-dev:
	docker-compose down -v
	docker-compose build --no-cache
	docker-compose up -d

build-dev-cached:
	docker-compose down -v
	docker-compose build
	docker-compose up -d

down-dev:
	docker-compose -v

node:
	./docker-entrypoint.sh
