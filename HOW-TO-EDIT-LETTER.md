# 📝 How to Edit the Apology Letter

The letter content is stored in a JSON file that you can easily edit!

## 🎯 Quick Start

1. Open `public/letter.json` in any text editor
2. Edit the text between the quotes
3. Save the file
4. Refresh your browser to see changes (in dev mode)
5. For production, rebuild: `npm run build`

## 📄 File Location

```
react-app/public/letter.json
```

## 🔧 How to Edit

### Change the Greeting

```json
"greeting": "Dear Sarah,"
```

### Edit Paragraphs

The letter is divided into sections:

```json
"paragraphs": [
  "Your first paragraph here...",
  "Your second paragraph here...",
  "Continue adding paragraphs..."
]
```

**Tips:**
- Each paragraph is a separate string
- Add commas between paragraphs
- Use `**text**` for **bold**
- Use `*text*` for *italic*

### Emphasis Sections (The Important Parts)

```json
"emphasis": [
  "Your first emphasis line",
  "Your second emphasis line"
]
```

These appear in the center with special formatting.

### Final Paragraphs

```json
"finalParagraphs": [
  "Your closing thoughts...",
  "Final message..."
]
```

### Change the Signature

```json
"closing": "With love,",
"signature": "Your Name"
```

## ✨ Formatting Guide

### Bold Text
```json
"I **really** mean this"
```
Becomes: I **really** mean this

### Italic Text
```json
"I am *truly* sorry"
```
Becomes: I am *truly* sorry

### Line Breaks
Each string in the array becomes a new paragraph automatically.

## 📋 Example Edit

**Before:**
```json
"paragraphs": [
  "Generic apology text..."
]
```

**After (Customized):**
```json
"paragraphs": [
  "I know I messed up when I forgot your birthday last week.",
  "What matters is this: **I hurt you.**",
  "You deserved to feel special that day, and I made you feel forgotten."
]
```

## 🎨 Full Example

```json
{
  "greeting": "Dear Emily,",
  "paragraphs": [
    "I've been thinking about what happened last Friday.",
    "What matters is this: **I was wrong.**",
    "I should have listened instead of getting defensive."
  ],
  "emphasis": [
    "Some mistakes can't be undone.",
    "But I want to prove I can do better."
  ],
  "finalParagraphs": [
    "You've always been there for me.",
    "I'm sorry I wasn't there for you when you needed me."
  ],
  "closing": "With deep regret,",
  "signature": "Alex"
}
```

## 🚀 Testing Your Changes

### Development Mode (Live Reload)
1. Edit `public/letter.json`
2. Save the file
3. Browser automatically reloads
4. See your changes instantly!

### Production Build
1. Edit `public/letter.json`
2. Run `npm run build`
3. Deploy the `build` folder

## ⚠️ Important Rules

1. **Keep the JSON structure** - Don't remove the brackets or braces
2. **Use double quotes** - JSON requires `"` not `'`
3. **Commas matter** - Add commas between items, but NOT after the last one
4. **Escape special characters**:
   - Use `\"` for quotes inside text
   - Example: `"She said \"yes\""`

## 🔍 Common Mistakes

### ❌ Missing Comma
```json
"paragraphs": [
  "First paragraph"  // MISSING COMMA!
  "Second paragraph"
]
```

### ✅ Correct
```json
"paragraphs": [
  "First paragraph",
  "Second paragraph"
]
```

### ❌ Comma After Last Item
```json
"paragraphs": [
  "First paragraph",
  "Second paragraph",  // EXTRA COMMA!
]
```

### ✅ Correct
```json
"paragraphs": [
  "First paragraph",
  "Second paragraph"
]
```

## 💡 Pro Tips

1. **Use a JSON validator** - Copy your JSON to https://jsonlint.com to check for errors
2. **Keep backups** - Save a copy before major edits
3. **Test in dev mode** - See changes before building
4. **Be specific** - Personal details make apologies more meaningful
5. **Be honest** - Don't make promises you can't keep

## 📱 Alternative: Plain Text File

If JSON is confusing, there's also `public/letter-content.txt` with simpler formatting!

Just edit the text after each label:
```
PARAGRAPH 1:
Your text here

PARAGRAPH 2:
Your text here
```

(Note: The txt file is for reference only. The app reads from `letter.json`)

## 🆘 Need Help?

If the letter doesn't load:
1. Check browser console (F12) for errors
2. Validate your JSON at jsonlint.com
3. Make sure the file is in `public/letter.json`
4. Restart the dev server: `npm start`

## 📖 Examples by Situation

### Forgot Important Event
```json
"paragraphs": [
  "I can't believe I forgot your graduation.",
  "This was one of the most important days of your life, and I wasn't there.",
  "**I let you down** when you deserved celebration and support."
]
```

### Said Something Hurtful
```json
"paragraphs": [
  "The words I said during our argument were cruel and unfair.",
  "**I hurt you** with words I can't take back.",
  "You didn't deserve to be spoken to that way."
]
```

### Broke a Promise
```json
"paragraphs": [
  "I promised I would be there for you.",
  "When it mattered most, **I broke that promise**.",
  "Trust is earned, and I failed to honor yours."
]
```

---

**Remember:** The most meaningful apologies are:
- ✅ Specific about what you did
- ✅ Focused on their feelings
- ✅ Honest about your mistakes
- ✅ Clear about what you'll do differently

**Good luck!** 💫
