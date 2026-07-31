# Maybo website

Static website prepared for GitHub Pages.

## Structure

- `index.html` — existing homepage
- `lighthouse/index.html` — Lighthouse by Maybo sales page
- `.nojekyll` — prevents GitHub Pages from applying Jekyll processing

## Local preview

From the repository root, run:

```bash
python3 -m http.server 8000
```

Then open:

- Homepage: `http://localhost:8000/`
- Lighthouse: `http://localhost:8000/lighthouse/`

## GitHub Pages

In the repository settings:

1. Open **Pages**.
2. Select **Deploy from a branch**.
3. Choose the required branch, normally `main`.
4. Select the repository root (`/`).
