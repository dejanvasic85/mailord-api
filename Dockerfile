FROM node:latest
MAINTAINER Dejan Vasic

ENV NODE_ENV=production
ENV PORT=10010
ENV MONGO_CONNECTION=mongodb://mailord-mongo:27017/mailord-api

COPY . /var/mailord
WORKDIR /var/mailord

RUN npm install

EXPOSE $PORT
ENTRYPOINT ["npm", "start"]