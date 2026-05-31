# AitoTech — AI Automation Agency

Professional Next.js website with glassmorphism UI, Framer Motion animations, Bento grid services, and serverless contact form.

## Tech Stack

- **Next.js 15** (App Router, React 19)
- **Tailwind CSS** — dark theme, glass utilities
- **Framer Motion** — scroll & entrance animations
- **API Route** — `/api/contact` → Formspree or EmailJS (no dedicated server)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, animated stats, Bento services, why choose us |
| `/services` | Services overview (Bento grid) |
| `/services/[slug]` | Data Automation, Workflow, Invoice, Custom AI |
| `/about` | Founder vision & company values |
| `/contact` | Contact form |

## Getting Started

```bash
npm install
cp .env.example .env.local
# Add FORMSPREE_ENDPOINT from https://formspree.io
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Contact form setup (Formspree — recommended)

1. Create a form at [formspree.io](https://formspree.io)
2. Copy the endpoint URL (e.g. `https://formspree.io/f/xxxxxxx`)
3. Add to `.env.local`:

```env
FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

In **development**, submissions log to the console if no env var is set.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout, fonts, Header/Footer
│   ├── page.tsx            # Home
│   ├── globals.css
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   ├── services/[slug]/page.tsx
│   └── api/contact/route.ts  # Serverless form handler
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ServiceCard.tsx
│   ├── Hero.tsx
│   ├── AnimatedStats.tsx
│   ├── ContactForm.tsx
│   └── ...
└── lib/
    └── constants.ts        # Nav, services, copy — edit here
```

## Deploy

### Vercel (recommended)

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Add `FORMSPREE_ENDPOINT` in **Environment Variables**
4. Deploy

### AWS Amplify

1. Connect GitHub repo in AWS Amplify Console
2. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `.next` (Amplify auto-detects Next.js SSR)
3. Add environment variables (`FORMSPREE_ENDPOINT`, etc.)
4. Deploy

Amplify supports Next.js SSR/API routes out of the box.

### GitHub Actions (optional)

Use Vercel or Amplify CI — no custom workflow required for standard Next.js apps.

## Customization (edit one file)

**All text, email, phone, and image paths live in:**

```
data/siteContent.ts
```

- Email: `site.email` → currently **info@aitotech.in**
- Services, hero copy, about, contact, footer — all in the same file
- Image placeholders: `images` object (add files under `public/images/`)

Legacy import `@/lib/constants` still works — it re-exports from `siteContent.ts`.

- **Colors / glass:** `tailwind.config.ts` + `app/globals.css`
- **Founder photo:** update `images.founder` in `siteContent.ts`

## License

MIT © AitoTech
