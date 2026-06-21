# AitoTech website on E2E Networks (leave Vercel)

Deploy **aitotech.in** on the same E2E VM as Aksh — India hosting, no Vercel Pro.

---

## Will it work?

| Question | Answer |
|----------|--------|
| Next.js on E2E? | **Yes** — Docker + Node |
| Waitlist / Supabase? | **Yes** — same Supabase keys in `.env` |
| API routes (`/api/contact`, `/api/aksh-waitlist`)? | **Yes** — run in container |
| Vercel needed? | **No** — point DNS to E2E |
| Same VM as Aksh? | **Yes** — recommended (save cost) |

**Supabase** stays on supabase.com (database) — that is normal. Your **website + Aksh app** run on E2E India VM.

---

## Before E2E dashboard (your screenshot)

1. Click **Complete Setup** — profile finish karo  
2. Click **Add Credits** — Infra Credits add karo (0 credits = kuch start nahi hoga)  
3. **Create Node** — Ubuntu 22.04 VM (4 GB RAM minimum for website + Aksh)  
4. Region: **Delhi NCR** best for Aksh docs; **Chennai** bhi chalega  

---

## One VM — both apps

```
                    ┌─────────────────────────┐
   aitotech.in ───► │ nginx (443)             │
                    │   ├─ /  → website :3000 │
   api.aksh... ───► │   └─ /  → Aksh API :8000│
                    └─────────────────────────┘
```

---

## Step 1 — Clone both repos on VM

```bash
ssh root@YOUR_VM_IP
apt-get update && apt-get install -y git curl
curl -fsSL https://get.docker.com | sh
apt-get install -y docker-compose-plugin nginx certbot python3-certbot-nginx

mkdir -p /opt/aitotech
cd /opt/aitotech
git clone https://github.com/ujjwal-coder211/Aitotech.git website
git clone https://github.com/ujjwal-coder211/Saas.git aksh
```

---

## Step 2 — Website env

```bash
cd /opt/aitotech/website
cp .env.production.example .env
nano .env
```

Fill Supabase keys (same as Vercel had):

```env
NEXT_PUBLIC_SITE_URL=https://aitotech.in
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
WEBSITE_HTTP_PORT=3000
```

Build:

```bash
docker compose -f docker-compose.prod.yml up -d --build
curl http://127.0.0.1:3000/
```

---

## Step 3 — Aksh env + run

```bash
cd /opt/aitotech/aksh
cp .env.production.example .env
nano .env
docker compose -f docker-compose.prod.yml up -d --build
curl http://127.0.0.1:8000/health
```

See also: `aksh/docs/E2E_DEPLOY_INCH_BY_INCH.md`

---

## Step 4 — nginx (both domains)

```bash
nano /etc/nginx/sites-available/aitotech
```

```nginx
# Marketing website
server {
    listen 80;
    server_name aitotech.in www.aitotech.in;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Aksh API + Studio
server {
    listen 80;
    server_name api.aksh.aitotech.in;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
ln -s /etc/nginx/sites-available/aitotech /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
certbot --nginx -d aitotech.in -d www.aitotech.in -d api.aksh.aitotech.in
```

---

## Step 5 — DNS (registrar)

Remove Vercel DNS. Point to **E2E VM IP**:

| Type | Name | Value |
|------|------|-------|
| A | `@` | YOUR_VM_IP |
| A | `www` | YOUR_VM_IP |
| A | `api.aksh` | YOUR_VM_IP |

Wait 5–30 min. Test:

```bash
curl -I https://aitotech.in
curl https://api.aksh.aitotech.in/health
```

---

## Step 6 — Turn off Vercel

1. Vercel project → Settings → Domains → remove `aitotech.in`  
2. Optional: delete Vercel project (GitHub repo stays)  

No Vercel Pro needed.

---

## Update after code push

```bash
cd /opt/aitotech/website && git pull && docker compose -f docker-compose.prod.yml up -d --build
cd /opt/aitotech/aksh && git pull && docker compose -f docker-compose.prod.yml up -d --build
```

---

## Monthly cost (rough)

| Item | E2E |
|------|-----|
| 1 VM (4–8 GB) | Infra credits |
| Supabase free tier | ₹0 |
| OpenRouter API | pay per use |
| Vercel | **₹0** (cancel) |

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Dashboard says 0 credits | Add Infra Credits first |
| Complete Setup banner | Finish KYC/profile |
| Website build fails | Check `docker compose logs website` |
| Waitlist 503 | Supabase env in website `.env` |
| Old Vercel site still shows | DNS cache — wait or flush DNS |
