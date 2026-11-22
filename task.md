Build a fast-loading, mobile-responsive personal portfolio web UI in Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion (frontend UI only, with structured mock data in `data/portfolio.ts`).

### Visual Design & Animation Direction (Inspired by doctorportfoliowebsitedemo.netlify.app)
- **Aesthetic & Palette:** Trustworthy, calm, editorial layout with generous whitespace, crisp typography (`Plus Jakarta Sans` or `Inter`), subtle `1px` borders, soft elevation cards, and a refined primary accent color (deep teal/emerald or slate-indigo) with light/dark theme support.
- **Animations (Smooth & Fast):** Use Framer Motion for smooth entrance reveals (`viewport={{ once: true, amount: "some" }}`), gentle hover lifts on cards, smooth mobile drawer transitions, and tab/slider or accordion transitions. Keep animations GPU-accelerated (`transform` and `opacity` only) and avoid heavy scroll-jacking so the site loads fast and stays smooth on mobile.
- **Layout Rhythm:**
  - Sticky top navigation bar with smooth section scrolling and a responsive mobile menu.
  - **Hero:** Two-column layout on desktop (stacks cleanly on mobile)—left side with role eyebrow, bold headline, short bio/mission, and primary/secondary CTAs; right side with profile photo and subtle floating stat/credential callouts.
  - **Key Metrics Strip:** Compact horizontal/grid stat bar (e.g., teaching experience, students/learners reached, projects/resources built, technical/academic milestones).
  - **Asymmetric Story / Split Sections:** Editorial two-column layouts with clean bullet highlights and badges.
  - **Structured Grids & Interactive Elements:** Clean cards for teaching profile, leadership, projects/resources, education/skills, achievements/testimonials, FAQ/highlights if helpful, and a clean contact section + multi-column footer.

### Required Sections & Content Structure (Use Placeholder/Example Data Easily Editable in `data/portfolio.ts`)
1. **Hero / Introduction:** Name, title ("Educator | EdTech Co-Founder | CSE Undergraduate"), profile photo placeholder, short bio & personal mission, and CTAs ("Contact Me", "Explore My Work").
2. **Teaching Profile:** Subjects, classes & curriculum expertise, teaching methodology, demo lectures / recorded classes cards, and student feedback highlights.
3. **Founder & Leadership:** Co-Founder of Studins School—role, responsibilities, vision, EdTech initiatives, and team/operations contributions.
4. **Projects & Portfolio:** Educational videos/lecture samples, notes/slides/MCQ & CQ solutions, learning resources/digital products, and website/LMS/EdTech contributions.
5. **Education & Technical Skills:** B.Sc. in CSE (University of Dhaka), coursework & technical skills, networking/CCNA learning & certifications, and software/digital tools proficiency.
6. **Achievements & Social Proof:** Teaching milestones, student outcomes/results, testimonials from students/parents/colleagues, and awards/certificates.
7. **Contact & Professional Links:** Professional email (with click-to-copy feedback), LinkedIn & social links, Studins School link, downloadable CV button/link, and a clean UI contact form.

### Execution Rules
- Organize code into clean, modular components (`Navbar.tsx`, `Hero.tsx`, `StatsStrip.tsx`, `TeachingProfile.tsx`, `Leadership.tsx`, `ProjectsGrid.tsx`, `EducationSkills.tsx`, `Achievements.tsx`, `ContactSection.tsx`, `Footer.tsx`) and `data/portfolio.ts`.
- Ensure responsive behavior on mobile (`375px`), tablet (`768px`), and desktop (`1440px`), with zero TypeScript errors and accessible labels.
- Start by outlining the folder structure and `data/portfolio.ts`, then create the components step by step.