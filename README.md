# JavaScript DevSpace Kubernetes Project

This project allows you to develop a JavaScript (Node.js) application directly in a Kubernetes cluster with DevSpace.

DevSpace automatically syncs local files with the Kubernetes container and enables a fast development workflow with hot reload through nodemon.

---

## 🚀 Prerequisites

Before you start, make sure you have installed:

- Docker
- Kubernetes (`kubectl` configured)
- Kind
- DevSpace
- Node.js

---

## 📦 Installation

### 1. Clone the project

```bash
git clone https://github.com/NizmoDev/Dev-Space.git
```

```bash
cd Dev-Space
```

---

### 2. Create the local Kubernetes cluster

```bash
kind create cluster --name dev
```

---

### 3. Check the cluster

```bash
kubectl cluster-info
```

```bash
kubectl get nodes
```

---

## ⚙️ Run the project with DevSpace

### 1. Start development mode

```bash
devspace dev
```

DevSpace will automatically:

- Build the Docker image
- Deploy the Kubernetes manifests
- Create port forwarding
- Sync local files with the Kubernetes pod

---

## 🌐 Access the application

Open in the browser:

```text
http://localhost:3000
```

---

## 🔄 Development workflow

When a file is modified:

1. DevSpace syncs the file into the Kubernetes container
2. Nodemon detects the modification
3. Node.js restarts automatically
4. The browser displays the new version

---

## 🧠 Real behavior

```text
Local machine
    ↓
DevSpace sync
    ↓
Kubernetes pod
    ↓
Node.js + Nodemon
    ↓
localhost:3000 (port-forward)
```

👉 The application runs in Kubernetes, not directly on the local machine.

---

## 🔍 Check Kubernetes pods

```bash
kubectl get pods
```

---

## 🔍 Check services

```bash
kubectl get svc
```

---

## 🔍 Enter the container

```bash
devspace enter
```

---

## 🔍 View logs

```bash
devspace logs
```

---

## 🔍 Check file synchronization

Inside the container:

```bash
cat app.js
```

---

## 🛑 Stop DevSpace

```bash
CTRL + C
```

---

## 🧹 Delete Kubernetes resources

```bash
devspace purge
```

---

## ❌ Delete the Kind cluster

```bash
kind delete cluster --name dev
```

---

## 📌 Important notes

- DevSpace does NOT handle hot reload
- Nodemon restarts Node.js
- DevSpace only syncs files
- Kubernetes does not restart pods during simple modifications

---

## 🧪 Useful commands

```bash
kubectl get pods
```

```bash
kubectl get deployments
```

```bash
kubectl get svc
```

```bash
devspace dev
```

```bash
devspace enter
```

```bash
devspace logs
```

```bash
devspace purge
```

```bash
docker ps
```

---

## 📚 Tech stack

- JavaScript
- Node.js
- Express.js
- Docker
- Kubernetes
- Kind
- DevSpace
- Nodemon
