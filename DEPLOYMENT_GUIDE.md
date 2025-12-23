# Smart Kids Quiz - Deployment Guide

## Deploy to Vercel (Easiest Option)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
This will open your browser to authenticate.

### Step 3: Deploy
```bash
vercel
```
For production deployment:
```bash
vercel --prod
```

### Step 4: Set Environment Variables
After deployment, go to your Vercel dashboard:
1. Go to your project
2. Click "Settings"
3. Click "Environment Variables"
4. Add: `OPENAI_API_KEY` with your OpenAI API key
5. Redeploy for changes to take effect

---

## Alternative: Deploy to Netlify

### Option A: Drag & Drop (Quickest)
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag your `dist/` folder to the page

### Option B: GitHub Integration
1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Add environment variable: `OPENAI_API_KEY`

---

## Alternative: Deploy to GitHub Pages

### Step 1: Update vite.config.js
Make sure base is set to your repo name:
```js
base: '/smart-kids-quiz/'
```

### Step 2: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 3: Add deploy script to package.json
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

### Step 4: Deploy
```bash
npm run deploy
```

**Note:** GitHub Pages doesn't support serverless functions, so you'll need to use client-side API calls or a separate backend.

---

## Pre-Deployment Checklist

- [ ] Test build locally: `npm run build`
- [ ] Test preview: `npm run preview`
- [ ] Have your OpenAI API key ready
- [ ] Ensure all environment variables are documented
- [ ] Test all features work in production mode

---

## Post-Deployment

1. Test all quiz categories work
2. Test AI lesson generation
3. Test on mobile devices
4. Share the URL!

## Troubleshooting

**Build fails:**
- Check `npm run build` runs without errors locally
- Verify all dependencies are in package.json

**API calls fail:**
- Verify OPENAI_API_KEY is set in hosting platform
- Check API routes are in the correct folder (`api/` for Vercel)

**404 errors:**
- For GitHub Pages, verify `base` in vite.config.js matches repo name
- For other hosts, check routing configuration

---

## Your URLs
- Local dev: http://localhost:5173
- Vercel: Will be assigned after deployment (e.g., smart-kids-quiz-xyz.vercel.app)
- Custom domain: Can be configured in Vercel/Netlify dashboard
