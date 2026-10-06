# LinkedIn Post — Week 7 Submission

> Replace `<github-link>` and `<live-link>` before posting, and tag the official **DG Interns Hub** page (type `@DG Interns Hub` so it becomes a real tag, not plain text).

---

## Option 1 — Build-focused (recommended)

🚀 **Week 7 done — DG Interns Hub is live!**

This week's task was to build a job & internship landing website in React JS, and it turned into my favourite project so far.

**What I built:**
🔹 3 routed pages — Home, Jobs and Contact — using React Router
🔹 9 internship listings rendered from a single reusable JobCard component
🔹 A working Apply button that opens a validated application form
🔹 Live search + category and work-type filters (Remote / Onsite / Hybrid)
🔹 Fully responsive from 320px phones to wide desktop

**Tech:** React 19 (functional components + hooks), React Router 7, Vite, and plain CSS with custom properties — no Bootstrap, no Tailwind. Writing the design system by hand taught me far more than importing one would have.

**Biggest lesson:** state belongs to whoever owns the screen, not the card. Keeping `selectedJob` in the page instead of inside JobCard is what let the same component power the Home page, the Jobs grid and the search results without duplicating a single line.

🔗 Live: `<live-link>`
💻 Code: `<github-link>`

Grateful to @DG Interns Hub for the structured tasks — each week pushes a little further.

\#ReactJS #WebDevelopment #Frontend #JavaScript #ReactRouter #Vite #InternshipJourney #DGInternsHub #LearningInPublic

---

## Option 2 — Shorter, lesson-first

Week 7 of my internship with @DG Interns Hub: build a job/internship landing site in React JS. ✅

The brief said "job cards with an apply button". I wanted the apply button to actually *do* something — so it opens a modal with a validated form (email format, 10-digit phone, required fields) and a proper success state.

Along the way I learned something that only shows up once you deploy: a client-side route 404s on refresh until you tell the host to serve `index.html` for every path. Two config files later (`_redirects` for Netlify, `vercel.json` for Vercel) and `/jobs` survives a hard reload.

⚙️ React 19 · React Router 7 · Vite · plain CSS custom properties
📄 3 pages · 9 listings · 4 breakpoints · 0 UI libraries

🔗 Live: `<live-link>`
💻 Code: `<github-link>`

\#ReactJS #Frontend #WebDevelopment #JavaScript #DGInternsHub #InternshipJourney

---

## Posting checklist

- [ ] Replace both placeholder links
- [ ] Tag **@DG Interns Hub** using the `@` picker so it links to the page
- [ ] Attach 2–4 screenshots (desktop Home, Jobs grid with filters, apply modal, mobile view) — carousels outperform link-only posts
- [ ] Post Tue–Thu, roughly 9–11 AM IST
- [ ] Reply to early comments within the first hour
