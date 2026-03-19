# Developer Portfolio

Static, single-page portfolio built with React, Tailwind CSS, and a minimal Express server for deployment. No database or authentication.

## Tech Stack

- **Frontend:** React (Vite), Tailwind CSS
- **Backend:** Node.js + Express (serves built static files only)
- **Data:** Static files in `client/src/data/` (no APIs that store data)

## Theme

- Background: `#0f0f0f`
- Cards: `#1a1a1a`
- Accent: Tailwind `orange-600`
- Text: light gray / white

## Folder Structure

```
portfolio/
├── client/                 # React app
│   ├── src/
│   │   ├── components/     # Section components (Navbar, Hero, About, etc.)
│   │   ├── data/           # Editable content (profile, skills, projects)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/
│   ├── server.js           # Serves client/dist in production
│   └── package.json
├── package.json
└── README.md
```

## Quick Start

1. **Install dependencies**

   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

2. **Develop (frontend only)**

   ```bash
   npm run dev
   ```

   Opens at `http://localhost:5173`.

3. **Build and run production server**

   ```bash
   npm run build
   npm run server
   ```

   Or from root: `npm run start` (builds then starts server). App at `http://localhost:3000`.

## Customizing Content

- **Hero, About, Contact, Education/Experience:** Edit `client/src/data/profile.js`
- **Skills:** Edit `client/src/data/skills.js`
- **Projects:** Edit `client/src/data/projects.js`

## Sections (single-page scroll)

1. Navbar  
2. Hero  
3. About  
4. Skills  
5. Projects  
6. Education / Experience  
7. Contact  
8. Footer  

Navbar links use `#section-id` for smooth scroll. Section IDs: `hero`, `about`, `skills`, `projects`, `experience`, `contact`.

## Future Enhancements

- Add animations (e.g. scroll-triggered) in the existing components.
- Add project images: set `image` in `projects.js` and render in `Projects.jsx`.
- Optional: add a blog or extra pages with a router later.
