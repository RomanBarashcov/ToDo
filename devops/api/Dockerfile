FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . ../api

RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]