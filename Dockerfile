FROM node:latest
MAINTAINER Dejan Vasic

ENV NODE_ENV=production
ENV PORT=10010

COPY . /var/mailord
WORKDIR /var/mailord

RUN npm install

EXPOSE $PORT
ENTRYPOINT ["npm", "start"]