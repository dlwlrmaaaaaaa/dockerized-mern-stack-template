# MERN Stack Application

## Introduction
This project is a full-stack web application using the MERN (MongoDB, Express, React, Node.js) stack, Dockerized for easy deployment and development. Follow the instructions below to set up and run the project using Docker.

## Prerequisites
- Docker
- Docker Compose
- Docker Desktop
## Project Structure
├── backend
│ ├── Dockerfile
│ ├── package.json
│ ├── config
│ └── ...
├── frontend
│ ├── Dockerfile
│ ├── package.json
│ └── ...
├── docker-compose.yml
├── docker-compose.dev.yaml
└── README.md



## Step-by-Step Setup

### Step 1: Create Dockerfile for Frontend

In the `frontend` directory, create a `Dockerfile` with the following content:

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

# Start the application.
CMD ["npm", "run", "dev"]



### Step 2: Create Dockerfile for Backend 
In the `Backend` directory, create a `Dockerfile` with the following content:
FROM node:18

WORKDIR /app

COPY package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY . .
ENV PORT=3000
EXPOSE $PORT
CMD ["node", "index.js"]

### Step 3: In the project root directory, create a docker-compose.yml file with the following content:

version: '3'
services:
  backend:
    build:
      context: ./backend      
    ports:
      - "3000:4000"
    environment:
      - PORT=4000
    depends_on:
      - mongo
  frontend:
    build: 
      context: ./frontend
    ports:
      - "5173:5173"
    depends_on:
      - backend
    environment:
      - CHOKIDAR_USEPOLLING=true
  mongo:
    image: mongo:4.4
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_ROOT_PASSWORD=1234
      - MONGODB_URI=mongodb://root:1234@mongo:27017/?authSource=admin
    volumes:
      - mongo-db:/data/db
volumes:
  mongo-db:

### Step 4: In the project root directory, create a docker-compose.dev.yml file with the following content:


version: '3'
services:
  backend:
    build:
      context: ./backend      
    ports:
      - "3000:4000"
    environment:
      - PORT=4000
    depends_on:
      - mongo
  frontend:
    build: 
      context: ./frontend
    ports:
      - "5173:5173"
    depends_on:
      - backend
    environment:
      - CHOKIDAR_USEPOLLING=true
  mongo:
    image: mongo:4.4
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_ROOT_PASSWORD=1234
      - MONGODB_URI=mongodb://root:1234@mongo:27017/?authSource=admin
    volumes:
      - mongo-db:/data/db
volumes:
  mongo-db:

### Step 5: Navigate to the project root directory and run the following command to build and start the Docker containers:

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build

### Step 6: Access the application
##for frontend
http://localhost:5173
## for backend
http://localhost:3000/api




This README provides a step-by-step guide to set up your Dockerized MERN stack application, including creating Dockerfiles, the Docker Compose file, and configuring environment variables. Let me know if there are any additional details or modifications you would like to include!



