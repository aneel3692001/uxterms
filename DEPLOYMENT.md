# Deployment Strategy Guide

UX Terms uses a **dual deployment strategy** to support both static and server-side rendering.

## 📁 Configuration Files

### 1. `next.config.js` (Default)

- **Purpose**: Development and default builds
- **Output**: Static export
- **Used for**: Local development, quick testing

### 2. `next.config.static.js`

- **Purpose**: GitHub Pages deployment
- **Output**: Static HTML/CSS/JS
- **Features**:
  - Fully static export
  - Pre-configured with `basePath: '/uxterms'`
  - Optimized for GitHub Pages
  - No server required

### 3. `next.config.docker.js`

- **Purpose**: Docker/VPS deployment
- **Output**: Standalone server build
- **Features**:
  - Full SSR (Server-Side Rendering)
  - Dynamic routes
  - API routes support
  - Production-optimized

## 🔧 Build Commands

```bash
# Default build (static)
npm run build

# GitHub Pages build
npm run build:static

# Docker build
npm run build:docker
```

## 🌐 When to Use Each Deployment

### Use GitHub Pages (Static)

- ✅ You want **free hosting**
- ✅ You need to **share demos/previews**
- ✅ Content is mostly static
- ✅ You want **zero maintenance**

### Use Docker (Server-Side)

- ✅ You need **SSR capabilities**
- ✅ You have **dynamic content**
- ✅ You want **full control**
- ✅ You need **API routes**
- ✅ Running on VPS/dedicated server

## 🚀 Quick Start Examples

### Deploy to GitHub Pages

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
# Automatic deployment via GitHub Actions
# Live at: https://aneel3692001.github.io/uxterms/
```

### Deploy to Docker

```bash
# On your server
docker pull ghcr.io/aneel3692001/uxterms:latest
docker compose up -d
# Live at: http://your-server-ip:3000
```

## 🔄 Switching Between Deployments

You can maintain **both deployments simultaneously**:

1. **GitHub Pages** for public previews and demos
2. **Docker** for your production environment

Both will update automatically when you push to the `main` branch!

## 📝 Notes

- Static builds are **faster** but lack SSR
- Docker builds are **more powerful** but require a server
- Both use the **same source code** - just different configs
- Choose based on your needs - or use both!
