# USDA 360 Virtual Tour

An interactive 360° lab tour built with **Marzipano** and served as static files (e.g. **GitHub Pages** or a custom domain).

## Project structure

- **`360 images/`** — Source 360° panoramas (optional reference for authoring).
- **`index.html`**, **`index.js`**, **`data.js`**, **`style.css`** — Tour app (root is the site entry).
- **`vendor/`** — Marzipano and dependencies.
- **`tiles/`**, **`img/`** — Panorama tiles and UI icons (from the Marzipano export).

## Updating the tour

1. Edit the project in **Marzipano** and export the web bundle.
2. Replace **`tiles/`**, **`img/`**, and any changed **`data.js`** / **`vendor/`** files at the **repo root** (same layout Marzipano generates, without an extra subfolder).

## GitHub Pages / hosting

1. Repo: **Settings → Pages** → deploy from branch **main** (or your default), folder **/ (root)**.
2. The tour loads at `https://<user>.github.io/USDA-360-virtual-tour/` or your custom domain path with **no** `marzipano-export/` segment.
3. **`.nojekyll`** is included so GitHub does not run Jekyll on the branch; panorama tiles are published as-is.

Commit **`tiles/`**, **`img/`**, and **`vendor/`** if the live site is missing imagery—those folders must be in the remote repo.

**Legacy URL:** `marzipano-export/index.html` only redirects to the parent folder so old `/marzipano-export/` links still work. You can delete that folder after search engines and bookmarks update.

No build step is required.
