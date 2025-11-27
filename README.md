# UX Terms - MVP

A modern, gamified learning platform for Product, UX, and UI Design. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Gamification**: Earn XP, level up, and unlock badges.
- **Glossary**: Comprehensive A-Z dictionary of design terms.
- **Quizzes**: Interactive quizzes to test your knowledge.
- **Challenges**: Random design briefs to practice your skills.
- **PWA Support**: Installable on mobile and desktop.
- **Dark Mode**: Fully themed UI with glassmorphism aesthetics.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Theming**: next-themes
- **Animations**: Framer Motion
- **State**: React Context + localStorage

## Getting Started

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run Development Server**:

   ```bash
   npm run dev
   ```

3. **Open Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

- `/src/app`: App Router pages and layouts
- `/src/components`: Reusable UI components
- `/src/data`: Static data for Glossary, Quizzes, Challenges
- `/src/hooks`: Custom hooks (useGamification)
- `/src/styles`: Global styles and theme variables

## 🚀 Deployment Options

UX Terms supports **two deployment strategies** with separate configurations:

| Deployment Type | Config File | Output | Use Case |
|----------------|-------------|--------|----------|
| **GitHub Pages** | `next.config.static.js` | Static HTML | Free hosting, demos, reviews |
| **Docker** | `next.config.docker.js` | Server-side | Production, VPS, scalable hosting |

### Build Commands

```bash
npm run build          # Default build (static)
npm run build:static   # Build for GitHub Pages
npm run build:docker   # Build for Docker deployment
```

## 🌐 GitHub Pages Deployment (Static)

Deploy UX Terms as a static site on GitHub Pages for **free hosting**.

### Prerequisites

1. Create a new repository on GitHub: `https://github.com/aneel3692001/uxterms`
2. Push your code to the repository

### Deployment Steps

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push your code**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/aneel3692001/uxterms.git
   git push -u origin main
   ```

3. **Automatic Deployment**:
   - The GitHub Action will automatically build and deploy your site
   - Wait 2-3 minutes for the deployment to complete
   - Your site will be live at: **`https://aneel3692001.github.io/uxterms/`**

### Important Configuration

The static build uses `next.config.static.js` which includes `basePath: '/uxterms'` by default.

If you want a different base path or deploy to a custom domain:

1. Edit `next.config.static.js`
2. Change or remove the `basePath`
3. Rebuild and push

### View Deployment Status

- Go to the **Actions** tab in your GitHub repository
- You'll see the "Deploy to GitHub Pages" workflow running
- Once complete, your site is live! 🎉

## 🐳 Docker Deployment (Server-Side)

This project includes a fully automated CI/CD pipeline for **server-side rendering** with Docker.

### Key Differences from Static Build

- Full Next.js server-side rendering (SSR)
- Dynamic routes support
- API routes available
- Better performance for dynamic content

### How It Works

1. **Automatic Builds**: Every push to the `main` branch triggers a GitHub Action that:
   - Builds a production Docker image
   - Tags it as `ghcr.io/aneel3692001/uxterms:latest`
   - Pushes it to GitHub Container Registry

2. **Manual Deployment**: You can also trigger builds manually from the GitHub Actions tab using `workflow_dispatch`.

### Updating Your Running Container

If you have the application running on a server, update it with:

```bash
docker pull ghcr.io/aneel3692001/uxterms:latest
docker compose down
docker compose up -d
```

### Auto-Updates with Watchtower

The included `docker-compose.yml` configures **Watchtower** to automatically pull and deploy new images every 30 seconds. This means:

- Push code to GitHub → GitHub Actions builds image → Watchtower auto-updates your container
- Zero downtime deployments
- No manual intervention required

## Server Setup (VPS/EC2/Home Lab)

Deploy UX Terms on any server with Docker installed.

### Server Prerequisites

1. **Install Docker**:

   ```bash
   curl -fsSL https://get.docker.com | sh
   ```

2. **Install Docker Compose**:

   ```bash
   sudo apt-get update
   sudo apt-get install docker-compose-plugin
   ```

### Server Deployment Steps

1. **Clone the repository** (or just copy `docker-compose.yml`):

   ```bash
   git clone https://github.com/aneel3692001/uxterms.git
   cd uxterms
   ```

2. **Start the application**:

   ```bash
   docker compose up -d
   ```

3. **Access the application**:

   Open your browser to: `http://<SERVER_IP>:3000`

### Local Docker Testing

To test the Docker build locally:

```bash
# Build the image
docker build -t uxterms:local .

# Run the container
docker run -p 3000:3000 uxterms:local
```

### Container Management

```bash
# View logs
docker compose logs -f uxterms

# Restart the container
docker compose restart uxterms

# Stop all services
docker compose down

# Update to latest version
docker compose pull && docker compose up -d
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT
