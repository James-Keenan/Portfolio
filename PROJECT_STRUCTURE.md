# Project Structure Reference

```
portfolio-website/
│
├── public/
│   ├── assets/
│   │   ├── images/          # Logo, hero, project images
│   │   ├── fonts/           # Custom fonts (optional)
│   │   └── resume.pdf       # Downloadable resume
│   ├── index.html           # HTML entry point
│   ├── manifest.json        # PWA manifest
│   ├── favicon.ico          # Favicon (add this)
│   ├── logo192.png          # App icon (add this)
│   └── logo512.png          # App icon (add this)
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx              # Main navigation
│   │   │   ├── Navbar.module.css
│   │   │   ├── Footer.jsx              # Site footer
│   │   │   ├── Footer.module.css
│   │   │   ├── DarkModeToggle.jsx      # Theme switcher
│   │   │   ├── DarkModeToggle.module.css
│   │   │   ├── BackToTop.jsx           # Scroll to top button
│   │   │   └── BackToTop.module.css
│   │   │
│   │   ├── home/
│   │   │   ├── WelcomeScreen.jsx       # Session-based intro
│   │   │   └── WelcomeScreen.module.css
│   │   │
│   │   ├── projects/
│   │   │   ├── ProjectCard.jsx         # Individual project card
│   │   │   ├── ProjectCard.module.css
│   │   │   ├── ProjectFilter.jsx       # Category filter
│   │   │   └── ProjectFilter.module.css
│   │   │
│   │   └── forms/
│   │       ├── ContactForm.jsx         # Formspree contact form
│   │       └── ContactForm.module.css
│   │
│   ├── context/
│   │   └── ThemeContext.jsx            # Dark mode state management
│   │
│   ├── hooks/
│   │   └── useFormspree.js             # Form submission hook
│   │
│   ├── pages/
│   │   ├── Home.jsx                    # Landing page
│   │   ├── Home.module.css
│   │   ├── About.jsx                   # About page
│   │   ├── About.module.css
│   │   ├── Projects.jsx                # Projects showcase
│   │   ├── Projects.module.css
│   │   ├── Resume.jsx                  # Interactive resume
│   │   ├── Resume.module.css
│   │   ├── Contact.jsx                 # Contact page
│   │   ├── Contact.module.css
│   │   ├── NotFound.jsx                # 404 page
│   │   └── NotFound.module.css
│   │
│   ├── App.jsx                         # Main app component & router
│   ├── App.module.css
│   ├── index.js                        # React entry point
│   └── index.css                       # Global styles & theme
│
├── .gitignore
├── package.json
├── README.md
└── SETUP_GUIDE.md
```

## Component Hierarchy

```
App
├── ThemeProvider (Context)
├── Router
    ├── Navbar
    │   └── DarkModeToggle
    ├── Routes
    │   ├── Home
    │   │   └── WelcomeScreen (conditional)
    │   ├── About
    │   ├── Projects
    │   │   ├── ProjectFilter
    │   │   └── ProjectCard (multiple)
    │   ├── Resume
    │   ├── Contact
    │   │   └── ContactForm
    │   └── NotFound (404)
    ├── Footer
    └── BackToTop
```

## Key Files to Customize

### High Priority

1. `src/pages/Home.jsx` - Your name and intro
2. `src/pages/Projects.jsx` - Your projects
3. `src/components/forms/ContactForm.jsx` - Formspree ID
4. `public/index.html` - Meta tags
5. `public/assets/resume.pdf` - Your resume

### Medium Priority

6. `src/pages/About.jsx` - Bio and tech stack
7. `src/pages/Resume.jsx` - Work experience
8. `src/components/layout/Footer.jsx` - Social links
9. `src/index.css` - Theme colors

### Low Priority

10. `src/components/layout/Navbar.jsx` - Brand name
11. Favicon files
12. Project images

## CSS Module Pattern

All components use CSS Modules for scoped styling:

```jsx
// Component file
import styles from "./Component.module.css";

function Component() {
  return <div className={styles.container}>Content</div>;
}
```

```css
/* Component.module.css */
.container {
  /* Styles are locally scoped */
}
```

## Global Styles & Theme

`src/index.css` contains:

- CSS Reset
- Theme variables (light & dark)
- Utility classes
- Responsive breakpoints

Access theme variables in any CSS file:

```css
.element {
  color: var(--accent-color);
  background: var(--bg-color);
}
```

## State Management

### Theme (Dark Mode)

- Managed by `ThemeContext`
- Persisted in `localStorage`
- Accessed via `useTheme()` hook

### Welcome Screen

- Controlled by `sessionStorage`
- Shows once per browser session
- Dismisses after 3 seconds or on click

### Form State

- Managed locally in `ContactForm`
- Optional: Use `useFormspree` hook for abstraction

## Routing

Routes defined in `src/App.jsx`:

- `/` - Home
- `/about` - About
- `/projects` - Projects
- `/resume` - Resume
- `/contact` - Contact
- `*` - 404 Not Found

## Performance Features

1. **CSS Modules** - Scoped, optimized CSS
2. **Code splitting** - React Router handles this
3. **Lazy loading** - Can be added for images
4. **Asset preloading** - Critical assets in index.html
5. **Smooth scrolling** - CSS scroll-behavior
6. **Optimized builds** - React Scripts handles minification

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE11 not supported (uses modern JS features)
