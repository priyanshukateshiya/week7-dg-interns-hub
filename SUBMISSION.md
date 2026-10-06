# Week 7 Submission Checklist

Deadline: **7th October**

| # | Deliverable | Status |
|---|---|---|
| 1 | GitHub repository | ⬜ push the local repo |
| 2 | Live link (Netlify / Vercel) | ⬜ deploy |
| 3 | PPT (5–10 slides) | ✅ `DG-Interns-Hub-Presentation.pptx` (8 slides) |
| 4 | LinkedIn post tagging DG Interns Hub | ⬜ draft ready in `LINKEDIN-POST.md` |

---

## 1. Push to GitHub

The repo is already initialised with one commit. Create an empty repo on GitHub named `dg-interns-hub` (no README, no .gitignore), then:

```bash
cd C:\laragon\www\dg-interns-hub
git branch -M main
git remote add origin https://github.com/<your-username>/dg-interns-hub.git
git push -u origin main
```

## 2. Deploy

Both SPA fallback configs are already committed, so `/jobs` and `/contact` survive a hard refresh.

**Vercel (fastest)**
1. vercel.com → *Add New…* → *Project* → import `dg-interns-hub`
2. Framework preset auto-detects **Vite** — leave the defaults
3. Deploy → copy the `*.vercel.app` URL

**Netlify**
1. netlify.com → *Add new site* → *Import an existing project* → pick the repo
2. Build command `npm run build`, publish directory `dist`
3. Deploy → copy the `*.netlify.app` URL

> `public/_redirects` handles Netlify, `vercel.json` handles Vercel. Nothing else to configure.

## 3. PPT

`DG-Interns-Hub-Presentation.pptx` — 8 slides:

1. Title — project, stats, mock listing cards
2. Objective and scope — requirement checklist + delivery stats
3. Tech stack — React, React Router, Vite, plain CSS
4. Routing and structure — route table + project tree
5. Key features — six feature cards
6. The apply flow — JobCard → ApplyModal walkthrough
7. Responsive design — device frames + breakpoint table
8. Learnings + links

**Before presenting:** open slide 8 and replace the two placeholder URLs with your real GitHub and live links. Speaker notes are filled in on every slide.

## 4. LinkedIn

Two drafts in `LINKEDIN-POST.md`. Replace the links, tag **@DG Interns Hub** with the `@` picker (plain text does not count as a tag), and attach screenshots.

Screenshots worth grabbing:
- Home page hero (desktop)
- Jobs page with a category filter active
- Apply modal open
- Mobile view with the hamburger menu expanded

---

## Local commands

```bash
npm run dev      # dev server
npm run build    # production build → dist/
npm run preview  # serve the built output
npm run lint     # oxlint
```
