# USDA 360 Virtual Tour

An interactive 360° lab tour built with **Marzipano** and served as static files (e.g. **GitHub Pages**).

## Project structure

- **`360 images/`** — Source 360° panoramas (optional reference for authoring).
- **`marzipano-export/`** — Full Marzipano web export (`index.html`, `data.js`, `tiles/`, `img/`, `vendor/`). Replace or regenerate this folder from Marzipano when you update the tour.
- **`index.html`** — Sends visitors to `marzipano-export/`.

## Updating the tour

1. Edit the project in **Marzipano** and export the web bundle.
2. Replace the contents of `marzipano-export/` with the new export (keep paths relative as Marzipano generates them).

## GitHub Pages

1. Repo: **Settings → Pages** → deploy from branch **main** (or default), folder **/ (root)**.
2. The site root redirects to `marzipano-export/` using the correct path even when the URL has no trailing slash (e.g. `github.io/<repo>` vs `github.io/<repo>/`).
3. **`.nojekyll`** is included so GitHub does not run Jekyll on the branch; panorama tiles and other static assets are published as-is.

Commit the **entire** Marzipano export (`tiles/`, `img/`, `vendor/`, etc.). If panoramas are missing on the live site, they are usually not pushed to the remote or are blocked by `.gitignore`.

No build step is required.
