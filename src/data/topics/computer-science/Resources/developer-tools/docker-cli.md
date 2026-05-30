# 🐳 Docker CLI

Docker allows developers to package applications and their dependencies into
containers. Containers make applications portable, consistent, and easy to
deploy.

## 🚀 What is Docker?

Docker helps you:

- Run applications in isolated environments
- Avoid "works on my machine" issues
- Simplify deployments
- Create reproducible development environments

Think of a container as a lightweight virtual machine.

---

## 📦 Core Docker Concepts

### Image

A blueprint for creating containers.

Examples:

- node:22
- nginx
- mysql
- redis

### Container

A running instance of an image.

### Dockerfile

Instructions for building an image.

### Volume

Persistent storage for containers.

### Network

Communication layer between containers.

---

## 🔍 Check Docker Installation

View Docker version:

docker --version

View detailed information:

docker info

---

## 📥 Pull an Image

Download an image from Docker Hub.

Example:

docker pull nginx

docker pull node:22

List downloaded images:

docker images

---

## ▶️ Run a Container

Run Nginx:

docker run nginx

Run in detached mode:

docker run -d nginx

Run with custom port:

docker run -d -p 8080:80 nginx

Access:

http://localhost:8080

---

## 📋 View Running Containers

Show running containers:

docker ps

Show all containers:

docker ps -a

---

## ⏹️ Stop a Container

Stop container:

docker stop container_id

Example:

docker stop 8d6abf1

---

## 🗑️ Remove Containers

Remove a container:

docker rm container_id

Remove all stopped containers:

docker container prune

---

## 🖼️ Remove Images

Delete image:

docker rmi image_id

Example:

docker rmi nginx

---

## 📜 View Container Logs

Show logs:

docker logs container_id

Follow logs in real time:

docker logs -f container_id

Useful for debugging.

---

## 🖥️ Access a Running Container

Open shell:

docker exec -it container_id bash

For Alpine Linux:

docker exec -it container_id sh

Useful for:

- Debugging
- Checking files
- Running commands

---

## 📂 Mount Volumes

Map local folder into container.

Example:

docker run -v $(pwd):/app node:22

Benefits:

- Persistent data
- Live code changes

---

## 🌐 Port Mapping

Syntax:

host_port:container_port

Example:

docker run -p 3000:3000 app

Request flow:

Browser ↓ localhost:3000 ↓ Container:3000

---

## 📝 Dockerfile Example

Create:

Dockerfile

FROM node:22

WORKDIR /app

COPY package\*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

---

## 🏗️ Build an Image

Build image:

docker build -t my-app .

List images:

docker images

---

## ▶️ Run Custom Image

docker run -p 3000:3000 my-app

Application becomes available on:

http://localhost:3000

---

## 📦 Docker Volumes

Create volume:

docker volume create app-data

List volumes:

docker volume ls

Remove volume:

docker volume rm app-data

Use volume:

docker run -v app-data:/data nginx

---

## 🌍 Docker Networks

List networks:

docker network ls

Create network:

docker network create app-network

Run container on network:

docker run --network app-network nginx

Useful for microservices.

---

## ⚛️ Docker for React Applications

Build React app:

docker build -t react-app .

Run:

docker run -p 3000:3000 react-app

Common setup:

Frontend Container ↓ Backend Container ↓ Database Container

Connected via Docker network.

---

## 🐘 PostgreSQL Example

Run PostgreSQL:

docker run -d \
 --name postgres-db \
 -e POSTGRES_PASSWORD=secret \
 -p 5432:5432 \
 postgres

Connect application using:

localhost:5432

---

## 🔥 Useful Commands

View resource usage:

docker stats

Inspect container:

docker inspect container_id

View processes:

docker top container_id

Show image history:

docker history image_name

---

## 🧹 Cleanup Commands

Remove stopped containers:

docker container prune

Remove unused images:

docker image prune

Remove everything unused:

docker system prune

Remove aggressively:

docker system prune -a

Be careful with this command.

---

## 🚨 Common Troubleshooting

### Port Already Used

Error:

port is already allocated

Check:

lsof -i :3000

Or use another port.

### Container Exits Immediately

Check logs:

docker logs container_id

### Cannot Access App

Verify:

- Container running
- Correct port mapping
- Firewall settings

---

## ⭐ Best Practices

- Use official images when possible
- Keep images small
- Use .dockerignore
- Pin image versions
- Store secrets outside images
- Remove unused containers regularly
- Use volumes for persistent data
- Use networks for service communication

Docker is one of the most valuable tools for modern development because it
ensures your application behaves consistently across development, testing, and
production environments.
