# build python nodejs image
FROM nikolaik/python-nodejs:latest

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
COPY requirements.txt /usr/src/app
RUN pipenv install --dev \
	&& pipenv lock -r > requirements.txt

COPY package*.json ./
RUN npm install

# copy project
COPY . /usr/src/app

# add and run as non-root user
#RUN adduser -D myuser
#USER myuser
