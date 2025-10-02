# 🔧 Netlify Deployment Troubleshooting

## Common Issues and Solutions

### Issue 1: 404 Page Not Found Error

#### Symptoms
- Home page loads fine
- Direct navigation to routes like `/subjects` or `/subject/engineering-chemistry` shows 404
- Error: "Looks like you've followed a broken link"

#### Solutions

**Solution A: Verify _redirects file**

1. Check if `_redirects` exists in `public/` folder:
   ```bash
   cat public/_redirects
   ```
   Should contain:
   ```
   /*    /index.html   200
   ```

2. Verify it's copied to `dist/` after build:
   ```bash
   npm run build
   ls -la dist/_redirects
   ```

**Solution B: Clear Netlify Cache**

1. Go to Netlify Dashboard
2. Site settings → Build & deploy → Post processing
3. Click "Clear cache and retry deploy"

**Solution C: Manual Trigger**

1. In Netlify Dashboard
2. Deploys → Trigger deploy → Deploy site
3. Wait for new deployment

**Solution D: Check Build Logs**

1. Go to Deploys tab
2. Click on latest deploy
3. Check build logs for errors
4. Ensure `_redirects` is mentioned in logs

**Solution E: Verify Base Directory**

In Netlify site settings:
- Base directory: (leave empty or set to `study-hub` if deploying from monorepo)
- Build command: `npm run build`
- Publish directory: `dist`

### Issue 2: Build Fails

#### Symptoms
- "Build failed" in Netlify
- Site not deploying

#### Solutions

**Check Node Version:**

Add to `netlify.toml`:
```toml
[build.environment]
  NODE_VERSION = "18"
```

**Check Dependencies:**

Ensure all dependencies are in `package.json`:
```bash
npm install
```

**Local Build Test:**

```bash
npm run build
npm run preview
```

### Issue 3: Blank Page / White Screen

#### Symptoms
- Build succeeds
- Page loads but shows blank/white screen
- No content visible

#### Solutions

**Check Console:**

1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Common issues:
   - Module not found
   - Import errors
   - Missing assets

**Check Base URL:**

In `vite.config.js`, ensure:
```javascript
export default defineConfig({
  base: '/',
  // ... other config
})
```

**Check Routes:**

Verify all routes in `App.jsx` are correct:
```javascript
<Route path="/" element={<Home />} />
<Route path="/subjects" element={<Subjects />} />
// etc.
```

### Issue 4: CSS Not Loading

#### Symptoms
- Page loads but no styling
- Content visible but unstyled

#### Solutions

**Rebuild with Clean Cache:**

```bash
rm -rf node_modules dist
npm install
npm run build
```

**Check Tailwind Config:**

Ensure `tailwind.config.js` has correct content paths:
```javascript
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

**Check PostCSS:**

Verify `postcss.config.js`:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Issue 5: Assets Not Loading

#### Symptoms
- Images, fonts, or other assets return 404
- Broken image icons

#### Solutions

**Check Asset Paths:**

Use relative paths or import properly:
```javascript
import logo from './assets/logo.png'
// or
<img src="/vite.svg" alt="Logo" />
```

**Check Public Folder:**

Assets in `public/` are served from root:
```
public/logo.png → https://yoursite.com/logo.png
```

### Issue 6: Environment Variables

#### Symptoms
- Features requiring env vars not working

#### Solutions

**In Netlify Dashboard:**

1. Site settings → Build & deploy → Environment
2. Add variables with `VITE_` prefix:
   ```
   VITE_API_URL=https://api.example.com
   ```

**In Code:**

```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Quick Fix Checklist

When you get 404 errors, try these in order:

1. ✅ **Clear cache and redeploy**
   - Netlify Dashboard → Deploys → Clear cache and retry deploy

2. ✅ **Verify build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: (empty)

3. ✅ **Check _redirects file exists**
   ```bash
   cat dist/_redirects
   ```

4. ✅ **Rebuild locally first**
   ```bash
   npm run build
   npm run preview
   ```

5. ✅ **Check Node version**
   - Add to netlify.toml:
   ```toml
   [build.environment]
     NODE_VERSION = "18"
   ```

6. ✅ **Manual trigger new deploy**
   - Netlify Dashboard → Deploys → Trigger deploy

## Deployment Steps (Correct Order)

### Method 1: GitHub Integration

```bash
# 1. Ensure build works locally
cd study-hub
npm install
npm run build
npm run preview  # Test locally

# 2. Commit and push
git add .
git commit -m "Fix: Update Netlify configuration"
git push origin main

# 3. Netlify auto-deploys
# Check Netlify Dashboard for deploy status
```

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd study-hub
netlify deploy --prod
```

### Method 3: Manual Drag & Drop

```bash
# Build locally
cd study-hub
npm run build

# Go to https://app.netlify.com/drop
# Drag the entire 'dist' folder
```

## Testing After Deployment

Visit these URLs on your deployed site:

1. `https://your-site.netlify.app/` ✅ (Home)
2. `https://your-site.netlify.app/subjects` ✅ (Subjects)
3. `https://your-site.netlify.app/subject/engineering-chemistry` ✅ (Subject Detail)
4. `https://your-site.netlify.app/quick-links` ✅ (Quick Links)
5. `https://your-site.netlify.app/future-features` ✅ (Future Features)

All should work without 404 errors!

## Still Having Issues?

### Check Netlify Deploy Logs

1. Go to Netlify Dashboard
2. Click on your site
3. Deploys tab
4. Click latest deploy
5. Read full deploy log

### Common Log Messages

**Success:**
```
10:30:45 AM: Build ready to start
10:31:20 AM: Build script success
10:31:25 AM: Site is live ✨
```

**Failure:**
```
10:30:45 AM: Build ready to start
10:31:20 AM: Error: Command failed with exit code 1
```

### Contact Support

If nothing works:
1. Netlify Support: https://answers.netlify.com/
2. Check Status: https://www.netlifystatus.com/
3. GitHub Issues: Create issue in your repo

## Prevention Tips

1. **Always test build locally before pushing:**
   ```bash
   npm run build && npm run preview
   ```

2. **Keep dependencies updated:**
   ```bash
   npm update
   ```

3. **Use fixed Node version in netlify.toml:**
   ```toml
   [build.environment]
     NODE_VERSION = "18"
   ```

4. **Monitor deploy logs** after each push

5. **Test all routes** after deployment

---

## Quick Command Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install

# Clean build
rm -rf node_modules dist
npm install
npm run build

# Check build output
ls -la dist/
cat dist/_redirects
```

---

**Your site should now be working! 🎉**

If you continue to experience issues, please:
1. Share the Netlify deploy log
2. Share your site URL
3. Describe the exact error message
