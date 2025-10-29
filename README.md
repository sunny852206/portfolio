# Developer Portfolio - React + Vite

A modern, responsive portfolio website built with React and Vite to showcase your projects and skills for entry-level developer positions.

## 🚀 Technologies Used

This portfolio demonstrates proficiency in:
- **ReactJS** - Component-based UI
- **JavaScript** - Modern ES6+ syntax
- **HTML5** - Semantic markup
- **CSS** - Custom styling with animations
- **Node.js** - Build tools and npm
- **Vite** - Fast build tool and dev server

The featured projects showcase additional technologies:
- Express.js
- MongoDB & Mongoose
- MySQL
- Python
- Java
- jQuery

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## ✏️ Customization Guide

### 1. Personal Information

**Update your name and title:**
- Open `src/components/Hero.jsx`
- Change "Your Name" and "Full Stack Developer" (lines 15-17)

**Update footer:**
- Open `src/components/Footer.jsx`
- Change "Your Name" (line 5)

### 2. About Section

**Edit your bio and stats:**
- Open `src/components/About.jsx`
- Update the description text (lines 11-15)
- Modify stats numbers (lines 18-28)

### 3. Skills

**Add or remove skills:**
- Open `src/components/Skills.jsx`
- Edit the `skills` array (lines 3-16)
- Add new skills like: `{ name: 'TypeScript', icon: 'TS' }`

### 4. Projects

**Add your own projects:**
- Open `src/components/Projects.jsx`
- Edit the `featuredProjects` array (lines 6-68)
- For each project, customize:
  - `title`: Project name
  - `description`: Brief description
  - `tags`: Array of technologies used
  - `githubUrl`: Link to your GitHub repo
  - `liveUrl`: Link to live demo (set to `null` if none)

Example:
```javascript
{
  id: 1,
  title: "My Awesome Project",
  description: "A cool app that does amazing things",
  tags: ["React", "Node.js", "MongoDB"],
  githubUrl: "https://github.com/yourusername/project",
  liveUrl: "https://myproject.vercel.app", // or null
}
```

### 5. Contact Links

**Update your contact information:**
- Open `src/components/Contact.jsx`
- Replace email, GitHub, and LinkedIn URLs (lines 13, 23, 42)

## 🌐 Free Deployment Options

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "New Project"
5. Import your portfolio repository
6. Click "Deploy"
7. Done! Your site is live at `your-portfolio.vercel.app`

**Cost:** FREE forever
**Auto-deploys:** Every push to main branch

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. Click "New site from Git"
5. Select your repository
6. Build command: `npm run build`
7. Publish directory: `dist`
8. Click "Deploy"

**Cost:** FREE forever
**Auto-deploys:** Every push to main branch

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section with name
│   │   ├── About.jsx        # About section
│   │   ├── Skills.jsx       # Skills showcase
│   │   ├── Projects.jsx     # Project cards
│   │   ├── Contact.jsx      # Contact links
│   │   └── Footer.jsx       # Footer
│   ├── App.jsx              # Main app component
│   ├── App.css              # Component styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🎨 Features

- ✅ Modern, responsive design
- ✅ Smooth scroll animations
- ✅ Project filtering by technology
- ✅ GitHub repository integration
- ✅ Mobile-friendly navigation
- ✅ Fast loading with Vite
- ✅ Easy to customize
- ✅ Free to host

## 💡 Tips for Job Applications

1. **Replace placeholder links** with your actual GitHub profile and projects
2. **Add real project descriptions** that highlight problem-solving
3. **Include diverse projects** using different tech stacks
4. **Keep the code clean** - recruiters may review your repository
5. **Update regularly** - add new projects as you complete them
6. **Add a custom domain** (optional, ~$12/year for .dev domain)

## 📝 Maintenance

To update your portfolio:
1. Edit the relevant component file
2. Test locally with `npm run dev`
3. Commit and push to GitHub
4. Vercel/Netlify will auto-deploy (takes ~1 minute)

## 🆘 Troubleshooting

**Build fails:**
- Run `npm install` to ensure all dependencies are installed
- Check that all imports in components are correct

**Styles not showing:**
- Verify `index.css` is imported in `main.jsx`
- Check browser console for CSS errors

**GitHub API not working:**
- Check your internet connection
- GitHub has rate limits (60 requests/hour without auth)

## 📧 Questions?

If you need help customizing or deploying, refer to:
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Vercel Documentation](https://vercel.com/docs)

---

**Good luck with your job search! 🎉**
