# 🚀 Quick Start Guide

Get your magical apology website running in 3 simple steps!

## Step 1: Install Dependencies

```bash
cd react-app
npm install
```

⏱️ This will take 2-3 minutes.

## Step 2: Start Development Server

```bash
npm start
```

✨ Your browser will automatically open to [http://localhost:3000](http://localhost:3000)

## Step 3: Customize & Deploy

### Quick Customization

1. **Change the name** - Just edit it in the browser on the Letter screen (it auto-saves!)

2. **Update the letter** - Edit `src/components/LetterScreen.js`

3. **Add photos** - Put images in `public/` folder and update `src/components/MemoriesScreen.js`

### Deploy for Free

**Netlify (Easiest)**
```bash
npm run build
# Then drag the 'build' folder to netlify.com/drop
```

**Vercel**
```bash
npm install -g vercel
npm run build
vercel
```

## 🎯 That's It!

You now have a magical, 3D animated apology website running!

For detailed customization, see the main [README.md](./README.md)

## ⚡ Commands Cheat Sheet

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Create production build |
| `npm test` | Run tests |

## 🆘 Quick Fixes

**Port 3000 already in use?**
```bash
# Kill the process
kill -9 $(lsof -ti:3000)
# Or use a different port
PORT=3001 npm start
```

**Module not found?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Need help?** Check [README.md](./README.md) for full documentation!

---

**Pro tip:** Press `→` or `Enter` to navigate, `←` to go back! 🎮
