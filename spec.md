# PERSONAL DEVELOPER PORTFOLIO — COMPLETE SPECIFICATION SHEET

**Project Name:** Durgaprakash Pentamani — Developer Portfolio  
**Project Type:** Multi-page responsive personal portfolio website  
**Purpose:** Showcase software development, AI/ML projects, technical skills, education, and contact information for campus placements and job applications.

---

## 1. PROJECT OVERVIEW

Build a professional, modern, premium-looking developer portfolio website for a final-year B.E. Computer Science and Engineering (AI & ML) student.

The website should present the developer as someone interested in software engineering, applied AI/ML, agentic AI, Python development, and full-stack web development.

The portfolio must be suitable for:
- Software Development Engineer (SDE) roles.
- AI/ML Engineer and AI application development roles.
- Python Developer roles.
- Full-Stack Developer roles.
- Campus placements, recruiters, and technical interviews.

The website must be a working React application, not just a static visual design.

## 2. PERSONAL INFORMATION

Use the following information consistently throughout the website.

- **Full Name:** Durgaprakash Pentamani
- **Primary Headline:** AI & ML Engineer
- **Role Carousel:**
  1. AI & ML Engineer
  2. Python Developer
  3. Full-Stack Web Developer
- **Tagline:** “I build AI-powered web apps and voice agents.”
- **Email:** pentamanidurgaprakash@gmail.com
- **Phone:** 8096912580
- **Location:** Hyderabad, India
- **LinkedIn:** https://www.linkedin.com/in/durga-prakash-p-3b2441294
- **GitHub:** https://github.com/durgaprakashpentamani9

Do not add fake work experience, client names, testimonials, certifications, achievements, statistics, or professional titles.

## 3. TECHNOLOGY STACK

### Frontend
- React.js
- Vite
- JavaScript with JSX
- React Router DOM
- Tailwind CSS or the project's existing styling approach
- Lucide React icons

### Animation

- Use CSS transitions and keyframes for smooth, lightweight animations.
- Use Framer Motion only if it is already installed or can be added cleanly without unnecessary dependencies.
- Add a subtle floating animation and purple-blue glow to the existing profile photo.
- Add smooth entrance animations to existing page sections and content.
- Add scroll-reveal animations to existing headings, cards, skill groups, and other content.
- Add subtle hover effects and smooth transitions to existing buttons, project cards, navigation links, and interactive elements.
- Keep animations consistent with the existing dark theme and purple-blue gradient design.
- Ensure animations are smooth, responsive, and performant on desktop and mobile.
- Respect `prefers-reduced-motion` accessibility settings.
- Avoid excessive movement, distracting effects, and unnecessary animation delays.
- Preserve all existing layouts, content, colors, typography, routes, components, and functionality.
- Do not add new pages, features, or technologies solely for animation.
- Make only the minimum necessary animation-related code changes.

### Development tools
- Node.js
- npm
- Git and GitHub

### Deployment
- Vercel or Netlify

**Backend:** Not required. The portfolio should be a frontend-only application.

Use the existing project's dependencies and architecture wherever practical. Do not migrate to TypeScript, Next.js, or another framework.

## 4. DESIGN SYSTEM

### Visual direction

Create a premium, modern, dark developer portfolio inspired by high-quality software engineer portfolios.

**Theme:**
- Near-black background.
- Deep navy secondary surfaces.
- Purple and electric-blue gradients.
- White primary text.
- Muted grey secondary text.
- Subtle borders and restrained glow effects.

Suggested colors:
- Main background: `#080A12`
- Secondary background: `#0F1220`
- Card background: `#121629`
- Primary accent: `#8B5CF6`
- Secondary accent: `#3B82F6`
- Main text: `#F8FAFC`
- Muted text: `#A1A1AA`
- Border: `#252A3A`

These colors are design suggestions; maintain consistent contrast and readability.

### Typography
- Use a clean sans-serif font such as Inter.
- Use strong headings with clear hierarchy.
- Keep body text readable and concise.
- Avoid oversized paragraphs and excessive decorative text.

