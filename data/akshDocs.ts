/** Aksh documentation — synced with /aksh launch & press kit (Cursor alternative, India) */

export type DocSection = {
  id: string;
  title: string;
  body?: string;
  items?: string[];
  code?: string;
  note?: string;
};

export type DocPage = {
  slug: string;
  title: string;
  description: string;
  badge?: string;
  sections: DocSection[];
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
};

export const docsHub = {
  eyebrow: 'Documentation',
  title: 'Aksh Docs',
  headline: 'India ka Cursor alternative — poori guide',
  description:
    'Aksh wahi kaam karta hai jo Cursor — AI se code likhwana, debug, apps banana. Farq: browser IDE (Aksh Studio), Hinglish, cloud projects, data India (E2E). Neeche har topic ki alag guide hai — install se API tak.',
  intro:
    'Ye docs public launch ke liye likhi gayi hain. Developer ho, student ho, ya media — pehle Getting Started padho. Self-host chahiye to Installation. Cursor desktop rakhte ho to Cursor Connect. Har page par step-by-step detail hai.',
  quickLinks: [
    {
      slug: 'getting-started',
      title: 'Getting Started',
      desc: 'Waitlist → account → Aksh Studio → Omni. Download optional. Cursor jaisa flow, browser mein.',
    },
    {
      slug: 'installation',
      title: 'Installation (Self-host)',
      desc: 'Git clone, Docker, Postgres, .env — apne laptop ya server par poora Aksh stack chalao.',
    },
    {
      slug: 'cursor-connect',
      title: 'Cursor Connect',
      desc: 'Cursor desktop rakho, brain Aksh ka — Omni API, model: omni. US SaaS bill kam, India routing.',
    },
    {
      slug: 'omni-memory',
      title: 'Omni Memory',
      desc: 'Har thread alag yaad — project context, chat history. Cursor chat se zyada persistent.',
    },
    {
      slug: 'cloud-projects',
      title: 'Cloud Projects',
      desc: 'Zip upload, Monaco editor, cloud save. Local heavy install nahi — thin client IDE.',
    },
    {
      slug: 'api',
      title: 'API Reference',
      desc: 'Omni chat, OpenAI-compatible endpoint, threads, projects — integrate karo apne app mein.',
    },
  ],
  compareNote:
    'Cursor = desktop IDE + AI (US SaaS). Aksh = browser IDE + Omni + India cloud. Dono ek saath bhi: Cursor UI + Omni API.',
  links: [
    { href: '/aksh', label: 'Launch page & waitlist' },
    { href: '/aksh/press', label: 'Press kit (Indian media)' },
    { href: '/docs/getting-started', label: 'Start building →' },
  ],
} as const;

