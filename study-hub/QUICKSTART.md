# ⚡ Quick Start Guide

## 🚀 Get Running in 3 Minutes

### 1. Start Development Server

```bash
cd study-hub
npm run dev
```

Open: http://localhost:5173

### 2. Test the Application

Visit these pages:
- **Home:** http://localhost:5173/
- **Subjects:** http://localhost:5173/subjects
- **Engineering Chemistry:** http://localhost:5173/subject/engineering-chemistry
- **Quick Links:** http://localhost:5173/quick-links
- **Future Features:** http://localhost:5173/future-features

### 3. Build for Production

```bash
npm run build
```

Output in `dist/` folder

---

## 🔧 Quick Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 📝 Quick Updates

### Update Subject Content
Edit JSON files in `src/data/`:
- `engineering-chemistry.json`
- `engineering-graphics.json`
- etc.

### Update Home Page
Edit `src/pages/Home.jsx`

### Update Styling
Edit `tailwind.config.js` for colors
Edit `src/index.css` for custom styles

---

## 🌐 Deploy Now

### Netlify (Easiest)

1. Create account: https://netlify.com
2. Connect GitHub repo
3. Deploy automatically!

### GitHub Pages

```bash
npm run build
# Upload dist/ folder
```

---

## 📱 Test Responsiveness

- **Mobile:** Resize browser to 375px
- **Tablet:** Resize to 768px
- **Desktop:** Resize to 1280px+

---

## 🎨 Customization Quick Tips

### Change Colors
```javascript
// tailwind.config.js
colors: {
  primary: {
    600: '#your-color',
  }
}
```

### Change Fonts
```css
/* src/index.css */
@import url('your-google-font-url');
```

### Add New Subject
1. Create `src/data/new-subject.json`
2. Add to `src/data/subjects.json`
3. Done! ✅

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

### Build Fails
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styles Not Loading
```bash
# Restart dev server
# Clear browser cache (Ctrl+Shift+R)
```

---

## 📞 Need Help?

- Check README.md for detailed docs
- Check DEPLOYMENT.md for deployment guide
- Check PROJECT_SUMMARY.md for overview

---

**Happy Coding! 🚀**
