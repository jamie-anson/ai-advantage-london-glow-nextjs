# 🗺️ Code Map & Architecture

This document serves as a guide for navigating the **AI Advantage London Glow** codebase. It outlines the project structure, key components, and integration points.

---

## 🏗️ High-Level Architecture

The project is a **Next.js 15** application (App Router) built with **React 19**, **TypeScript**, and **Tailwind CSS**. It uses **Framer Motion** for animations and **Radix UI** for accessible components.

### 🌐 Key Integration Points
- **Invite Form Webhook**: Form submissions on the `/request-invite` page are sent to a Make.com webhook:
  - `https://hook.eu2.make.com/rkaf4c5ny755iu1znhu4f7ofn6a27ib4`
- **Analytics/Pixel**: (TBD - check `src/app/layout.tsx`)

---

## 📂 Directory Structure

### 📍 `src/app` (Pages & Routing)
- `page.tsx`: The main **Home** page. It renders the `SessionPageClient`.
- `one-day-course/page.tsx`: The **One-Day Course** details page.
- `request-invite/page.tsx`: The **Request an Invite** form. Logic is in `RequestInviteClientPage.tsx`.
- `thank-you/page.tsx`: Post-submission confirmation page.
- `privacy-policy/`, `terms-of-service/`: Legal pages.
- `layout.tsx`: Root layout with `SiteHeader`, `Footer`, and global providers.
- `globals.css`: Main styling entry point, including CSS variables for Shadcn/UI components.

### 📍 `src/components` (UI & Layout)
- `sections/`: High-level page sections used across the site.
- `ui/`: Atomic, reusable components (buttons, inputs, cards, etc.), mostly powered by Radix UI.
- `AnimatedBackground.tsx`: The interactive, glowing background seen across the site.
- `CustomCursor.tsx`: Custom mouse follower logic.
- `SiteHeader.tsx`: Navigation bar with mobile menu logic.
- `Footer.tsx`: Site-wide footer.

### 📍 `src/hooks`
- `use-mobile.tsx`: Utility hook for responsive logic.
- `use-toast.ts`: Hook for triggering Radix-based toast notifications.

### 📍 `public/` (Static Assets)
- `downloads/`: PDFs and other downloadable resources (e.g., `ai_workshop_london_pitch.pdf`).
- `images/`: Local images and icons.

---

## 🎨 Design System

### ✨ Brand Colors
Defined in `tailwind.config.ts`:
- **Green**: `#C6FF4E` (The primary brand color)
- **Fuchsia**: `#C342D2`
- **Gold**: `#D4AF37`
- **Pink**: `#FFDEE2`

### 🌀 Shared Components
- **Background**: All pages generally use `<AnimatedBackground />` for the premium feel.
- **Glassmorphism**: Many containers use the `.glass-card` class (defined in `globals.css`) for the transparent, frosted look.

---

## 🛠️ Development & Deployment

### 💻 Scripts
- `npm run dev`: Start local development server on `localhost:3000`.
- `npm run build`: Build for production.
- `npm run lint`: Run ESLint checks.

### 🚀 Deployment
- Hosted on **Netlify**.
- Configuration: `netlify.toml`.

---

## 📝 Developer Notes
- **Forms**: Managed with `react-hook-form` and validated with `zod`.
- **Animations**: Prefer `framer-motion` for complex page transitions and `tailwind-animate` for simple utility-based animations.
- **Icons**: Use `lucide-react`.