### Visual elements
- Subtle purple-blue gradient backgrounds.
- Soft radial gradient lighting.
- Glass-like card surfaces used sparingly.
- Consistent rounded corners.
- Subtle hover elevation and border highlights.
- Clean spacing and alignment.
- Professional icons.
- Minimal, purposeful motion.

Avoid excessive neon effects, distracting animations, cluttered layouts, and unnecessary 3D elements.

## 5. WEBSITE STRUCTURE

Build exactly five main pages:

1. Home — `/`
2. About — `/about`
3. Projects — `/projects`
4. Skills — `/skills`
5. Contact — `/contact`

Use React Router DOM for navigation.

Create a shared navigation bar and footer across all pages. Every route must work when opened directly, including after deployment.

## 6. PAGE 1 — HOME

### A. Navigation bar

Display:
- Developer name or compact personal logo.
- Home
- About
- Projects
- Skills
- Contact
- Resume button

Requirements:
- Keep navigation clean and readable.
- Highlight the active route.
- Add a mobile hamburger menu.
- Ensure the menu opens and closes correctly.
- Close the mobile menu after navigation.
- Keep keyboard navigation functional.

The Resume button must open the real resume file if one is supplied. If no resume file exists, use a clearly documented placeholder or hide the button until a valid file is added. Never link to a nonexistent file.

### B. Hero section

Use a two-column desktop layout.

**Left column:**
- Small introduction: “Hello, I'm”
- Large heading: “Durgaprakash Pentamani”
- Animated role carousel displaying the four specified role titles.
- Tagline: “I build AI-powered web apps and voice agents.”
- A concise supporting paragraph about developing practical AI applications and web solutions.
- Primary CTA: “View My Projects”
- Secondary CTA: “Contact Me”
- GitHub and LinkedIn icons with working external links.

**Right column:**
- Profile photograph.
- Circular or rounded image frame.
- Subtle purple-blue gradient glow behind the image.
- Clean, professional presentation.

Use `public/profile.jpg` for the photograph.

The supplied portrait is included at `public/profile.jpg`; use it in the hero profile frame. The source image is `WhatsApp Image 2026-10-05 at 3.35.49 PM.jpeg` in the project root.

If the image is missing, show a polished initials fallback such as `DP`. Do not display a broken image icon.

### C. Animated role carousel

Rotate through:
- AI & ML Engineer
- Agentic AI Developer
- Python Developer
- Full-Stack Web Developer

Requirements:
- Smooth text transition or typing animation.
- No layout shifting.
- Readable text at all screen sizes.
- Respect the user's reduced-motion preference.
- Do not allow animation to interfere with screen readers.

### D. Featured projects

Display exactly two project cards:

1. AI Virtual Interview System
2. Home Credit LAP Voice Agent

Each card should contain:
- Project name.
- Short description.
- Technology tags.
- “View Project” or “Live Demo” link where applicable.
- GitHub repository link.

Do not add NeuroFlow AI, HealthLens AI, or any other project to this portfolio's project listing.

### E. Skills preview

Display a compact preview of the developer's core skills with a link to `/skills`.

### F. Call to action

Add a concise section encouraging recruiters to view the projects or make contact.

Do not claim the developer is currently available for work unless explicitly confirmed.

## 7. PAGE 2 — ABOUT

### A. Introduction

Create a professional introduction explaining that the developer is a final-year engineering student focused on software development and practical AI applications.

Suggested content:

“I am a final-year Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I enjoy building practical applications that combine software engineering, web technologies, and AI. My project work includes AI-powered interview practice and voice-agent applications.”

This paragraph can be refined for clarity without adding unsupported claims.

### B. Education

Display an education timeline or clean cards.

**Degree**
- Qualification: B.E., Computer Science and Engineering (AI & ML)
- Institution: Methodist College of Engineering and Technology
- Duration: 2023–2027
- CGPA: 7.69

Do not invent graduation results or describe the degree as completed before graduation.

### C. Interests

Show concise interest areas:
- Applied Artificial Intelligence
- Machine Learning
- Agentic AI and LLM applications
- Software Development
- Full-Stack Web Development
- Problem Solving

Only present these as interests or focus areas, not as verified professional expertise.

