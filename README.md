# ✨ Magical Apology Website - React Edition

A cinematic, emotional, and magical apology website inspired by the Harry Potter universe, built with **React**, **Three.js**, and **React Three Fiber**.

## 🎭 Features

- **React 18** with modern hooks and functional components
- **React Three Fiber** for stunning 3D effects
- **Framer Motion** for smooth page transitions
- **Three.js** for immersive 3D scenes:
  - Floating candles with flickering flames
  - Animated starfields
  - Interactive constellation
  - Shooting stars
  - Magical particle systems
- **Responsive design** for all devices
- **Local storage** for personalization
- **Keyboard navigation** support

## 🚀 Quick Start

### Prerequisites

- Node.js 14+ and npm (or yarn)

### Installation

1. Navigate to the react-app directory:
```bash
cd react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The app will automatically reload when you make changes!

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 🌐 Deployment

### Deploy to Netlify

1. Build your app:
```bash
npm run build
```

2. Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🎨 Customization Guide

### 1. Edit the Recipient's Name

In `src/components/LetterScreen.js`, the name is automatically saved to localStorage when edited in the browser.

### 2. Customize Letter Content

**Easy Way: Edit the JSON file**

Open `public/letter.json` and edit the text:

```json
{
  "greeting": "Dear [Their Name],",
  "paragraphs": [
    "Your custom paragraph 1...",
    "Your custom paragraph 2..."
  ],
  "emphasis": [
    "Your important message 1",
    "Your important message 2"
  ]
}
```

**See full guide:** [HOW-TO-EDIT-LETTER.md](./HOW-TO-EDIT-LETTER.md)

**Alternative: Edit the component directly**

Edit `src/components/LetterScreen.js` to modify the letter text.

### 3. Add Your Photos

In `src/components/MemoriesScreen.js`:

```jsx
// Replace placeholder with your image
<div className="memory-image">
  <img src="/path/to/your-image.jpg" alt="Memory" />
