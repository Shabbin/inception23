# INCEPTION 23

> A premium strategic advisory landing website for business consulting, legal support, and technology transformation services.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge\&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge\&logo=tailwindcss\&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge\&logo=vercel)

## Overview

**INCEPTION 23** is a modern, animated, bilingual corporate website built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. The site presents a premium advisory firm focused on three integrated service pillars:

* **Business Advisory**
* **Legal Support**
* **IT Solutions**

The experience is designed as a high-end landing page with smooth motion, responsive layouts, bilingual English/Bangla content, dark mode support, animated hero visuals, service tabs, industry sections, testimonials, leadership profiles, global presence, and a confidential inquiry form.

Live site: [inception23.vercel.app](https://inception23.vercel.app)

## Features

* **Premium landing page experience** with animated, section-based storytelling.
* **Bilingual interface** with English and Bangla content switching.
* **Light and dark mode** powered by persisted global state.
* **3D/Lottie-powered hero section** using React Three Fiber, Drei, and DotLottie.
* **Service capability tabs** for Business Advisory, Legal Support, and IT Solutions.
* **Industry expertise section** covering technology, energy, healthcare, finance, public sector, and manufacturing.
* **Core values timeline** describing the firm’s operating philosophy.
* **Proof of impact section** with advisory, efficiency, and compliance metrics.
* **Confidential inquiry form** for collecting business, legal, or technology inquiries.
* **Leadership/team section** with partner cards.
* **Testimonials carousel** with client-style endorsements and outcomes.
* **Global presence section** with interactive office/location presentation.
* **Careers call-to-action** for recruitment and future partners.
* **Responsive mobile navigation** with scroll-aware behavior.
* **State persistence** through Zustand and local storage.

## Tech Stack

| Category          | Technology                        |
| ----------------- | --------------------------------- |
| Framework         | Next.js 15                        |
| UI Library        | React 19                          |
| Language          | TypeScript                        |
| Styling           | Tailwind CSS                      |
| Animation         | Framer Motion                     |
| 3D Graphics       | Three.js, React Three Fiber, Drei |
| Lottie Animations | DotLottie React                   |
| Icons             | Lucide React                      |
| State Management  | Zustand                           |
| Deployment        | Vercel                            |

## Project Structure

```text
inception23/
├── public/
│   ├── IT-Solutions.jpg
│   ├── Law.lottie
│   ├── business.lottie
│   ├── technology.lottie
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── home/
│   │   │   ├── Capabilities.tsx
│   │   │   ├── Careers.tsx
│   │   │   ├── CoreValues.tsx
│   │   │   ├── GlobalPresence.tsx
│   │   │   ├── Hero3D.tsx
│   │   │   ├── HeroWrapper.tsx
│   │   │   ├── IndustriesMarquee.tsx
│   │   │   ├── Insights.tsx
│   │   │   ├── Sections.tsx
│   │   │   ├── Team.tsx
│   │   │   └── Testimonials.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   └── ui/
│   │       ├── Illustrations.tsx
│   │       └── RichIcon.tsx
│   └── lib/
│       └── store.ts
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Main Sections

### Hero

The hero section introduces the firm through rotating service slides:

* Business & Strategy Advisory
* Corporate Legal Support
* Software & IT Solutions

It combines motion effects, Lottie illustrations, 3D canvas elements, and CTA buttons for exploration and inquiry.

### Capabilities

The capabilities section presents the firm’s three major service pillars. Each pillar includes six service cards with icons, descriptions, and bilingual copy.

#### Business Advisory

* Corporate Strategy
* M&A Advisory
* Operational Scale
* Financial Restructuring
* Market Entry
* Executive Coaching

#### Legal Support

* Regulatory Compliance
* Intellectual Property
* Corporate Law
* Dispute Resolution
* Contract Integrity
* Risk Mitigation

#### IT Solutions

* Cloud Infrastructure
* Cyber Security
* Data & AI Analytics
* Digital Transformation
* Edge Computing
* Disaster Recovery

### Industry Expertise

The site highlights cross-industry advisory capability across:

* Technology
* Energy
* Healthcare
* Financial Services
* Public Sector
* Manufacturing

### Core Values

A visual timeline communicates the firm’s values:

* Absolute Precision
* Relentless Accountability
* Market Dominance
* Architectural Superiority
* Frictionless Scaling
* End-Game Execution

### Proof of Impact

A metrics-focused section communicates credibility through business outcomes such as assets advised, efficiency gains, and regulatory compliance.

### Inquiry Form

The inquiry form is designed for confidential business conversations. It includes fields for name, work email, organization, inquiry type, and confidential brief.

### Team

The team section presents leadership/partner profiles with roles, bios, and visual cards.

### Testimonials

The testimonials section includes a carousel-style client endorsement experience with categories, outcomes, and navigation controls.

### Global Presence

The global section presents locations including New York, London, Dubai, Singapore, and Dhaka with interactive hover visuals.

### Careers

A premium call-to-action invites future partners and talent to explore career opportunities.

## State Management

Global UI state is handled with **Zustand** in `src/lib/store.ts`.

The store manages:

* Current language: `en` or `bn`
* Current theme: `light` or `dark`
* Active hero slide
* Language toggle
* Theme toggle
* Slide updates

State is persisted in local storage under the key:

```text
inception-storage
```

This keeps language and theme preferences available across page reloads.

## Styling

The project uses Tailwind CSS with custom theme extensions.

Custom design tokens include:

* `brand` color palette for the main purple identity
* `night` palette for dark mode surfaces
* Poppins as the body font
* Playfair Display as the heading font
* Custom radial hero glow background
* Smooth scroll behavior
* Custom scrollbar styling

## Getting Started

### Prerequisites

Make sure you have installed:

* Node.js 18.18+ or newer
* npm, yarn, pnpm, or bun

### Installation

Clone the repository:

```bash
git clone https://github.com/Shabbin/inception23.git
```

Move into the project directory:

```bash
cd inception23
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the project in your browser:

```text
http://localhost:3000
```

## Available Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Starts the local Next.js development server. |
| `npm run build` | Creates a production build.                  |
| `npm run start` | Starts the production server after building. |
| `npm run lint`  | Runs the configured lint command.            |

## Deployment

The project is suitable for deployment on **Vercel**.

### Deploy to Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Keep the framework preset as **Next.js**.
4. Install command: `npm install`
5. Build command: `npm run build`
6. Output directory: `.next`
7. Deploy.

Live deployment:

```text
https://inception23.vercel.app
```

## Recommended Improvements

The project already has a strong visual foundation. These improvements would make it cleaner and more production-ready:

* Remove generated build artifacts such as `.next/` and `tsconfig.tsbuildinfo` from version control.
* Add `.next/` and `tsconfig.tsbuildinfo` to `.gitignore` if they are not already ignored.
* Replace placeholder Unsplash/team images with real branded assets.
* Connect the inquiry form to an API route, email service, or CRM.
* Add real publication pages for the Insights section.
* Add separate pages for Services, Industries, Careers, and Contact.
* Add SEO metadata for Open Graph and Twitter cards.
* Add a sitemap and robots configuration.
* Add accessibility testing for motion-heavy sections.
* Add form validation and submission feedback.
* Add unit or component tests for shared UI and state behavior.

## Environment Variables

The current project does not require environment variables for local development.

If the inquiry form is connected to a backend or email provider later, consider adding values such as:

```env
NEXT_PUBLIC_SITE_URL=https://inception23.vercel.app
CONTACT_EMAIL=example@domain.com
EMAIL_SERVICE_API_KEY=your_api_key_here
```

## Browser Support

This project targets modern browsers that support current React, Next.js, CSS, and WebGL features.

For the best experience, use:

* Google Chrome
* Microsoft Edge
* Firefox
* Safari

## Performance Notes

Because the project uses animations, 3D visuals, remote images, and Lottie assets, performance should be monitored carefully. The code already includes mobile/reduced-motion checks in several sections, which is helpful for improving usability on smaller devices.

For production optimization, consider:

* Compressing Lottie files
* Replacing heavy remote images with optimized local assets
* Using `next/image` wherever possible
* Lazy-loading visual sections below the fold
* Testing Lighthouse performance on mobile

## Contributing

Contributions are welcome.

To contribute:

```bash
git checkout -b feature/your-feature-name
```

Make your changes, then commit:

```bash
git commit -m "Add your feature"
```

Push your branch:

```bash
git push origin feature/your-feature-name
```

Open a pull request for review.

## Author

Developed by **Shabbin Hossain**.

GitHub: [@Shabbin](https://github.com/Shabbin)

## License

No license file is currently visible in this repository. If this project is intended to be open source, add a license such as MIT, Apache-2.0, or GPL depending on how you want others to use it.

---

<p align="center">
  Built for strategic clarity, enterprise confidence, and digital transformation.
</p>