### D. Personal approach

Briefly describe an interest in learning by building projects, solving implementation problems, testing applications, and improving software quality.

Do not invent leadership experience, awards, or measurable accomplishments.

## 8. PAGE 3 — PROJECTS

**Critical requirement: Display exactly two projects.**

Use two polished project cards with consistent layouts. Cards may have different descriptions and technology tags, but do not add additional project cards.

### PROJECT 1: AI Virtual Interview System

**Category:** AI Application / Full-Stack Development

**Description:**

“An AI-powered mock interview application that helps users practice interview questions and review their interview performance through an interactive experience.”

**Technology tags:**
- React
- Vite
- Tailwind CSS
- FastAPI
- PostgreSQL
- Gemini API
- Whisper
- WebSocket
- MediaPipe

**GitHub repository:**

https://github.com/durgaprakashpentamani9/AI_Virtual_interview

**Live demo:**

https://aivirtualinterview.vercel.app

**Buttons:**
- GitHub Repository
- Live Demo

Open external links safely in a new tab where appropriate, with suitable `rel` attributes.

Do not claim specific model accuracy, user counts, or performance improvements unless verified.

### PROJECT 2: Home Credit LAP Voice Agent

**Category:** Voice AI / Conversational AI

**Description:**

“A voice-agent project designed around Home Credit Loan Against Property conversations, using structured prompt design and a live voice demo to explore customer interaction workflows.”

**Technology tags:**
- Prompt Design
- Voice AI
- Retell AI

**GitHub repository:**

https://github.com/durgaprakashpentamani9/voice-agent

**Live demo:**

https://agent.retellai.com/orb/agent_626241fd20cf2a828c31597c2f?token=9c6f487d4b6fc2166c8dd13f2c737e52

**Buttons:**
- GitHub Repository
- Live Demo

Show a descriptive button label such as “Try Voice Demo”; do not print the long demo URL as visible page text.

Do not imply that the agent is deployed for actual banking operations or is officially endorsed by Home Credit.

### Project presentation requirements

- Use a responsive two-column grid on wider screens.
- Stack cards on mobile.
- Include technology tags that wrap correctly.
- Add subtle hover effects.
- Keep descriptions concise.
- Ensure every button points to a valid destination.
- Use real project screenshots only if supplied or available from the actual projects.
- Do not generate fake application screenshots that could misrepresent the projects.

## 9. PAGE 4 — SKILLS

## 9. PAGE 4 — SKILLS

### 9.1 Purpose

Present technical skills through five career-focused cards that communicate the developer's interests in software engineering, web development, backend development, AI/ML, and data analytics.

### 9.2 Category 1: Software Development Engineer (SDE)

**Description:** Programming, software development fundamentals, and problem-solving skills.

**Technologies:**
- Python
- JavaScript
- React.js
- SQL
- Git
- Data Structures and Algorithms

Add Node.js, MongoDB, or System Design only if the developer can confidently explain and demonstrate them.

### 9.3 Category 2: Frontend Developer

**Description:** Building responsive, interactive, and user-friendly web interfaces.

**Technologies:**
- HTML
- CSS
- JavaScript
- React.js
- Vite
- Git

Add Redux only if the developer has practical experience with it.

### 9.4 Category 3: Backend Developer (Python)

**Description:** Building server-side applications and APIs.

**Technologies:**
- Python
- FastAPI
- REST APIs
- SQL
- PostgreSQL
- Git

Add Django or MongoDB only if the developer can confidently explain and demonstrate them.

### 9.5 Category 4: Generative AI and Machine Learning

**Description:** Developing AI-powered applications using machine learning concepts and LLM-based workflows.

**Technologies and Concepts:**
- Machine Learning fundamentals
- LLM-based applications
- Agentic AI concepts
- Retrieval-Augmented Generation (RAG) concepts
- Prompt design
- Python

### 9.6 Category 5: Data Analyst

**Description:** Analyzing datasets and presenting useful insights.

**Technologies:**
- Python
- SQL
- Statistics
- Power BI, if practical experience is available
- Tableau, if practical experience is available

### 9.7 UI and Design Requirements

