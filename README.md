# Student Portfolio Website

A simple, responsive portfolio and CV page built with HTML, CSS, and JavaScript. No build tools required.

## Preview locally

1. Open the `portfolio` folder.
2. Double-click `index.html` to open it in your browser.

## How to customize

Search for `<!-- EDIT:` comments in `index.html` to find every placeholder.

### Recommended fill-in order

1. **Hero** — your name, headline, and short intro
2. **About** — bio, city (not full address), languages, interests
3. **Education** — degrees, schools, key results
4. **Skills** — add or remove tags to match what you know
5. **Projects** — school assignments, web apps, database work, etc.
6. **Contact** — email, phone, GitHub, LinkedIn
7. **Footer** — your name and CV download link

### Add a profile photo

1. Save your photo as `assets/profile.jpg`
2. In `index.html`, replace the avatar placeholder with:

```html
<img class="hero__avatar-img" src="assets/profile.jpg" alt="Your Full Name">
```

3. Add this to `styles.css`:

```css
.hero__avatar-img {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: var(--shadow);
  border: 4px solid var(--surface);
}
```

### Add a downloadable CV

1. Save your CV PDF as `assets/cv.pdf`
2. The footer download link will work automatically

## Privacy tips (important)

When you publish this site online, do **not** include:

- Full NIC / national ID number
- Full home address (use city/region only, e.g. "Kandy, Sri Lanka")
- Passwords or private account details

## Publish for free

### Option 1: GitHub Pages

1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository (e.g. `my-portfolio`)
3. Upload all files from this folder
4. Go to **Settings → Pages**
5. Set source to `main` branch, folder `/ (root)`
6. Your site will be live at `https://yourusername.github.io/my-portfolio`

### Option 2: Netlify Drop

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `portfolio` folder onto the page
3. Netlify gives you a live URL instantly

## File structure

```
portfolio/
  index.html    — page content
  styles.css    — design and layout
  script.js     — menu, theme toggle, nav highlight
  assets/       — photos and CV PDF
  README.md     — this file
```

## Features

- Responsive layout (mobile, tablet, desktop)
- Sticky navigation with smooth scrolling
- Dark / light theme toggle (saved in browser)
- Accessible semantic HTML
- No external dependencies