</div>
```

Add images to the `public` folder and reference them as `/image.jpg`.

### 4. Modify Constellation Reasons

In `src/components/AppreciationScreen.js`:

```jsx
const reasons = [
  'Your custom reason 1',
  'Your custom reason 2',
  // Add more...
];
```

### 5. Adjust Colors

Edit `src/index.css` CSS variables:

```css
:root {
  --color-night: #0a0e1a;
  --color-gold: #d4af37;
  /* Customize your colors */
}
```

### 6. Change Animation Speeds

In component files, adjust Framer Motion transition delays:

```jsx
transition={{ delay: 1, duration: 1 }}  // Slower
transition={{ delay: 0.5, duration: 0.5 }}  // Faster
```

### 7. Modify 3D Scenes

Edit scene files in `src/scenes/`:
- `StarfieldScene.js` - Opening starfield
- `CandlesScene.js` - Floating candles
- `ConstellationScene.js` - Interactive stars
- `FinalStarsScene.js` - Final scene

Adjust particle counts, colors, and animations as needed.

## 📁 Project Structure

```
react-app/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── OpeningScreen.js
│   │   ├── MistakeScreen.js
│   │   ├── ApologyScreen.js
│   │   ├── LetterScreen.js
│   │   ├── MemoriesScreen.js
│   │   ├── AppreciationScreen.js
│   │   ├── NoPressureScreen.js
│   │   ├── FinalScreen.js
│   │   ├── ClosingScreen.js
│   │   ├── MusicToggle.js
│   │   └── *.css          # Component styles
│   ├── scenes/            # Three.js scenes
│   │   ├── StarfieldScene.js
│   │   ├── CandlesScene.js
│   │   ├── ConstellationScene.js
│   │   └── FinalStarsScene.js
│   ├── App.js             # Main app component
│   ├── App.css            # Global app styles
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies
└── README.md             # This file
```

## 🎯 Component Overview

### OpeningScreen
- Animated quote reveal
- Starfield background
- Magical particles

### MistakeScreen
- Parchment paper effect
- Ink writing animation
- Line-by-line text reveal

### ApologyScreen
- 20 floating 3D candles
- Flickering flame effects
- Staggered text animations

### LetterScreen
- Wax seal decoration
- Editable recipient name
- Heartfelt apology letter
- Local storage integration

### MemoriesScreen
- Photo frame grid
- Hover effects
- Customizable memories

### AppreciationScreen
- Interactive 3D constellation
- Clickable stars
- Connecting lines animation
- Reason reveal system

### NoPressureScreen
- Simple, sincere message
- Minimal design
- Respectful tone

### FinalScreen
- Dense starfield
- Shooting stars
- Floating envelope
- Emotional finale

### ClosingScreen
- Fade to black
- Final thank you
- Floating sparkle animation

## ⌨️ Keyboard Shortcuts

- **Enter** or **→** - Next section
- **←** - Previous section
- **Click music button** - Toggle ambient sound

## 🔧 Troubleshooting

### Issue: npm install fails
**Solution:** Delete `node_modules` and `package-lock.json`, then run `npm install` again.

### Issue: White screen after build
**Solution:** Check browser console for errors. Ensure all imports are correct and dependencies are installed.

### Issue: 3D scenes not appearing
**Solution:** Check if WebGL is enabled in your browser. Test in Chrome or Firefox.

### Issue: Animations laggy on mobile
**Solution:** 3D scenes are performance-intensive. Consider reducing particle counts in scene files.

### Issue: Images not loading
**Solution:** Place images in the `public` folder and reference as `/image.jpg`, not `./image.jpg`.

## 🛠️ Tech Stack

- **React 18.2** - UI framework
- **React Three Fiber 8.15** - React renderer for Three.js
- **@react-three/drei 9.92** - Useful helpers for R3F
- **Three.js 0.160** - 3D graphics library
- **Framer Motion 10.16** - Animation library
- **React Scripts 5.0** - Build tooling

## 📝 Customization Checklist

Before sharing your website:

- [ ] Personalize recipient name in letter
- [ ] Customize letter content
- [ ] Add your personal photos
- [ ] Update memory descriptions
- [ ] Modify constellation reasons
- [ ] Test on mobile devices
- [ ] Check all animations work
- [ ] Build production version
- [ ] Deploy to hosting service
- [ ] Test live URL

## 💡 Performance Tips

1. **Optimize Images**: Compress images before adding (use TinyPNG)
2. **Reduce Particles**: Lower particle counts on mobile
3. **Lazy Load**: Components already use React.lazy where appropriate
4. **Build Optimizations**: Production build automatically optimizes

## 🎨 Advanced Customization

### Add New Section

1. Create component in `src/components/`:
```jsx
import React from 'react';
import { motion } from 'framer-motion';

function NewSection({ onNext }) {
  return (
    <div className="screen">
      <div className="screen-content">
        <motion.h1>Your Content</motion.h1>
        <button className="magical-button" onClick={onNext}>
          Continue ✨
        </button>
      </div>
    </div>
  );
}

export default NewSection;
```

2. Import and add to `App.js`:
```jsx
import NewSection from './components/NewSection';
// Add to sections array and switch statement
```

### Create Custom 3D Scene

1. Create new file in `src/scenes/`:
```jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';

function CustomScene() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Canvas>
        {/* Add your 3D objects here */}
      </Canvas>
    </div>
  );
}

export default CustomScene;
```

2. Import in your component and use it.

## 🌟 Credits

**Fonts:**
- Cinzel by Natanael Gama
- EB Garamond by Georg Duffner
- Cormorant Garamond by Christian Thalmann

**Inspiration:**
- Harry Potter universe by J.K. Rowling
- Hogwarts magical atmosphere

**Built with:**
- React, Three.js, React Three Fiber, Framer Motion

## 📄 License

This project is for personal use. The Harry Potter universe and related elements are trademarks of Warner Bros. Entertainment Inc.

## ❤️ Final Words

This is more than just code—it's a heartfelt message. Use it sincerely, and may it help mend what needs mending.

*"After all this time?"*  
*"Always."*

---

**Made with magic, code, and genuine remorse** ✨💔

For issues or questions, check the troubleshooting section or inspect the code comments.
