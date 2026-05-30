# Date Itinerary Website

A simple static website for an interactive date itinerary timeline.

## Tech stack recommendation

- **HTML / CSS / JavaScript**: Best for a lightweight static site with no backend.
- **Optional upgrade**: React + Vite if you want a more polished component-based site later.
- **Images**: store them in `images/` and update the file names in `script.js` if needed.

## Project structure

- `index.html` — main page
- `styles.css` — page styles
- `script.js` — timeline logic and interactive selection
- `images/` — place your food photos here

> The food selection cards appear directly beside the corresponding timeline items for brunch, snack/coffee, and dinner.

## How to use locally

1. Open `index.html` directly in your browser.
2. Or run a local server from the project folder:

```bash
cd /Users/fionlim/wes
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Images

Place your food photos in the `images/` folder with these names:

- `pelle-and-pepe.jpg`
- `marlows-deli.jpg`
- `bee-hoe-coffee.jpg`
- `cata-coffee.jpg`
- `tempura-en.jpg`
- `tutto.jpg`
- `baba-nyonya.jpg`

If you want to use different file names, update the `image` values in `script.js`.

## Deploy as a shareable link

### Option 1: GitHub Pages

1. Create a GitHub repository and push this project.
2. In repo settings, enable **Pages**.
3. Set the source to the `main` branch and `/` folder.
4. GitHub will publish a link like `https://<username>.github.io/<repo-name>/`.

### Option 2: Netlify

1. Create an account at https://app.netlify.com.
2. Drag and drop the project folder onto the Netlify dashboard.
3. Netlify will publish a live URL instantly.

### Option 3: Vercel

1. Create an account at https://vercel.com.
2. Import the project from GitHub.
3. Deploy the static site and get a shareable URL.

## Recommended deployment path

For a simple static project, **GitHub Pages** is easiest and free:

- no build step required
- just publish `index.html`, `styles.css`, `script.js`, and `images/`

If you want help adding a React/Vite version later, I can build that too.
# may-31-date-itinerary
# may-31-date-itinerary
