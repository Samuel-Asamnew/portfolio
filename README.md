# Samuel Asamnew – Portfolio

A personal portfolio built with **React + Vite**, deployed to **GitHub Pages**.

## Tech Stack
- React 18
- Vite 5
- Lucide React (icons)
- Google Fonts (Syne + DM Mono)

## Getting Started

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

### Option A – Automatic (GitHub Actions) ✅ Recommended

1. Create a new GitHub repository (e.g. `portfolio`)
2. Update `vite.config.js` — set `base` to your repo name:
   ```js
   base: '/portfolio/',   // replace 'portfolio' with your repo name
   ```
3. Push this code to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
4. In your GitHub repo → **Settings → Pages → Source** → select **GitHub Actions**
5. That's it! Every push to `main` will auto-deploy. 🎉

Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

### Option B – Manual (`gh-pages` package)

```bash
npm run build
npm run deploy
```

## Customisation

All your personal data lives in one file: **`src/data.js`**

Update:
- `github` and `linkedin` URLs with your real profiles
- Add/edit projects in the `projects` array
- Adjust skill levels in the `skills` array

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data.js        ← edit your info here
├── App.jsx
├── main.jsx
└── index.css
```