- Display the five categories as professional, visually consistent cards.
- Use a responsive three-column grid on desktop, two columns on tablets, and one column on mobile.
- Maintain the existing dark theme, purple-blue accents, icons, rounded corners, and subtle animations.
- Include each category's title, short description, and technology tags.
- Use consistent card spacing and alignment.
- Add subtle hover and scroll-reveal animations consistent with the existing portfolio.
- Do not display arbitrary skill percentages or proficiency ratings.
- Do not add technologies that the developer cannot confidently explain.
- Keep all existing pages and navigation working.
- Do not add dependencies or modify unrelated sections.

### 9.8 Acceptance Criteria

- All five career categories display correctly.
- All descriptions and technology tags are readable.
- Responsive layouts work on desktop, tablet, and mobile.
- Existing design and animation styles remain consistent.
- The Skills page builds and renders without errors.

**Skill accuracy rule:** Before finalizing, compare these items with the developer's actual experience. Remove skills that cannot be confidently explained in an interview. Do not assign arbitrary percentages or skill ratings.

## 10. PAGE 5 — CONTACT

### A. Contact heading

Suggested heading:

“Let's Connect”

Suggested supporting text:

“Have an opportunity, project idea, or technical discussion in mind? Feel free to get in touch.”

### B. Contact information

Display:
- Email
- Phone
- LinkedIn
- GitHub

Requirements:
- Email should use a working `mailto:` link.
- Phone should use a working `tel:` link.
- LinkedIn should open the specified profile.
- GitHub should open the specified profile.

### C. Contact form

A simple contact form may include:
- Name
- Email
- Subject
- Message
- Submit button

Because this is a frontend-only project, do not pretend the form sends messages if no backend or form provider is configured.

Choose one of these implementations:
1. Use a clearly documented email-based contact flow.
2. Integrate a real form provider only after configuring its required credentials.
3. Omit the form and display the contact methods if a reliable submission flow is not available.

Add basic client-side validation, helpful error messages, and accessible labels.

Do not expose private API keys or secrets in frontend code.

## 11. SHARED FOOTER

Include:
- Developer name.
- A short professional tagline.
- GitHub link.
- LinkedIn link.
- Email link.
- Copyright year generated dynamically.

Keep the footer simple and consistent across all pages.

## 12. RESPONSIVE DESIGN

The website must work on:
- Desktop monitors.
- Laptops.
- Tablets.
- Mobile phones.

Requirements:
- No horizontal overflow.
- Responsive typography and spacing.
- Navigation collapses appropriately on mobile.
- Hero columns stack cleanly on smaller screens.
- Project cards adapt to the available width.
- Buttons have adequate touch targets.
- Images remain properly cropped.
- Long URLs and technology tags do not break layouts.

Test at representative widths around 360px, 768px, 1024px, and 1440px.

## 13. ANIMATION AND INTERACTION

Implement purposeful animations such as:
- Role-text transition.
- Subtle hero entrance.
- Card hover transitions.
- Navigation active-state transition.
- Small button hover effects.
- Optional scroll-reveal animations.

Requirements:
- Animations must not delay access to content.
- Avoid excessive movement and visual distraction.
- Respect `prefers-reduced-motion`.
- Do not introduce a heavy animation library unless needed.
- Every interactive element must perform its advertised action.

## 14. ACCESSIBILITY

Follow practical accessibility standards:
- Use semantic HTML elements.
- Maintain readable color contrast.
- Add meaningful image alternative text.
- Use labels for form fields.
- Ensure keyboard-accessible navigation.
- Provide visible focus states.
- Use accessible names for icon-only buttons.
- Avoid conveying important information through color alone.
- Respect reduced-motion settings.

## 15. SEO AND SOCIAL SHARING

Configure:
- Page title.
- Meta description.
- Viewport metadata.
- Theme color.
- Favicon.
- Open Graph metadata for social sharing.

Suggested page title:

“Durgaprakash Pentamani | AI & ML Developer Portfolio”

Suggested description:

“Explore the projects, technical skills, and work of Durgaprakash Pentamani, a final-year Computer Science and Engineering student focused on AI applications and software development.”

