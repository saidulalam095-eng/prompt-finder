# Prompt Finder V2

Free AI image prompt discovery website. No payment system.

## 🚀 Quick Start (Local)

```bash
npm install
npm start
```
Open http://localhost:3000

## 🌐 Deploy for FREE

### **Render.com** ⭐ (Recommended - Easiest)
1. Push to GitHub
2. Go to https://render.com
3. Click "New +" → "Web Service"
4. Connect your repo
5. Deploy (takes 2 min)
6. **Free forever** on free tier

### **Railway.app**
Go to https://railway.app → "New Project" → Select your repo → Deploy

### **Fly.io**
```bash
flyctl auth login
flyctl launch
flyctl deploy
```

👉 **Full deployment guide:** See [DEPLOYMENT.md](./DEPLOYMENT.md)

## ✨ Features

- 🔍 Search AI image prompts by category
- 🔒 Built-in safety filters (blocks harmful requests)
- 📋 Copy prompts easily
- 🚀 Production-ready with best practices
- 💾 No database needed (free tier compatible)

## 📋 Production Checklist

- ✅ Environment variables configured
- ✅ Content safety filters
- ✅ Deployment configs included (.env, Procfile, render.yaml, fly.toml)
- ✅ Ready for Render, Railway, Fly, Heroku

**Next steps:** Consider adding rate limiting and abuse reporting before large-scale public launch.
