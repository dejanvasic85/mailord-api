FROM mhart/alpine-node:base-6
MAINTAINER Dejan Vasic

ENV NODE_ENV=production
ENV PORT=10010
ENV MONGO_CONNECTION=mongodb://mailordapi_mongodb_1:27017/mailord-api

COPY . /var/mailord
WORKDIR /var/mailord

# RUN npm install # Cannot run npm install on alpine-node because it doesn't have npm!

EXPOSE $PORT
ENTRYPOINT ["node", "dist/app.js"]