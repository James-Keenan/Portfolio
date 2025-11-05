# Quick Commands Reference

## Development

### Start development server

```bash
npm start
```

- Opens browser at `http://localhost:3000`
- Hot reload enabled
- Press `Ctrl+C` to stop

### Run tests (if added later)

```bash
npm test
```

### Build for production

```bash
npm run build
```

- Creates optimized build in `/build` folder
- Minified and ready for deployment

## Installation

### First time setup

```bash
# Install all dependencies
npm install

# Start the app
npm start
```

### If you get errors

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Common Tasks

### Update dependencies

```bash
npm update
```

### Check for outdated packages

```bash
npm outdated
```

### Add a new package

```bash
npm install package-name
```

## File Operations

### Find files

```bash
# Find all JSX files
find src -name "*.jsx"

# Find all CSS modules
find src -name "*.module.css"
```

### Search in files

```bash
# Search for text in all files
grep -r "search-term" src/
```

## Git Commands (if using version control)

```bash
# Initialize repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Connect to GitHub (replace with your repo)
git remote add origin https://github.com/username/repo-name.git

# Push to GitHub
git push -u origin main
```

## Deployment Commands

### Deploy to Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
npm run build
netlify deploy --prod --dir=build
```

### Deploy to Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy (after updating package.json)
npm run deploy
```

## Debugging

### Clear React cache

```bash
rm -rf node_modules/.cache
```

### Check for errors

```bash
# Run linter (if configured)
npm run lint

# Type check (if using TypeScript)
npm run type-check
```

### Kill process on port 3000

```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

## Package Management

### View installed packages

```bash
npm list --depth=0
```

### View package info

```bash
npm info react
```

### Update React and dependencies

```bash
npm install react@latest react-dom@latest react-scripts@latest
```

## Environment Setup

### Create .env file (if needed)

```bash
# Create .env.local file
touch .env.local

# Add variables (example)
echo "REACT_APP_FORMSPREE_ID=your_form_id" >> .env.local
```

### Access environment variables in React

```javascript
const formId = process.env.REACT_APP_FORMSPREE_ID;
```

## Performance Analysis

### Analyze bundle size

```bash
npm run build

# Install analyzer
npm install --save-dev source-map-explorer

# Add to package.json scripts:
# "analyze": "source-map-explorer 'build/static/js/*.js'"

npm run analyze
```

## Useful VS Code Extensions

Recommended for this project:

- ES7+ React/Redux/React-Native snippets
- CSS Modules
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Path Intellisense

## Keyboard Shortcuts (in browser)

- `Cmd/Ctrl + Shift + R` - Hard refresh
- `Cmd/Ctrl + K` - Clear console
- `Cmd/Ctrl + Option/Alt + I` - Open DevTools

## Project Health Check

Run these commands to ensure everything is working:

```bash
# 1. Check for syntax errors
npm run build

# 2. Check file structure
ls -la src/

# 3. Test start command
npm start

# 4. Check for missing dependencies
npm ls
```

## Maintenance

### Regular updates (every few months)

```bash
# Update all packages
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## Help & Documentation

- React: `https://react.dev`
- React Router: `https://reactrouter.com`
- npm: `https://docs.npmjs.com`

## Emergency Fixes

### "Module not found" error

```bash
npm install
npm start
```

### "Port 3000 already in use"

```bash
lsof -ti:3000 | xargs kill -9
npm start
```

### "Command not found: npm"

Install Node.js from `https://nodejs.org`

### React won't start

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm start
```
