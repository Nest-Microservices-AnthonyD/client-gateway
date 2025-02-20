FROM node:21-alpine3.19

# Create app directory

WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./

RUN npm install

# Bundle app source

COPY . .

EXPOSE 3000