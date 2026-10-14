# Durgaprakash Pentamani — Developer Portfolio

A responsive React portfolio built with Vite, React Router, Lucide icons, and CSS animations. It includes five routes, two project listings, education and skills information, and direct contact links.

## Local development

Requirements: Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). To make a production build and preview it locally:

```sh
npm run build
npm run preview
```

## Personal assets

- The supplied portrait is installed at `public/profile.jpg` and appears in the home page profile frame. Its original image is retained in the project root and referenced by `spec.md`.
- Add a real `public/resume.pdf` before exposing a resume link. The navigation currently omits the resume control because no resume file was supplied.

The contact page uses direct `mailto:` and `tel:` links; it does not claim to submit messages through a backend.

## Deployment

The project is ready for Vercel or Netlify. Import the repository and use:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

`vercel.json` and `netlify.toml` include SPA fallback rules so direct visits to `/about`, `/projects`, `/skills`, and `/contact` load the React application. No deployment has been performed from this workspace.
