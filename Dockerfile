# pull official base image
FROM python:3.6-alpine

# set work directory
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DEBUG 0

# install psycopg2
RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
		    && apk add postgresql-dev \
				    && pip install psycopg2 \
						    && apk del build-deps

# install nodejs
RUN apk add --update nodejs nodejs-npm

# install dependencies
COPY ./requirements.txt .
RUN npm install
RUN pip3 install -r requirements.txt

# copy project
COPY . .

# add and run as non-root user
RUN adduser -D myuser
USER myuser
