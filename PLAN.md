# Personal Website V1 for SWE Job Applications

## Summary
- Build a `Next.js` + TypeScript portfolio site optimized for software engineering job applications: fast to scan for recruiters, credible for technical reviewers.
- Ship a polished v1 on Vercel, with all content maintained directly in typed code modules.
- Make `AILA` the clear centerpiece of the site, supported by a concise `BJ's` internship section, 2 smaller project cards, and an education block with `GPA 4.00`.
- Use a soft, pastel, polished visual system with `#FAE7EB`, `#E0D4E7`, `#DBEEF7`, `#BDD2E4`, `#EECEDA`, and `#CCDCEB`, while keeping the main page background light and mostly white.

## Routes and Content Interfaces
- Routes:
  - `/` for the main hiring-focused homepage.
  - `/projects/aila` for the single full case-study page in v1.
  - `/resume` for a simple resume preview/download page backed by `/resume.pdf`.
- Typed content modules:
  - `Profile`: name, title, short pitch, contact links, headshot, resume asset.
  - `FeaturedProject`: used for `AILA` with title, role, context, stack, architecture, decisions, outcomes, live link, repo link if public.
  - `ExperienceHighlight`: used for `BJ's` with org, role, dates, concise impact bullets, and safe public description.
  - `SupportingProject`: used for `C++ algorithm/paper` and `Tidy Turtles`.
  - `Education`: school, degree, GPA, relevant distinctions.

## Implementation Changes
- Homepage sections, in order:
  - Hero with headshot, full-stack positioning, short value proposition, and primary CTAs.
  - `AILA` featured section as the first major homepage block with a strong summary and CTA to the full case study.
  - `BJ's` experience section with concise production-oriented bullets.
  - Supporting projects section for `C++ algorithm/paper` and `Tidy Turtles`.
  - Education section including `GPA 4.00`.
  - Short “how I work” section.
  - Contact footer repeating direct links.
- `AILA` case-study page:
  - Problem/context, your role, product goal, stack, system design, key technical decisions, tradeoffs, outcome, and live link.
- `BJ's` section:
  - Present as work experience, not a project page.
- Supporting project presentation:
  - `C++ algorithm/paper`: focus on algorithmic rigor, implementation detail, and publication link if public.
  - `Tidy Turtles`: focus on design judgment, UX/game feel, and C# implementation breadth.
- Visual system:
  - Main page background stays white or near-white.
  - Use the pastel palette selectively for section backgrounds, cards, borders, buttons, tags, hover states, and subtle decorative accents.
  - Define CSS theme tokens for the six palette colors plus dark neutral text and light neutral backgrounds.

## Test Plan
- A recruiter can understand your profile, see `AILA` first, and reach your resume/contact links within 30-60 seconds.
- An engineer can open `AILA` and get a credible technical story without missing context.
- Resume page renders cleanly and PDF download works.
- Heading order, keyboard navigation, focus states, alt text, and color contrast meet a solid baseline.
- Mobile and desktop layouts both feel intentional and stable.

## Assumptions
- Implemented with `Next.js 15.5.19` because the local Node runtime is `20.0.0`, which is below the `Next.js 16` minimum requirement.
- V1 includes one full case study only: `AILA`.
- `BJ's` remains a concise homepage experience section because public detail is limited.
- `C++ algorithm/paper` and `Tidy Turtles` are supporting cards, not deep-dive pages in v1.
- `GPA 4.00` appears in education and highlights, not as the main hero claim.
