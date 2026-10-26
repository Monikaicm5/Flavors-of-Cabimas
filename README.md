# Flavors of Cabimas

Website and installable app for **Flavors of Cabimas**, a Venezuelan restaurant at
1651 S State Road 7, North Lauderdale, FL 33068 · (786) 920-5210 · open daily 11 AM – 11 PM.

Plain HTML, CSS and JavaScript. There's no build step, so it runs anywhere.

## Updating the menu

Everything on the menu lives in **`js/menu.js`**. Change a price, rename a dish, or add a new
line, then commit to `main`. Netlify redeploys automatically.

```js
{ name: "Cachapa de Queso", price: 15.58, featured: true, desc: "The classic, with queso de mano." },
```

- `featured: true` puts the dish in the "Favoritos de la casa" photo row.
- To add a food photo, put it in `assets/photos/` and add `photo: "/assets/photos/your-file.jpg"` to the dish.
  For the big photo at the top of the page, set `heroPhoto` near the top of `js/menu.js`. Until a photo is set, the logo shows in its place.
- Phone, hours, address and links (DoorDash, Instagram, TikTok, Google Maps) are at the top of the same file.
- After a menu change, bump `VERSION` in `sw.js` (e.g. `v1` → `v2`) so installed phones refresh.

## Deploying on Netlify

1. In Netlify: **Add new site → Import an existing project → GitHub** → pick `Flavors-of-Cabimas`.
2. Branch to deploy: **`main`**. Build command: *(leave empty)*. Publish directory: **`.`**
   (`netlify.toml` already sets these).
3. Deploy. Every push to `main` goes live automatically.

## Install as an app

On a phone, open the site and choose **Add to Home Screen** (iPhone: Share → Add to Home Screen;
Android: menu → Install app). It opens full-screen with the Flavors logo as the icon.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The page |
| `css/styles.css` | Styling (dark "Noche" design: Anton, Archivo, Space Mono) |
| `js/menu.js` | Menu, prices, contact info, links |
| `js/app.js` | Builds the menu, search, open/closed badge |
| `assets/logo.svg` | Logo (vector, use anywhere) |
| `assets/icon-*.png` | App icons |
| `manifest.webmanifest`, `sw.js` | Make it installable and work offline |
| `netlify.toml` | Netlify settings |
