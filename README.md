[![Build Status](https://travis-ci.org/dejanvasic85/mailord-api.svg?branch=master)](https://travis-ci.org/dejanvasic85/mailord-api)

# Skeleton project for Swagger

At the moment this is just a muck around project to learn few things
about NodeJs, Docker and AWS.
All snippets should be run within the root directory of the application

### Requirements

 - docker
 - mongo or mongo in docker
 - `npm install -g swagger`
 - `npm install -g babel-cli`

### Building and Running

 - `npm install`
 - `npm run build-start`

### Editing swagger

 - `npm run edit`

### Running in docker

 - `docker-compose build`
 - `docker-compose up -d`

To then remove:
 - `docker-compose down`