Do not add fake reviews, structured ratings, or unsupported professional claims.

## 16. PROJECT STRUCTURE

Use a clean structure similar to the following, adapting it to the existing project where necessary.

```text
portfolio/
├── public/
│   ├── profile.jpg
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillGroup.jsx
│   │   └── RoleCarousel.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── README.md
└── spec.md
```

This is a suggested structure, not a requirement to recreate an already working project from scratch.

## 17. PERFORMANCE AND CODE QUALITY

- Use reusable React components.
- Keep project data separate from presentation components.
- Use stable keys when rendering lists.
- Avoid unnecessary dependencies.
- Avoid unnecessary re-renders.
- Compress large image assets where practical.
- Use appropriate image dimensions.
- Keep console errors and warnings to a minimum.
- Do not leave dead links or nonfunctional buttons.
- Do not place secrets in source code.
- Do not duplicate the same page content unnecessarily.
- Preserve working code unless a change is needed.

## 18. TESTING REQUIREMENTS

Before declaring the project complete, verify the following.

### Build and routing
- [ ] Install dependencies successfully.
- [ ] Run the production build.
- [ ] Verify all five routes.
- [ ] Verify direct navigation to `/about`, `/projects`, `/skills`, and `/contact`.
- [ ] Verify the hosting configuration supports React Router routes.

### Content
- [ ] Name and contact information are correct.
- [ ] Education and CGPA are correct.
- [ ] All four role titles appear.
- [ ] Exactly two projects are displayed.
- [ ] Project descriptions and technology tags are correct.
- [ ] GitHub and demo links work.
- [ ] Resume button works only when a valid resume is supplied.

### Design
- [ ] Desktop layout works.
- [ ] Mobile layout works.
- [ ] Tablet layout works.
- [ ] Profile image displays or falls back gracefully.
- [ ] No horizontal overflow.
- [ ] Navigation and footer are consistent.

### Accessibility and quality
- [ ] Keyboard navigation works.
- [ ] Focus indicators are visible.
- [ ] Reduced-motion preference is respected.
- [ ] Images have appropriate alternative text.
- [ ] Form errors are understandable.
- [ ] No broken links or obvious console errors.

Run `npm run build` and any existing test or lint commands. Fix issues and report any remaining problems accurately.

## 19. DEPLOYMENT

Prepare the project for deployment using Vercel or Netlify.

Expected steps:
1. Ensure the project builds locally.
2. Push the source code to GitHub.
3. Import the repository into Vercel or Netlify.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Configure SPA fallback/rewrite rules if required by the hosting provider.
7. Deploy the website.
8. Test the live website on desktop and mobile.
9. Verify all routes, contact links, project links, and resume download.

Do not claim the site has been deployed until a real deployment has been completed and checked.

## 20. DEFINITION OF DONE

The project is complete only when:
- All five pages are implemented.
- React Router navigation works.
- The premium dark design is consistent.
- The profile image and fallback work.
- The animated role carousel works.
- Exactly two projects appear throughout the portfolio's project listings.
- All supplied links and contact details are correct.
- Responsive layouts are usable.
- Accessibility basics are implemented.
- The production build succeeds.
- Deployment instructions are documented.
- Remaining limitations are explicitly reported.

## 21. INSTRUCTIONS TO CODEX

Act as a senior React developer.

First inspect the existing repository, `spec.md`, `package.json`, source files, and current implementation.

Do not rebuild the application from scratch unless the existing structure is unusable.

Work in phases:

**Phase 1 — Audit**
- Inspect the current application.
- Identify incomplete pages, broken links, build problems, and design inconsistencies.
- Report the proposed changes before implementation.

**Phase 2 — Implementation**
- Implement the required pages and shared components.
- Follow the specifications above.
- Preserve working functionality.
- Use the exact supplied personal information and project links.
- Do not invent accomplishments or project results.

**Phase 3 — Validation**
- Run available checks.
- Run `npm run build`.
- Fix build errors.
- Test navigation, responsive behavior, and links where possible.

**Phase 4 — Handover**
Provide:
- Summary of completed changes.
- Files created or modified.
- Build and test results.
- Any remaining issues.
- Exact local run commands.
- Deployment instructions.

