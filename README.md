# Resume Match Visualizer

A React application with Apple-inspired design that visualizes resume compatibility with job descriptions.

## Features

- **Match Analysis**: Overall match score, qualification breakdown, and skills assessment
- **Apple Design**: Clean interface with Apple color palette and animated logo
- **Dark Mode**: Toggle between light and dark themes
- **Interactive UI**: Tabbed navigation for different analysis views

## Live Demo

Visit the live application: [Resume Match Visualizer](https://neha2801-create.github.io/apple_resume_analysis)

## Installation

```bash
# Clone the repository
git clone https://github.com/neha2801-create/apple_resume_analysis.git

# Install dependencies
cd apple_resume_analysis
npm install

# Run development server
npm start

# Build for production
npm run build
```

## Deployment

This project is deployed using GitHub Pages. To deploy updates:

1. Install the GitHub Pages package if not already installed:
   ```bash
   npm install --save gh-pages
   ```

2. Add these lines to your `package.json`:
   ```json
   "homepage": "https://neha2801-create.github.io/apple_resume_analysis",
   "scripts": {
     // other scripts...
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy the application:
   ```bash
   npm run deploy
   ```

## Customization

Edit the following variables in `ResumeMatchVisualizer.js`:
- `requirements`: Job qualification details and match scores
- `skills`: Skills assessment data
- `strengths`: Key resume strengths
- `overallMatch`: Overall match percentage

## How It Works

The app compares resume content against job requirements, calculating match percentages for each qualification. The animated Apple logo and progress bars provide visual representation of compatibility.

## Technologies

- React
- JavaScript (ES6+)
- CSS animations
- Dynamic theme switching

