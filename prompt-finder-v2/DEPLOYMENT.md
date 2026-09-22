# Deployment Guide - Prompt Finder V2

## Quick Deploy (3 minutes)

### Option 1: **Render.com** ⭐ (Easiest)
1. Sign up at https://render.com (free tier)
2. Connect GitHub
3. Click "New +" → "Web Service"
4. Select this repository
5. Auto-fills most settings, just deploy!
6. Get free subdomain: `your-app.onrender.com`

**Pros:** Free forever on free tier, no credit card for 3 months  
**Cons:** Spins down after 15 min inactivity (free tier)

---

### Option 2: **Railway.app**
1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub"
3. Select repository
4. Auto-detects Node.js
5. Deploy (includes $5 free credit/month)

**Pros:** Better performance, faster boot  
**Cons:** Limited free tier

---

### Option 3: **Fly.io**
```bash
# Install flyctl: https://fly.io/docs/hands-on/install-flyctl/
flyctl auth login
flyctl launch
flyctl deploy
```

**Pros:** Free tier with 3 shared VMs  
**Cons:** Requires CLI setup

---

## Manual Setup (Local Testing)

```bash
cd prompt-finder-v2
npm install
npm start
# Visit http://localhost:3000
```

---

## Environment Variables

Copy `.env.example` to `.env`:
```bash
NODE_ENV=production
PORT=3000
```

---

## Production Checklist

- ✅ `.gitignore` added
- ✅ `Procfile` for Heroku-compatible hosts
- ✅ `render.yaml` for Render
- ✅ `fly.toml` for Fly.io
- ✅ Environment variables configured
- ✅ Safety checks included (content moderation)
- ✅ Rate limiting ready (can be added)

---

## After Deployment

1. Test the live URL
2. Monitor logs in deployment dashboard
3. Share your deployment URL
4. Optional: Add custom domain (in platform settings)

---

## Security Notes

Before scaling production:
- ✅ Already has: Content safety filters, size limits
- 📌 Consider adding: Rate limiting, abuse reporting system, analytics
- 📌 Database: Consider storing user-reported safe prompts (MongoDB Atlas free tier)

---

## Support

- Render docs: https://render.com/docs
- Railway docs: https://railway.app/docs
- Fly.io docs: https://fly.io/docs
