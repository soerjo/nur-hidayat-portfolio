# OMP Task: Build Senior Frontend Developer Portfolio for Nur Hidayat (Next.js 16 + Tailwind CSS)

## Profile Data (from CV Nur Hidayat):
- **Name:** Nur Hidayat
- **Role:** Senior Frontend Developer (4+ years experience)
- **Location:** Cirebon, Jawa Barat, Indonesia
- **Email:** hidayatnur1502@gmail.com
- **WhatsApp:** +62 89622814512
- **LinkedIn:** https://www.linkedin.com/in/nur-hidayat-0bb4a6164
- **Summary:** Frontend developer with 4+ years of experience. Worked for innovative startups, large enterprise products, and award-winning agencies. Familiar with both remote and in-office roles. Always seeking to take ownership of the project and deliver faster than expected. Comfortable for website and API development.

## Work Experience:
1. **Siloam Hospital Group** (Tangerang, Indonesia | June 2024 - Present)
   - Role: Frontend Developer / Fullstack Contributor
   - Key Highlights:
     - Conducted thorough code reviews for high-quality deployments to dev & staging.
     - Implemented and configured message brokers across all Inpatient Department services for My Siloam, enhancing communication & reliability.
     - Redevelopment of the My Siloam Inpatient Department application using Next.js (frontend) and Node.js (backend) for enhanced performance & UX.
     - Resolved critical bugs in frontend services (especially print transaction sales orders).
     - Unit tests on each task achieving > 90% Sonarlint coverage.
2. **PT Kawan Lama Sejahtera** (Jakarta Barat, Indonesia | January 2023 - June 2024)
   - Role: Frontend Developer (Vue.js, TypeScript)
   - Key Highlights:
     - Service ticket dashboard (daily, weekly, monthly, yearly analytics).
     - Field ticket workflow & status state machine.
     - Check-in / check-out employee performance monitoring feature.
     - ERC (Estimated Repair Cost) calculation module.
     - Google Chat integration for problematic item telemetry & alerts.
3. **PT Folkatech** (Bandung, Indonesia | June 2022 - January 2023)
   - Role: Frontend Developer (Vue.js, TypeScript, Laravel, PostgreSQL)
   - Key Highlights:
     - **TOMPS.ID**: CMS project details management, analytics reporting (weekly/monthly/yearly), executive dashboards, master data.
     - **INDODAX**: Social Feeds CMS and internal system telemetry monitoring dashboard.
4. **Dinas Kehutanan Pemprov Jabar** (Bandung, Indonesia | June 2020 - June 2022)
   - Role: Web Developer (Laravel, Vue.js, CodeIgniter, LeafletJS, PostgreSQL)
   - Key Highlights:
     - West Java Tree Planting & Maintaining Movement platform (Pergub 522.4/17/Rek).
     - Public tree seed monitoring portal with interactive maps (LeafletJS).
     - Seed stock and plantation metrics dashboard with Google Analytics.
5. **PT Jaskipin Express** (Cirebon, Indonesia | January 2020 - June 2022)
   - Role: Fullstack Developer (Nuxt.js, Node.js, Vue.js, MongoDB, PostgreSQL)
   - Key Highlights:
     - Logistics web platform architecture & Nuxt.js implementation.
     - External service integrations: Midtrans payment gateway, logistics tracking, shipping APIs.
     - Performance optimization & responsive web app delivery.
6. **My Shope Agency** (Cirebon, Indonesia | October 2019 - December 2019)
   - Role: Junior Web Designer / Slicer (HTML, CSS, Shopify)
   - Key Highlights:
     - Design slicing & responsive Shopify storefront implementation.

## Education:
- **STMIK IKMI Cirebon** (2015 - 2019)
  - Bachelor of Engineering, Major in Computer Science

## Skills & Stack:
- **Core Frontend:** Next.js (App Router), Vue.js (2 & 3), Nuxt.js, React, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Sass.
- **Backend & APIs:** Node.js, Express, NestJS, Laravel, CodeIgniter, RESTful APIs, Message Brokers.
- **Databases & Tools:** PostgreSQL, MongoDB, MySQL, Git, Docker, Sonarlint, Jest, Vitest, Midtrans, LeafletJS.
- **Program & Project Management:** SDLC, Agile/Scrum, Resource Planning, Trello, Asana.

## UI/UX Design System & Features:
- Modern, clean developer portfolio with Dark Mode aesthetic (deep slate canvas `#0b0f19`, cyan / emerald accents, subtle grid lines, glowing badges, glassmorphism cards).
- Sections:
  1. **Navbar**: Brand/Name, Navigation links (About, Experience, Projects/Cases, Skills, Education, Contact), Resume PDF Download button, Theme Toggle / Contact CTA.
  2. **Hero Section**:
     - Headline: "Senior Frontend Developer building high-performance web systems."
     - Bio summary, status indicator badge ("Available for high-impact roles"), location (Cirebon & Remote Worldwide), quick stats (4+ Years Exp, 6 Enterprise Roles, 90%+ Test Coverage, 10+ Production Apps).
     - CTAs: "View Experience", "Download CV", "Get in Touch (WhatsApp / Email)".
  3. **Experience Timeline (Interactive & Detailed)**:
     - Tabbed or chronological interactive cards for Siloam Hospitals, Kawan Lama, Folkatech (TOMPS & INDODAX), Dinas Kehutanan, Jaskipin Express, My Shope.
     - Tech stack pills for each role, bullet points highlighting key business impact and technical metrics.
  4. **Key Projects & Systems Showcase**:
     - Highlight cards for:
       - *My Siloam Inpatient Department App* (Next.js, Node.js, Message Brokers, >90% coverage)
       - *Kawan Lama Service & Field Ticketing System* (Vue.js, TypeScript, Google Chat bot)
       - *TOMPS.ID Enterprise Project CMS* (Laravel, Vue.js, PostgreSQL)
       - *INDODAX Internal Social Feeds & Monitoring* (Vue.js)
       - *West Java Seed Monitoring & Forestry GIS* (LeafletJS, CodeIgniter, Laravel)
       - *Jaskipin Express Logistics Portal* (Nuxt.js, Midtrans, MongoDB)
  5. **Technical Skills Matrix**:
     - Categorized into Frontend Mastery, Backend & Microservices, Database & DevOps, Architecture & Testing.
     - Skill level / experience visual indicators.
  6. **Education & Certifications Section**:
     - STMIK IKMI Cirebon (Bachelor of Computer Science).
  7. **Interactive Contact & Hire Me Section**:
     - Direct WhatsApp trigger, Email mailto, LinkedIn link.
     - Quick inquiry / contact message form with simulated instant feedback (using Sonner toast).
  8. **Footer**:
     - Copyright, quick links, tech stack indicator ("Built with Next.js 16, Tailwind CSS & TypeScript").

## Technical Constraints:
- Clean Public Web: No middleware redirect, `src/proxy.ts` allows all paths.
- Remove AuthProvider redirect loops in `src/providers/index.tsx`.
- App router structure: Root page at `src/app/(marketing)/page.tsx` or `src/app/page.tsx`.
- Clean up unused routes from template (`src/app/(auth)`, `src/app/(dashboard)`, `src/app/dashboard-v2`).
- Responsive, mobile-first design with smooth scroll.
- Zero TypeScript errors (`bunx tsc --noEmit`).
- Zero ESLint errors (`bun run lint`).
- Vitest unit tests for portfolio components (`bun run test`).
- Build verification (`bun run build`).
