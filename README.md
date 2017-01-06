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

docker-compose coming soon. For the moment just
use docker build and run.

 - `docker run -d --name mailord-mongo mongo`
 - `docker build -t mailord/node .`