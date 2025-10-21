# Kids Game App

An educational React + Vite app with simple game levels (Colors, Alphabets, Numbers) and a global-awareness theme (continents).

## ✨ Features
- Levels: **Colors**, **Alphabets**, **Numbers**
- Progression with **streak** logic (advance after 3 correct answers)
- **Restart** button to reset level/continent/streak
- Lightweight UI components (Button, Card)
- Works out of the box — no path aliases required

---

## 🚀 Quick Start

```bash
# 1) Create and enter the project
npm create vite@latest kids-game-app --template react
cd kids-game-app

# 2) Install deps
npm install
npm install framer-motion

# 3) Add the app files
# Place your files following the structure below (or copy from this repo)

# 4) Run locally
npm run dev
```
Open the URL shown (usually **http://localhost:5173**).

---

## 📁 Project Structure

```
kids-game-app/
├─ package.json
├─ index.html
├─ vite.config.js
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ KidsGameApp.jsx
   └─ components/
      └─ ui/
         ├─ Button.jsx
         └─ Card.jsx
```

**Imports use relative paths**, e.g. `./components/ui/Button`.

---

## 🧩 Wiring the App

`src/App.jsx`
```jsx
import KidsGameApp from "./KidsGameApp";
export default function App() { return <KidsGameApp />; }
```

`src/KidsGameApp.jsx` exposes the game logic (levels, continents, streaks).  
`src/components/ui/Button.jsx` and `Card.jsx` are minimal UI primitives.

---

## ⤴️ Push to GitHub

```bash
git init
git add .
git commit -m "Initial: Kids Game App"
# Create an empty repo on GitHub named kids-game-app, then:
git remote add origin https://github.com/<YOUR_USERNAME>/kids-game-app.git
git branch -M main
git push -u origin main
```

---

## 🌐 Deploy

### Option A — Vercel (recommended)
1. Go to **vercel.com → Add New → Project**  
2. Connect GitHub and select `kids-game-app`  
3. Build command: `npm run build`  
4. Output directory: `dist` (auto-detected)  
5. Click **Deploy**

### Option B — Netlify
1. **New site → Import from Git**  
2. Choose `kids-game-app`  
3. Build: `npm run build` • Publish: `dist`  
4. **Deploy**

---

## 🧪 Troubleshooting

- **Blank page after deploy**  
  Ensure `vite.config.js` has the correct `base` if deploying to a GitHub Pages subpath.
- **Module path errors (`@/...`)**  
  Replace alias imports with relative paths like `./components/ui/Button`.
- **Port in use**  
  Stop other dev servers or run `npm run dev -- --port=5174`.

---

## 🖼️ Branding Assets

- `logo.svg` (vector)  
- `favicon.png` (64x64)

Add them to your public root or reference them in `index.html`:
```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

---

## 📝 License
You own and control this project under your chosen license. If unsure, MIT is a simple permissive choice.
