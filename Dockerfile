###########
# BUILDER #
###########

# build python nodejs image
FROM nikolaik/python-nodejs:latest AS base

# set environment variables
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONFAULTHANDLER 1
ENV PYTHONUNBUFFERED 1

########
# DEPS #
########
#
FROM base AS deps

# Install compilation dependencies
RUN apt-get update && apt-get install -y --no-install-recommends gcc

# Install dependencies in /.venv
COPY Pipfile .
COPY Pipfile.lock .
RUN PIPENV_VENV_IN_PROJECT=1 pipenv install --deploy

# install node dependencies
COPY package*.json ./
RUN npm install

#########
# FINAL #
#########

# pull base image
FROM base AS runtime

# Copy env from deps stage
COPY --from=deps /.venv /.venv
COPY --from=deps /node_modules ./node_modules
ENV PATH="/.venv/bin:$PATH"
ENV UWSGI_WSGI_FILE=dev-sandbox/wsgi.py

# Create user
RUN useradd --create-home app

# create directories
ENV HOME=/home/app
ENV APP_HOME=/home/app/web
RUN mkdir $APP_HOME
RUN mkdir $APP_HOME/staticfiles
WORKDIR $APP_HOME

# copy project
COPY . $APP_HOME

RUN chown -R app:app $APP_HOME

USER app
