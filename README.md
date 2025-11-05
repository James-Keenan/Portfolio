# Personal Portfolio Website

A modern, fast, and scalable personal portfolio website built with React and CSS Modules.

## 🚀 Features

- **Responsive Design**: Mobile-first approach that works on all devices
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Welcome Screen**: One-time session intro using sessionStorage
- **Smooth Animations**: Clean transitions and hover effects
- **Contact Form**: Integrated with Formspree for form handling
- **Performance Optimized**: Preloaded assets and efficient rendering

## 🛠️ Tech Stack

- React 18
- React Router DOM 6
- CSS Modules
- Formspree (contact form)

## 📦 Installation

```bash
npm install
```

## 🏃 Running Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🏗️ Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
/public
  /assets
    /images
    /fonts
    resume.pdf
  index.html

/src
  /components
    /layout
    /home
    /projects
    /forms
  /context
  /hooks
  /pages
  App.jsx
  index.js
  index.css
```

## 🎨 Customization

1. Update personal information in page components
2. Add your projects to `Projects.jsx`
3. Replace placeholder images in `/public/assets/images`
4. Update resume PDF in `/public/assets/resume.pdf`
5. Configure Formspree endpoint in `ContactForm.jsx`

## 📝 License

MIT