Do not stop after giving recommendations. Make the changes in the existing project, and report honestly what was and was not tested.

# 22. ADVANCED ANIMATION AND MOTION SPECIFICATION

## Animation Goal

Create a premium, futuristic developer portfolio with smooth, professional animations using a dark background and purple-blue gradients.

Animations must improve the user experience without making the website slow, distracting, or difficult to navigate.

### A. Page Load Animation

- Fade in the hero section.
- Slide the main heading upward slightly.
- Reveal the profile image with a subtle scale and glow effect.
- Stagger the appearance of buttons, social icons, and supporting text.
- Keep the total animation duration short.

### B. Animated Role Carousel

Continuously rotate between:

- AI & ML Engineer
- Agentic AI Developer
- Python Developer
- Full-Stack Web Developer

Use a smooth typing, fade, or slide transition. Avoid layout shifts while role titles change.

### C. Profile Image Animation

- Add a slowly pulsing purple-blue glow around the profile image.
- Use a subtle floating animation.
- Add a gradient ring with a smooth color transition.
- Keep the image stationary enough to remain comfortable to view.

### D. Background Effects

- Add subtle animated gradient lighting.
- Use a few slowly moving particles or small glowing dots.
- Optionally add a faint orbit line around the profile image.
- Avoid heavy particle libraries or expensive continuous animations.

### E. Project Card Animations

When a project card enters the viewport:

- Fade in and move upward slightly.
- Stagger the two cards.
- On hover, raise the card slightly and brighten its border.
- Animate buttons and technology tags subtly.
- Ensure every project link remains usable.

### F. Navigation Animation

- Animate the active navigation underline.
- Add subtle hover color transitions.
- Animate the mobile menu open and close.
- Keep the navigation responsive and keyboard accessible.

### G. Scroll Reveal

Use Intersection Observer or an existing lightweight animation library to reveal sections as the user scrolls.

Apply this to:

- About section
- Project cards
- Skills groups
- Contact section

Do not repeatedly replay animations unnecessarily when scrolling up and down.

### H. Skills Animation

- Reveal skill cards with a staggered entrance.
- Add a subtle hover glow.
- Use icon movement only where appropriate.
- Do not display fake skill percentages or proficiency meters.

### I. Buttons and Links

- Use smooth hover transitions.
- Add a small arrow movement for CTA buttons.
- Add a restrained gradient shift.
- Provide clear focus indicators for keyboard users.

### J. Contact Animation

- Reveal contact information smoothly.
- Animate form validation messages without hiding errors.
- Show a success message only when a real submission or email action has succeeded.

## Animation Technologies

Prefer CSS animations and transitions for simple effects.

Use Framer Motion only if necessary and compatible with the current project. If it is added, keep its use focused on page transitions, scroll reveals, and complex motion.

Do not install multiple animation libraries for overlapping purposes.

## Performance and Accessibility

- Respect `prefers-reduced-motion`.
- Disable or greatly reduce floating, particle, and scroll animations when reduced motion is requested.
- Avoid animating expensive layout properties continuously.
- Prefer `transform` and `opacity` for animations.
- Avoid excessive blur effects on large areas.
- Prevent animations from causing horizontal overflow.
- Keep all content readable if animations fail or are disabled.
- Ensure mobile performance remains smooth.

## Animation Acceptance Criteria

- [ ] Hero entrance animation works.
- [ ] Role carousel cycles through all four roles.
- [ ] Profile glow and floating effect work.
- [ ] Background effects remain subtle.
- [ ] Project cards reveal on scroll.
- [ ] Hover effects work on desktop.
- [ ] Navigation transitions work.
- [ ] Skills reveal smoothly.
- [ ] Reduced-motion settings are respected.
- [ ] No animation blocks buttons or navigation.
- [ ] No horizontal overflow or major performance issues.


## Supplied profile photo

The portrait below is the source image copied to `public/profile.jpg` for the website profile. Keep the initials fallback for cases where the deployed image cannot load.

![alt text](<WhatsApp Image 2026-10-05 at 3.35.49 PM.jpeg>)
