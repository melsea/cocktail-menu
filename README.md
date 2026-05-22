# The Menu — Cocktail Browser

43 cocktails from Claude recommendations and Highball imports.  
Search by name, spirit, or ingredient. Filter by category, method, or source.

## Quick Start

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Deploy

### Option A: Netlify / Vercel (easiest)
1. Push this folder to a GitHub repo
2. Connect the repo on [netlify.com](https://netlify.com) or [vercel.com](https://vercel.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Done — you get a URL

### Option B: Static build
```bash
npm run build
```
This creates a `dist/` folder. Upload it anywhere that serves static files.

### Option C: Add to Home Screen (iOS)
After deploying, open the URL in Safari → Share → Add to Home Screen.  
The app is configured to run fullscreen like a native app.

## Adding Recipes

Edit `src/CocktailMenu.jsx` — the `cocktails` array at the top. Each recipe:

```js
{
  name: "Drink Name",
  category: "Classic",        // Herbal, Smoky, Floral, Classic, Bitter, Light, Warm
  base: "Rye",                // Primary spirit(s)
  method: "Stirred",          // Stirred, Shaken, Built
  source: "Claude",           // Claude or Highball
  vibe: "Short description",
  ingredients: ["2 oz rye", "1 oz sweet vermouth"],
  steps: "Method and garnish.",
  notes: "Tips and variations.",
}
```
