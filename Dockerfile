FROM node:20-alpine

RUN npm install -g npm@latest

# Install yarn and other dependencies via apk
RUN apk update && apk add yarn python3 g++ make && rm -rf /var/cache/apk/*

WORKDIR /app

COPY package*.json ./

RUN npm install

# RUN npm install -g expo-cli@latest

# Copy the project files to the container
COPY . .

COPY ./.dockerignore .
COPY ./docker-compose.yaml .
COPY ./Dockerfile .

# CMD ["npm", "start"]