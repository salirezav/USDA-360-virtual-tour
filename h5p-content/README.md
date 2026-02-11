# H5P content

Place your extracted H5P Virtual Tour (360) content here.

## How to add content

1. Create your 360 tour in [Lumi](https://github.com/Lumieducation/Lumi) (desktop) or [Lumi Cloud](https://lumi.education/), using the **Virtual Tour (360)** content type.
2. Export as a full `.h5p` package (with all libraries bundled).
3. Rename the `.h5p` file to `.zip` and extract its contents into a subfolder, e.g. `lab-tour/`.
4. The folder should contain `content.json`, `h5p.json`, and a `libraries/` directory (or similar). The site's `index.html` loads content from `h5p-content/lab-tour` by default—use that path or update the path in `index.html` to match your folder name.

Until you add extracted content, the main page may show an error or blank player; that is expected.
