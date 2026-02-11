# USDA 360 Virtual Tour

An interactive 360° virtual tour of the lab space, built with **H5P Virtual Tour (360)** and served on **GitHub Pages** using the [h5p-standalone](https://github.com/tunapanda/h5p-standalone) player.

## Project structure

- **`360 images/`** — Source 360° images for building the tour (used when authoring in Lumi).
- **`h5p-content/`** — Extracted H5P content lives here (e.g. `h5p-content/lab-tour/`). See `h5p-content/README.md` for how to add content.
- **`marzipano-export/`** — Previous Marzipano-based tour (kept for reference).
- **`index.html`** — Entry page that loads the H5P tour via h5p-standalone (CDN).

## Authoring the tour (Lumi)

1. Install [Lumi](https://github.com/Lumieducation/Lumi) (desktop) or use [Lumi Cloud](https://lumi.education/).
2. Create a new **Virtual Tour (360)** activity and add scenes using your 360 images from `360 images/`.
3. Add hotspots, text, and links between scenes as needed.
4. **Export as a full `.h5p` package** with all libraries bundled (do **not** use “single HTML” export—Virtual Tour 360 is not supported for that). The tour must be exported as a full `.h5p` and played via h5p-standalone on GitHub Pages.

## Adding content to this repo

1. Export your tour from Lumi as a **full `.h5p`** file (with libraries included).
2. Rename the file from `.h5p` to `.zip` and extract it into a folder, e.g. `h5p-content/lab-tour/`. The folder should contain `content.json`, `h5p.json`, and a `libraries/` directory.
3. Put that folder inside `h5p-content/` and push to the repo. The site’s `index.html` loads `./h5p-content/lab-tour` by default; if you use a different folder name, update the `h5pJsonPath` in `index.html`.

## GitHub Pages

1. In the GitHub repo: **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: `main` (or your default), folder: **/ (root)**.
4. Save. The site will be at `https://<username>.github.io/USDA-360-virtual-tour/` (or your custom domain).

No build step is required; the site is static.

## Note on Virtual Tour (360) and static hosting

Virtual Tour (360) **cannot** be exported as a single self-contained HTML file from Lumi. To run it on GitHub Pages you must:

- Export as a **full `.h5p`** package (with all libraries).
- Extract the package into `h5p-content/` and use the **h5p-standalone** player (already wired up in `index.html`) to play it. No backend server is needed.
