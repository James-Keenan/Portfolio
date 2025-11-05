# Portfolio Website Setup Guide

Welcome! This guide will help you customize and launch your personal portfolio website.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

The site will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

---

## 📝 Customization Checklist

### Essential Updates

#### 1. **Personal Information**

Update these files with your information:

**`public/index.html`**

- Line 8: Update `content` with your description
- Line 9: Update `content` with your name
- Line 18: Update `<title>` tag

**`src/components/layout/Navbar.jsx`**

- Line 21: Replace "Portfolio" with your name/brand

**`src/components/layout/Footer.jsx`**

- Line 14: Update title
- Line 15-17: Update description
- Lines 33-56: Update social media links
- Line 68: Update copyright name

**`src/pages/Home.jsx`**

- Line 33: Your name
- Line 36: Your title/role
- Line 39-41: Your intro text
- Lines 55-83: Update skill cards

**`src/pages/About.jsx`**

- Lines 25-36: Your bio
- Lines 53-79: Your tech stack
- Lines 90-121: Your values

**`src/pages/Projects.jsx`**

- Lines 12-82: Replace with your actual projects

**`src/pages/Resume.jsx`**

- Lines 22-92: Your work experience
- Lines 101-124: Your skills
- Lines 135-146: Your education
- Lines 156-179: Your certifications

**`src/pages/Contact.jsx`**

- Lines 35-70: Update contact methods with your links

#### 2. **Formspree Integration**

Sign up at [formspree.io](https://formspree.io) (free tier available)

Update `src/components/forms/ContactForm.jsx`:

- Line 32: Replace `YOUR_FORM_ID` with your Formspree form ID

Example: `https://formspree.io/f/xpznkjqr`

#### 3. **Assets**

Replace placeholder files in `/public/assets/`:

**Images** (`/public/assets/images/`)

- Add `logo.png` - Your logo
- Add `hero.jpg` - Hero section image
- Add project images: `project1.jpg`, `project2.jpg`, etc.

**Resume** (`/public/assets/`)

- Add `resume.pdf` - Your resume file

**Fonts** (`/public/assets/fonts/`)

- (Optional) Add custom fonts if needed

#### 4. **Favicon**

Add these files to `/public/`:

- `favicon.ico` (16x16, 32x32)
- `logo192.png` (192x192)
- `logo512.png` (512x512)

Use a tool like [favicon.io](https://favicon.io) to generate these.

---

## 🎨 Styling Customization

### Theme Colors

Edit `src/index.css` (lines 47-58) to change colors:

```css
:root {
  --accent-color: #0077ff; /* Primary brand color */
  --accent-hover: #0056cc; /* Hover state */
  /* ... other variables */
}
```

### Dark Mode Colors

Edit `src/index.css` (lines 84-93):

```css
[data-theme="dark"] {
  --accent-color: #66ccff; /* Dark mode accent */
  --accent-hover: #3399ff; /* Dark mode hover */
  /* ... other variables */
}
```

### Fonts

To use custom fonts:

1. Add font files to `/public/assets/fonts/`
2. Update `src/index.css` with @font-face declarations
3. Update the body font-family

---

## 🛠️ Advanced Customization

### Adding More Projects

1. Open `src/pages/Projects.jsx`
2. Add new project objects to the `projects` array
3. Include: id, title, description, image, tech, category, github, demo

### Adding Project Categories

1. Edit `src/components/projects/ProjectFilter.jsx`
2. Add new filter objects to the `filters` array
3. Update project categories to match

### Modifying Pages

Each page has its own folder:

- Component: `src/pages/[PageName].jsx`
- Styles: `src/pages/[PageName].module.css`

Feel free to modify structure and content as needed.

### Adding New Pages

1. Create component in `src/pages/`
2. Create corresponding CSS Module
3. Add route in `src/App.jsx`
4. Add navigation link in `src/components/layout/Navbar.jsx`

---

## 📦 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Sign up at [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `build`

### Vercel

1. Push your code to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects React settings

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

- Check console for specific errors
- Ensure all imports are correct
- Verify all image paths exist

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Formspree Docs](https://help.formspree.io)

---

## 🎯 Launch Checklist

Before going live, verify:

- [ ] All personal information updated
- [ ] Formspree endpoint configured
- [ ] Resume PDF uploaded
- [ ] Project images added
- [ ] Social media links updated
- [ ] Favicon added
- [ ] Theme colors customized
- [ ] Contact form tested
- [ ] Mobile responsiveness checked
- [ ] Dark mode tested
- [ ] All links working
- [ ] SEO meta tags updated

---

## 💡 Tips

1. **Test on Multiple Devices**: Use browser DevTools and real devices
2. **Optimize Images**: Compress images before uploading (use TinyPNG)
3. **SEO**: Update meta tags in `public/index.html`
4. **Performance**: Keep bundle size small, lazy load if needed
5. **Analytics**: Consider adding Google Analytics or similar (optional)

---

## 🆘 Need Help?

If you encounter issues:

1. Check browser console for errors
2. Review this setup guide
3. Search React/React Router documentation
4. Check GitHub issues for similar problems

---

Good luck with your portfolio! 🚀