export const akshDocPages: DocPage[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started with Aksh',
    description:
      'India ka Cursor alternative browser mein chalao. 3 steps: waitlist/account, Aksh Studio kholo, Omni se Hinglish ya English mein code banwao. Download ki zaroorat nahi.',
    badge: 'Start here · No download',
    sections: [
      {
        id: 'what',
        title: 'Aksh kya hai (aur Cursor se farq)',
        body:
          'Aksh AitoTech ka AI coding platform hai — India ke developers ke liye Cursor-class experience: AI chat, code generation, multi-file edits, app builds. Cursor ek desktop app hai (VS Code fork) jo mostly US cloud use karta hai. Aksh browser-first hai: Aksh Studio poora IDE chrome mein, Omni ek hi AI brain, projects cloud par save, production target E2E Networks India.',
        items: [
          'Same job as Cursor: likho, refactor, debug, ship',
          'Different: Hinglish native, 4GB RAM OK, data India, no model dropdown — sirf Omni',
          'Optional: Cursor desktop + Omni API (same brain as Studio)',
        ],
      },
      {
        id: 'need',
        title: 'Kya chahiye',
        items: [
          'Browser: Chrome, Edge, ya Firefox (latest)',
          'Internet — AI aur cloud projects ke liye',
          'Waitlist / account (pre-launch: aitotech.in/aksh#waitlist)',
          'Optional: Cursor IDE agar desktop workflow pasand ho',
        ],
      },
      {
        id: 'step1',
        title: 'Step 1 — Waitlist ya account',
        body: 'Abhi product pre-launch hai. Pehle waitlist join karo — launch par early Studio beta milega.',
        items: [
          'Kholo: https://aitotech.in/aksh#waitlist',
          'Naam, email, role (developer / student / founder) bharo',
          'Live hone par: /web/dashboard/ par signup → API key copy (ek baar dikhegi — save karo)',
        ],
      },
      {
        id: 'step2',
        title: 'Step 2 — Aksh Studio (browser IDE)',
        body: 'Studio wahi jagah hai jahan Cursor jaisa kaam hoga — par browser tab mein.',
        items: [
          'URL: /web/studio/ (local dev: http://127.0.0.1:8000/web/studio/)',
          'Settings → API key paste → Save',
          'New Project (blank) ya Upload zip (existing code)',
          'Left: file tree + threads · Center: Monaco editor · Right: Omni chat',
        ],
      },
      {
        id: 'step3',
        title: 'Step 3 — Omni se build karo',
        body: 'Omni user ko ek hi AI dikhta hai. Hinglish ya English — dono chalenge:',
        code: `Examples:
"Mujhe React mein todo app banao"
"Login page add karo aur bug fix karo"
"Poori project ko TypeScript mein convert karo"`,
        note: 'Omni files create/edit karega, thread memory on rahegi. Agla doc: Omni Memory.',
      },
      {
        id: 'cursor-path',
        title: 'Alternate path — Cursor desktop',
        body: 'Agar tum Cursor UI pasand karte ho, backend Aksh ka Omni use karo — model name hamesha omni.',
        note: 'Poori guide: /docs/cursor-connect',
      },
      {
        id: 'help',
        title: 'Agla kya padhein',
        items: [
          'Self-host: /docs/installation',
          'Cursor + Omni: /docs/cursor-connect',
          'API integrate: /docs/api',
          'Media copy: /aksh/press',
        ],
      },
    ],
    next: { slug: 'installation', title: 'Installation' },
  },
  {
    slug: 'installation',
    title: 'Installation — Self-host Aksh',
    description:
      'Apne laptop ya India server par Aksh stack install karo: Python, Docker, Postgres, env keys. Operators aur advanced developers ke liye — production E2E Networks par deploy.',
    badge: 'Developers & DevOps',
    sections: [
      {
        id: 'when',
        title: 'Kab install karna hai',
        body:
          'End users ko install ki zaroorat nahi — wo browser se Aksh Studio use karenge. Ye guide unke liye hai jo stack khud chalana chahte hain: local dev, private VPC, ya E2E par production deploy.',
      },
      {
        id: 'req',
        title: 'System requirements',
        items: [
          'OS: Windows 10+, macOS, ya Linux',
          'Python 3.11+',
          'Docker Desktop + Docker Compose (recommended)',
          'PostgreSQL 15+ (Docker se auto ya apna instance)',
          'Redis optional (rate limiting)',
          'Git',
          'OpenRouter / provider API key (Omni multi-brain routing)',
        ],
      },
      {
        id: 'clone',
        title: 'Step 1 — Source code',
        body: 'Official product repo (Aksh + Omni + Studio):',
        code: `git clone https://github.com/ujjwal-coder211/Saas.git
cd Saas

# Windows
python -m venv .venv
.venv\\Scripts\\activate

# macOS / Linux
python3 -m venv .venv
source .venv/bin/activate

pip install -r requirements.txt`,
      },
      {
        id: 'env',
        title: 'Step 2 — Environment (.env)',
        body: 'Root par .env.example copy karke .env banao. Minimum zaroori keys:',
        code: `DATABASE_URL=postgresql://postgres:postgres@localhost:5432/aksh
SAAS_ALLOW_PUBLIC_SIGNUP=true
JWT_SECRET=change-me-long-random-string-min-32-chars
OPENROUTER_API_KEY=sk-or-v1-...

# Optional local
REDIS_URL=redis://localhost:6379/0`,
        note: 'Kabhi bhi .env Git par commit mat karo.',
      },
      {
        id: 'docker',
        title: 'Step 3 — Database (Docker)',
        code: `docker compose up -d
python scripts/init_db.py
python scripts/verify_setup.py`,
        body: 'verify_setup.py PASS hona chahiye — schema, routers, deps check karta hai.',
      },
      {
        id: 'run',
        title: 'Step 4 — Server start',
        code: `uvicorn neuralrouter.main:app --host 0.0.0.0 --port 8000 --reload`,
        items: [
          'Landing: http://127.0.0.1:8000/web/index.html',
          'Studio: http://127.0.0.1:8000/web/studio/',
          'Dashboard: http://127.0.0.1:8000/web/dashboard/',
          'Docs (product): http://127.0.0.1:8000/web/docs/',
        ],
      },
      {
        id: 'prod',
        title: 'Step 5 — Production (India / E2E Networks)',
        body:
          'Public Aksh production 100% E2E Networks target: Delhi NCR API + Postgres, Object Storage, Chennai GPU inference. Mumbai DC avoid karo (migration). Poora runbook: Saas repo `docs/E2E_DEPLOY.md` — typo mat karo, file name E2E hai.',
        items: [
          'TLS: api.aksh.aitotech.in',
          'Website waitlist: aitotech.in/aksh → product link baad mein',
          'IndiaAI GPU credits optional — compute still E2E',
        ],
      },
      {
        id: 'trouble',
        title: 'Common issues',
        items: [
          '503 / DB error → DATABASE_URL check, docker compose running, init_db.py run kiya?',
          'Omni no reply → OPENROUTER_API_KEY valid?',
          'multipart upload fail → pip install python-multipart',
        ],
      },
    ],
    prev: { slug: 'getting-started', title: 'Getting Started' },
    next: { slug: 'cursor-connect', title: 'Cursor Connect' },
  },
  {
    slug: 'cursor-connect',
    title: 'Cursor Connect — Omni API',
    description:
      'Cursor desktop rakho, AI brain Aksh ka. India routing, ek model (omni), Hinglish backend. Cursor alternative nahi chhodna — hybrid workflow.',
    badge: 'Cursor users',
    sections: [
      {
        id: 'why',
        title: 'Kyun connect karein',
        body:
          'Bahut log Cursor UI se attached hain — theek hai. Aksh ka Omni same capabilities deta hai: code complete, edit, explain, Hinglish. Base URL Aksh par point karo — USD Cursor subscription ke alawa ya uske saath India-first stack use karo.',
      },
      {
        id: 'steps',
        title: 'Setup (step-by-step)',
        items: [
          '1. Aksh dashboard se API key lo (/web/dashboard/)',
          '2. Cursor → Settings → Models → Add OpenAI-compatible provider',
          '3. Base URL (production): https://api.aksh.aitotech.in/v1',
          '4. Base URL (local): http://127.0.0.1:8000/v1',
          '5. API Key: dashboard wali key paste karo',
          '6. Model name: omni (required) — auto bhi chalega same routing',
          '7. Cursor chat / Composer mein omni select karo',
        ],
      },
      {
        id: 'vs-studio',
        title: 'Cursor vs Aksh Studio',
        body:
          'Cursor Connect = Cursor UI + Omni backend. Aksh Studio = poora IDE browser mein + Omni — Cursor alternative without desktop. Dono same Omni memory threads share nahi karte (abhi alag clients).',
      },
      {
        id: 'single-face',
        title: 'Sirf Omni dikhega',
        body: 'Public API par model: omni. Andar NeuralRouter expert models chunta hai — user ko Claude/GPT dropdown nahi.',
      },
      {
        id: 'test',
        title: 'Verify — curl test',
        code: `curl -X POST http://127.0.0.1:8000/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "omni",
    "messages": [{"role": "user", "content": "Hello Omni"}]
  }'`,
      },
      {
        id: 'trouble',
        title: 'Troubleshooting',
        items: [
          '401 → API key galat ya expire',
          '404 on /v1 → server URL check (trailing slash mat do base par)',
          'Model not found → model name exactly omni likho',
        ],
      },
    ],
    prev: { slug: 'installation', title: 'Installation' },
    next: { slug: 'omni-memory', title: 'Omni Memory' },
  },
  {
    slug: 'omni-memory',
    title: 'Omni Memory',
    description:
      'Har user, har thread alag persistent context — jaise Cursor ki chat history, par project-linked aur Postgres-backed. Naya thread = fresh; purana = poori coding conversation wapas.',
    badge: 'Core feature',
    sections: [
      {
        id: 'problem',
        title: 'Problem kya solve karta hai',
        body:
          'Bina memory ke har message naya session lagta hai — AI bhool jata hai tumne kya banaya. Omni Memory har thread ko alag conversation store karta hai taaki "ab is file mein bug fix karo" ka context rahe.',
      },
      {
        id: 'what',
        title: 'Kya hai Omni Memory',
        body: 'Database (Postgres) mein chat_threads + chat_messages. Har logged-in user apne threads dekhta hai — doosre user ka data nahi.',
      },
      {
        id: 'studio',
        title: 'Aksh Studio mein use',
        items: [
          'Left panel → Threads list',
          '"New Thread" → naya context (naya feature / naya bug)',
          'Purana thread click → saari past messages Omni ko feed hoti hain',
          'Thread name auto ya manual — project ke hisaab se organize karo',
        ],
      },
      {
        id: 'api',
        title: 'API use',
        body: 'Pehle thread banao, phar har chat mein thread_id bhejo:',
        code: `# Create thread
POST /api/threads
Authorization: Bearer YOUR_KEY
{"title": "Todo app"}

# Chat with memory
POST /v1/chat
{"message": "Add dark mode", "thread_id": "uuid-here", "model": "omni"}`,
      },
      {
        id: 'cursor',
        title: 'Cursor Connect + memory',
        body: 'Cursor client abhi apna thread manage karta hai. Full Omni Memory Studio ya direct API se best milegi. Roadmap: unified thread across clients.',
      },
    ],
    prev: { slug: 'cursor-connect', title: 'Cursor Connect' },
    next: { slug: 'cloud-projects', title: 'Cloud Projects' },
  },
  {
    slug: 'cloud-projects',
    title: 'Cloud Projects',
    description:
      'Code server par — browser se edit. Cursor jaisa local folder nahi; zip upload, Monaco, Omni edits, cloud save. Tier-2 India laptops ke liye designed.',
    badge: 'Thin client',
    sections: [
      {
        id: 'why',
        title: 'Kyoon cloud projects',
        body:
          'Cursor local disk par heavy repo rakhta hai. Aksh thin-client: UI browser mein, files cloud storage par. Cyber café, college lab, 4GB RAM — Chrome kholo, kaam shuru.',
      },
      {
        id: 'create',
        title: 'Naya project',
        items: [
          'Studio → New Project → naam do',
          'Empty template ya starter files Omni se generate karwao',
          'Files automatically cloud par persist (logged-in user)',
        ],
      },
      {
        id: 'upload',
        title: 'Existing code upload',
        items: [
          'Studio → Upload zip',
          'Max size limits deploy par set honge — dev mein reasonable zip',
          'Extract → file tree left panel',
          'Omni se edit karwao — save cloud par',
        ],
      },
      {
        id: 'edit',
        title: 'Edit workflow',
        items: [
          'Monaco editor — syntax highlight, multi-tab',
          'Manual edit ya Omni command: "index.html mein navbar add karo"',
          'Preview tab — static HTML / future dev server',
        ],
      },
      {
        id: 'api',
        title: 'Projects API',
        code: `GET  /api/projects
POST /api/projects          {"name": "my-app"}
POST /api/projects/{id}/upload   (multipart zip)`,
      },
    ],
    prev: { slug: 'omni-memory', title: 'Omni Memory' },
    next: { slug: 'api', title: 'API Reference' },
  },
  {
    slug: 'api',
    title: 'API Reference',
    description:
      'Aksh public HTTP API — Omni chat, OpenAI-compatible layer (Cursor/tools), threads, projects. Bearer token. India-hosted production base URL: api.aksh.aitotech.in.',
    badge: 'Integrators',
    sections: [
      {
        id: 'base',
        title: 'Base URLs',
        items: [
          'Production (target): https://api.aksh.aitotech.in',
          'Local dev: http://127.0.0.1:8000',
          'OpenAI-compatible path: /v1/chat/completions',
          'Native chat: /v1/chat',
        ],
      },
      {
        id: 'auth',
        title: 'Authentication',
        body: 'Dashboard se API key. Har request par header:',
        code: `Authorization: Bearer aksh_live_xxxx`,
        note: 'Key kabhi frontend public repo mein mat daalo — server-side ya Studio settings only.',
      },
      {
        id: 'chat',
        title: 'POST /v1/chat — Native Omni',
        code: `POST /v1/chat
Content-Type: application/json
Authorization: Bearer YOUR_KEY

{
  "message": "Build a landing page in HTML",
  "model": "omni",
  "search": "auto",
  "thread_id": "optional-uuid"
}

Response: reply text + brain_used: "omni" (public face)`,
      },
      {
        id: 'openai',
        title: 'POST /v1/chat/completions — OpenAI compatible',
        body: 'Cursor, LangChain, custom tools — standard format:',
        code: `POST /v1/chat/completions
{
  "model": "omni",
  "messages": [
    {"role": "system", "content": "You are a helpful coder."},
    {"role": "user", "content": "Write a Python hello world"}
  ]
}`,
      },
      {
        id: 'threads',
        title: 'Threads API',
        items: [
          'GET /api/threads — list user threads',
          'POST /api/threads — body: {"title": "My feature"}',
          'GET /api/threads/{id}/messages — history',
        ],
      },
      {
        id: 'projects',
        title: 'Projects API',
        items: [
          'GET /api/projects — list',
          'POST /api/projects — create',
          'GET /api/projects/{id}/files — file tree',
          'POST /api/projects/{id}/upload — zip multipart',
        ],
      },
      {
        id: 'health',
        title: 'Health check',
        code: `GET /health
GET /api`,
      },
    ],
    prev: { slug: 'cloud-projects', title: 'Cloud Projects' },
  },
];

export function getDocBySlug(slug: string): DocPage | undefined {
  return akshDocPages.find((d) => d.slug === slug);
}

export function getAllDocSlugs(): string[] {
  return akshDocPages.map((d) => d.slug);
}
