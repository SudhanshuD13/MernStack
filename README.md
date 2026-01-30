# 🚀 Full-Stack MERN Task Manager (DevOps CI/CD Pipeline)

A production-ready **Task Management Application** built using the MERN stack and fully automated with a **Jenkins CI/CD pipeline**.

This project demonstrates an end-to-end DevOps workflow — from local containerized development to automated Docker image builds and Docker Hub deployment.

---

## 📌 Project Overview

This application allows users to create, manage, and track tasks using a clean React UI backed by a RESTful Node.js API and MongoDB database.

The entire system is:

- 🐳 Containerized using Docker  
- 🔁 Orchestrated locally using Docker Compose  
- 🤖 Automated using Jenkins CI/CD Pipeline  
- ☁️ Cloud-ready for deployment  

---

## 🏗️ Architecture

```
React (Frontend)  --->  Nginx  --->  Node.js/Express API  --->  MongoDB
        |                                                   |
        |---------------- Docker Compose --------------------|
```

---

## 🛠️ Tech Stack

| Layer       | Technology |
|------------|------------|
| Frontend   | React, Axios, Nginx |
| Backend    | Node.js, Express, Mongoose |
| Database   | MongoDB |
| DevOps     | Docker, Docker Compose, Jenkins, Git |
| CI/CD      | Jenkins Pipeline |

---

## 🚀 Quick Start (Local Setup)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/SudhanshuD13/MernStack.git
cd MernStack
```

### 2️⃣ Run Entire Stack

```bash
docker compose up --build
```

### 🔗 Access the Application

- **Frontend:** http://localhost  
- **Backend API:** http://localhost:5000/api/tasks  

---

## 🐳 Docker Implementation

### Frontend
- Multi-stage build
- Optimized production bundle
- Served via Nginx

### Backend
- Lightweight Node Alpine image
- Environment-based configuration

### MongoDB
- Persistent data using Docker volume

---

## 🤖 CI/CD Pipeline (Jenkins)

This project includes a fully functional `Jenkinsfile`.

### Pipeline Stages:

### 1️⃣ Checkout
Pulls latest code from GitHub repository.

### 2️⃣ Build Docker Images
Builds:
- Frontend image
- Backend image

Uses unique tagging:
```
${env.BUILD_NUMBER}
```

### 3️⃣ Docker Hub Login & Push
- Authenticates using Jenkins credentials
- Pushes versioned images to Docker Hub

### 4️⃣ Cleanup
- Removes local images
- Optimizes Jenkins server storage

---

## 🛡️ Real-World DevOps Issues Solved

| Problem | Root Cause | Solution |
|----------|------------|----------|
| `distutils` not found | Python 3.12 removed distutils | Migrated to Docker Compose V2 (`docker compose`) |
| Invalid reference format | Typo in Jenkins variable (`BUILD_NUMBERR`) | Corrected to `${env.BUILD_NUMBER}` |
| EBADENGINE warning | Node version mismatch | Upgraded base image to `node:20-alpine` |
| Unknown directive "deamon" | Typo in Nginx config | Corrected to `daemon off;` |

---

## 📊 Database Verification

```bash
# Get running containers
docker ps

# Enter MongoDB container
docker exec -it <mongodb_container_name> mongosh

# Inside Mongo shell
use tasks_db
db.tasks.find().pretty()
```

---

## 📁 Project Structure

```
MernStack/
│
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── src/
│
├── backend/
│   ├── Dockerfile
│   ├── routes/
│   ├── models/
│   └── server.js
│
├── docker-compose.yml
├── Jenkinsfile
└── README.md
```

---

## 📦 Docker Hub Images

```bash
docker pull sudhanshud100/mern-frontend:<build-number>
docker pull sudhanshud100/mern-backend:<build-number>
```

---

## ☁️ Future Enhancements

- [ ] Kubernetes deployment (K8s manifests)
- [ ] Helm chart integration
- [ ] AWS EC2 deployment using Terraform
- [ ] Prometheus & Grafana monitoring
- [ ] GitHub Actions pipeline alternative
- [ ] SSL with Nginx + Let's Encrypt

---

## 👨‍💻 Author

**Sudhanshu Dubey**  
DevOps | Full Stack Developer | Cloud Enthusiast  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and feel free to fork and improve it.
