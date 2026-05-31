# AitoTech — AI Automation Agency

Professional Next.js website with glassmorphism UI, Framer Motion animations, Bento grid services, and serverless contact form.

## Tech Stack

- **Next.js 15** (App Router, React 19)
- **Tailwind CSS** — dark theme, glass utilities
- **Framer Motion** — scroll & entrance animations
- **Supabase** — Postgres database, Auth, admin panel & CMS
- **API Route** — `/api/contact` → stores leads in Supabase (+ optional email)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, animated stats, Bento services, why choose us |
| `/services` | Services overview (Bento grid, DB-backed) |
| `/services/[slug]` | Individual service detail (DB-backed) |
| `/about` | Founder vision & company values |
| `/contact` | Contact form (saves to database) |
| `/admin` | **Protected** dashboard — view & manage leads |
| `/admin/services` | **Protected** CMS — create / edit / delete services |
| `/admin/login` | Admin login (Supabase Auth) |

## Getting Started

```bash
npm install
cp .env.example .env.local
# Fill in your Supabase keys (see Supabase setup below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> The site works **without** Supabase too — services fall back to `data/siteContent.ts`
> and the admin panel shows a setup notice. Add Supabase to unlock the database, leads,
> login, and CMS.

## Supabase setup (database + admin + CMS)

1. **Create a project** at [supabase.com](https://supabase.com) (free tier).
2. **Run the schema:** Dashboard → **SQL Editor** → New query → paste the contents of
   [`supabase/schema.sql`](supabase/schema.sql) → **Run**. This creates the `leads` and
   `services` tables (with row-level security) and seeds the initial services.
3. **Copy your keys:** Dashboard → **Project Settings → API**. Add them to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_public_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

4. **Create the admin user:** Dashboard → **Authentication → Users → Add user**
   (enter your email + password, tick *Auto Confirm*). Log in at `/admin/login`.

### Contact form email alerts (optional)

Leads are always saved to Supabase. To *also* get an email on each submission, add a
Formspree endpoint (or EmailJS vars) to `.env.local`:

```env
FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

In **development**, submissions log to the console if nothing is configured.

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout, fonts, Header/Footer
│   ├── page.tsx                # Home (fetches services from DB)
│   ├── globals.css
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   ├── services/[slug]/page.tsx
│   ├── api/contact/route.ts    # Saves lead to Supabase (+ optional email)
│   └── admin/                  # Protected admin area
│       ├── login/page.tsx      # Supabase Auth login
│       ├── page.tsx            # Leads dashboard
│       ├── actions.ts          # Server actions (CRUD)
│       └── services/           # Services CMS (new / edit / list)
├── components/ ...
├── lib/
│   ├── services.ts             # Service data layer (DB + static fallback)
│   └── supabase/               # Browser, server & middleware clients
├── middleware.ts               # Auth session refresh + /admin guard
├── supabase/schema.sql         # Database schema — run this in Supabase
└── data/siteContent.ts         # Static copy & fallback content
```

## Deploy

### Vercel (recommended)

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Add **Environment Variables** (Settings → Environment Variables):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `FORMSPREE_ENDPOINT` *(optional)*
4. Deploy. Re-deploy after adding/changing env vars.

### AWS Amplify

1. Connect GitHub repo in AWS Amplify Console
2. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `.next` (Amplify auto-detects Next.js SSR)
3. Add the same environment variables as above
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
