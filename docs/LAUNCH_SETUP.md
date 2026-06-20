# Aksh Launch — Aapko kya karna hai (inch by inch)

Repo local path: **`C:\Users\ujjwa\Aitotech-website`**  
GitHub: **https://github.com/ujjwal-coder211/Aitotech**

---

## PART A — Maine jo kar diya (Git push)

- Full **dark** Aksh landing: `/aksh`
- **Waitlist** form + API
- **SEO**: sitemap, robots, canonical, Open Graph, Twitter cards
- **AEO**: FAQ section, JSON-LD (SoftwareApplication + FAQPage), `public/llms.txt`
- OG image: `/images/og-aksh.svg`
- Admin waitlist: `/admin/waitlist`

---

## PART B — Aapko karna hai (step by step)

### Step 1: Repo laptop par (agar nahi hai)

```powershell
cd C:\Users\ujjwa
git clone https://github.com/ujjwal-coder211/Aitotech.git Aitotech-website
cd Aitotech-website
git pull origin main
```

### Step 2: Local preview

```powershell
npm install
copy .env.example .env.local
npm run dev
```

Browser:
- http://localhost:3000/aksh
- http://localhost:3000/sitemap.xml
- http://localhost:3000/robots.txt
- http://localhost:3000/llms.txt

### Step 3: Supabase (waitlist save — zaroori)

1. https://supabase.com → apna project kholo (ya naya banao)
2. **SQL Editor** → `supabase/schema.sql` poora paste → **Run**  
   (naya table: `aksh_waitlist`)
3. **Settings → API** se keys copy karo
4. `.env.local` mein daalo:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. `/aksh` par form test karo → `/admin/waitlist` par entry dikhe

### Step 4: Admin login

1. Supabase → **Authentication → Users → Add user** (email + password, Auto Confirm ✓)
2. http://localhost:3000/admin/login se login
3. **Aksh Waitlist** tab check karo

### Step 5: Vercel deploy (live website)

1. https://vercel.com → **Import** → repo `ujjwal-coder211/Aitotech`
2. **Environment Variables** (Production):

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://aitotech.in` |
| `NEXT_PUBLIC_SUPABASE_URL` | (Supabase URL) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | (anon key) |
| `SUPABASE_SERVICE_ROLE_KEY` | (service role) |
| `FORMSPREE_ENDPOINT` | optional |

3. **Deploy** dabao
4. Deploy ke baad test:
   - `https://YOUR.vercel.app/aksh`
   - Waitlist submit

### Step 6: Domain `aitotech.in` connect

1. Vercel → Project → **Settings → Domains**
2. Add: `aitotech.in` aur `www.aitotech.in`
3. DNS (domain registrar par — GoDaddy/Namecheap/etc.):

| Type | Name | Value |
|------|------|--------|
| A | @ | `76.76.21.21` (Vercel IP — dashboard par exact dikhega) |
| CNAME | www | `cname.vercel-dns.com` |

4. Wait 5–30 min → https://aitotech.in/aksh open karo

### Step 7: SEO (Google Search Console)

1. https://search.google.com/search-console
2. **Add property** → `https://aitotech.in`
3. Verify (HTML tag ya DNS — Vercel env mein optional):

```env
GOOGLE_SITE_VERIFICATION=your_code_from_google
```

4. **Sitemaps** → submit: `https://aitotech.in/sitemap.xml`
5. **URL Inspection** → `https://aitotech.in/aksh` → Request indexing

### Step 8: AEO (AI search / answer engines)

Already done in code:
- FAQ on page + JSON-LD
- `https://aitotech.in/llms.txt`

Optional:
- Bing Webmaster Tools → same sitemap submit
- LinkedIn / Twitter par `/aksh` link share (social signals)

### Step 9: Baad mein — Aksh product live (E2E)

Jab `Saas` repo E2E par deploy ho:
- `/aksh` par button add: **Open Aksh Studio** → `https://api.aksh.aitotech.in/web/studio/`
- Waitlist emails se early access bhejo

Product repo: **https://github.com/ujjwal-coder211/Saas**

---

## PART D — Apna photo + social links

### Founder photo (header + About page)

1. Apni photo ko **`public/images/founder.jpg`** naam se save karo (square photo best — 400×400 ya 800×800)
2. **`data/siteContent.ts`** mein update karo:
   ```ts
   founder: { photo: '/images/founder.jpg', ... }
   images: { founder: '/images/founder.jpg', ... }
   ```
3. `git add public/images/founder.jpg` → commit → push → Vercel auto-deploy

Abhi placeholder SVG hai — jab tak photo nahi, initials dikhenge.

### Social links (Instagram, Facebook, X, LinkedIn, Discord, YouTube, GitHub)

1. File kholo: **`data/siteContent.ts`** → `site.social`
2. Har platform ki **poori URL** paste karo (khali chhodo = icon grey, not clickable):

```ts
social: {
  instagram: 'https://instagram.com/YOUR_HANDLE',
  facebook: 'https://facebook.com/YOUR_PAGE',
  x: 'https://x.com/YOUR_HANDLE',
  linkedin: 'https://linkedin.com/in/YOUR_PROFILE',
  discord: 'https://discord.gg/YOUR_INVITE',
  youtube: 'https://youtube.com/@YOUR_CHANNEL',
  github: 'https://github.com/ujjwal-coder211',
},
```

3. Save → commit → push. Footer aur site par sab clickable ho jayega.

---

## PART C — Quick checklist

- [ ] `git pull` on Aitotech-website
- [ ] Supabase schema run (`aksh_waitlist`)
- [ ] `.env.local` keys
- [ ] Local waitlist test
- [ ] Vercel deploy + env vars
- [ ] Domain DNS → aitotech.in
- [ ] Google Search Console + sitemap
- [ ] Waitlist entries `/admin/waitlist` monitor
- [ ] Founder photo `public/images/founder.jpg`
- [ ] Social URLs in `siteContent.ts`

---

## Help

| Problem | Fix |
|---------|-----|
| Waitlist 503 | Supabase env missing |
| Admin empty | SQL schema not run |
| Wrong OG image URL | Set `NEXT_PUBLIC_SITE_URL=https://aitotech.in` on Vercel |
| Dark page not loading | Hard refresh Ctrl+Shift+R |

Email: info@aitotech.in
