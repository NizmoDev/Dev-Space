# JavaScript DevSpace Kubernetes Project

Ce projet permet de développer une application JavaScript (Node.js) directement dans un cluster Kubernetes grâce à DevSpace.

DevSpace synchronise automatiquement les fichiers locaux avec le container Kubernetes et permet un workflow de développement rapide avec hot reload via nodemon.

---

## 🚀 Prérequis

Avant de commencer, assure-toi d’avoir installé :

- Docker
- Kubernetes (kubectl configuré)
- Kind
- DevSpace
- Node.js

---

## 📦 Installation

### 1. Cloner le projet

```bash
git clone https://github.com/NizmoDev/Dev-Space.git
```

```bash
cd Dev-Space
```

---

### 2. Créer le cluster Kubernetes local

```bash
kind create cluster --name dev
```

---

### 3. Vérifier le cluster

```bash
kubectl cluster-info
```

```bash
kubectl get nodes
```

---

## ⚙️ Lancer le projet avec DevSpace

### 1. Démarrer le mode développement

```bash
devspace dev
```

DevSpace va automatiquement :

- Build l’image Docker
- Déployer les manifests Kubernetes
- Créer le port forwarding
- Synchroniser les fichiers locaux avec le pod Kubernetes

---

## 🌐 Accès à l’application

Ouvrir dans le navigateur :

```text
http://localhost:3000
```

---

## 🔄 Workflow de développement

Quand un fichier est modifié :

1. DevSpace synchronise le fichier dans le container Kubernetes
2. Nodemon détecte la modification
3. Node.js redémarre automatiquement
4. Le navigateur affiche la nouvelle version

---

## 🧠 Fonctionnement réel

```text
Machine locale
    ↓
DevSpace sync
    ↓
Pod Kubernetes
    ↓
Node.js + Nodemon
    ↓
localhost:3000 (port-forward)
```

👉 L’application tourne dans Kubernetes, pas directement sur la machine locale.

---

## 🔍 Vérifier les pods Kubernetes

```bash
kubectl get pods
```

---

## 🔍 Vérifier les services

```bash
kubectl get svc
```

---

## 🔍 Entrer dans le container

```bash
devspace enter
```

---

## 🔍 Voir les logs

```bash
devspace logs
```

---

## 🔍 Vérifier la synchronisation des fichiers

Dans le container :

```bash
cat app.js
```

---

## 🛑 Arrêter DevSpace

```bash
CTRL + C
```

---

## 🧹 Supprimer les ressources Kubernetes

```bash
devspace purge
```

---

## ❌ Supprimer le cluster Kind

```bash
kind delete cluster --name dev
```

---

## 📌 Notes importantes

- DevSpace ne fait PAS le hot reload
- Nodemon redémarre Node.js
- DevSpace synchronise uniquement les fichiers
- Kubernetes ne redémarre pas les pods pendant les modifications simples

---

## 🧪 Commandes utiles

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
