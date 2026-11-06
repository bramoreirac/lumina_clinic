# Lúmina alternative website

This folder is a self-contained React and Vite landing page intended to live at `/design/` beside the original site. It contains the header, hero, and featured treatments section.

## Run locally

From this folder:

```sh
npm ci
npm run dev
```

Open the URL shown by Vite at `/design/`.

On PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

## Build and integrate

Run `npm run lint` and `npm run build`. The build writes `dist/design/`, so the contents of `dist/` can be merged into the main site's published directory without replacing its root pages. The site's links and assets use `/design/` as their base path.

The folder can also be zipped and copied into another project as `design/`. Run its own `npm ci` after extraction. The generated `dist/` folder may be omitted from the ZIP because `npm run build` recreates it. Dependencies are installed with `npm ci` after extraction.

`netlify.toml` publishes this folder's `dist/` if it is deployed on its own. The HTML page includes `noindex, nofollow` while the layout is under review.

Project notes and content references are included alongside the source files.
