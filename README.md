# DG Interns Hub

A responsive job/internship landing website built with **React JS**, where students can browse, filter and apply to verified internship opportunities.

> Week 7 Task — React JS (Job Landing Website)

## 🔗 Links

- **Live Demo:** _add your Netlify/Vercel link here_
- **Repository:** _add your GitHub link here_

## ✨ Features

- **3 pages with React Router** — Home, Jobs, Contact (+ a 404 fallback)
- **9 internship listings** rendered as responsive cards
- **Apply button** on every card, opening a validated application modal
- **Live search** by role, company, location or skill
- **Category chips + work-type filter** (Remote / Onsite / Hybrid)
- **Contact form** with client-side validation and success state
- **Fully responsive** — mobile hamburger nav, fluid grids, no horizontal scroll
- **Accessible** — semantic HTML, ARIA labels, keyboard focus states, Escape to close modal

## 🛠 Tech Stack

| Tech | Use |
|---|---|
| React 19 (functional components + hooks) | UI |
| React Router DOM v7 | Client-side routing |
| Vite | Build tool / dev server |
| Plain CSS with custom properties | Styling & design tokens |

Hooks used: `useState`, `useEffect`, `useMemo`, `useLocation`.

## 📁 Project Structure

```
dg-interns-hub/
├── public/
│   └── _redirects            # Netlify SPA fallback
├── src/
│   ├── components/
│   │   ├── ApplyModal.jsx    # Application form + validation + success state
│   │   ├── Footer.jsx
│   │   ├── JobCard.jsx       # Reusable job card with Apply button
│   │   └── Navbar.jsx        # Sticky nav with mobile hamburger
│   ├── data/
│   │   └── jobs.js           # Job listings + filter options
│   ├── pages/
│   │   ├── Home.jsx          # Hero, stats, features, featured jobs, CTA
│   │   ├── Jobs.jsx          # Search + filters + full listing grid
│   │   └── Contact.jsx       # Contact form + info + FAQs
│   ├── App.jsx               # Routes + scroll restoration
│   ├── main.jsx              # Entry, wraps app in BrowserRouter
│   └── index.css             # Design tokens + all styles
├── index.html
├── vercel.json               # Vercel SPA fallback
└── package.json
```

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start dev server (http://localhost:5173)
npm run dev

# production build
npm run build

# preview the production build
npm run preview
```

## 📦 Deployment

Both configs are already included, so routes like `/jobs` won't 404 on refresh.

**Netlify**
1. Push the repo to GitHub
2. Netlify → *Add new site* → *Import an existing project*
3. Build command: `npm run build` · Publish directory: `dist`

**Vercel**
1. Vercel → *Add New Project* → import the repo
2. Framework preset: **Vite** (build command and output are auto-detected)

## 📱 Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 900px` | Full desktop — 2-column hero, 3-column job grid, 4-column footer |
| `≤ 900px` | Hero and contact stack to 1 column, footer to 2 columns |
| `≤ 768px` | Hamburger menu, filters stack, full-width buttons |
| `≤ 520px` | Single-column footer, compact form padding |

---

Built as part of the DG Interns Hub internship program.
