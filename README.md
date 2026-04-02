# USDA 360 Virtual Tour

An interactive 360° lab tour built with **[Marzipano](https://www.marzipano.net/)** and served as static files (e.g. **GitHub Pages** or a custom domain).

## Marzipano documentation

- **[Documentation](https://www.marzipano.net/docs.html)** — How to initialize the viewer, create scenes, change scenes and views, autorotate, and hotspots.
- **[API reference](https://www.marzipano.net/reference/)** — Detailed classes (`Viewer`, `Scene`, `RectilinearView`, etc.) for deeper customization beyond the [Marzipano Tool](https://www.marzipano.net/tool/) export.

This repo extends the default export (scene order, autoplay, transitions, hotspot styling, embedded video) in `index.js`, `data.js`, and `style.css`.

## Project structure

- **`360 images/`** — Source 360° panoramas (optional reference for authoring).
- **`index.html`**, **`index.js`**, **`data.js`**, **`style.css`** — Tour app (root is the site entry).
- **`vendor/`** — Marzipano and bundled dependencies.
- **`tiles/`**, **`img/`** — Panorama tiles and UI icons (from the Marzipano export).

## Updating the tour

1. Edit the project in **Marzipano** and export the web bundle.
2. Replace **`tiles/`**, **`img/`**, and any changed **`data.js`** / **`vendor/`** files at the **repo root** (same layout Marzipano generates).
3. Re-apply or merge custom edits in **`index.js`** / **`style.css`** if you replace those files from a fresh export.

## GitHub Pages / hosting

1. Repo: **Settings → Pages** → deploy from branch **main** (or your default), folder **/ (root)**.
2. The tour loads at `https://<user>.github.io/USDA-360-virtual-tour/` or your custom domain path with **no** `marzipano-export/` segment.
3. **`.nojekyll`** is included so GitHub does not run Jekyll on the branch; panorama tiles are published as-is.

Commit **`tiles/`**, **`img/`**, and **`vendor/`** if the live site is missing imagery—those folders must be in the remote repo.

**Legacy URL:** `marzipano-export/index.html` only redirects to the parent folder so old `/marzipano-export/` links still work. You can delete that folder after search engines and bookmarks update.

No build step is required.
