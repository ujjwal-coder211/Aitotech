/** Aksh documentation — marketing site docs (product lives on api.aksh when live) */

export type DocSection = {
  id: string;
  title: string;
  body?: string;
  items?: string[];
  code?: string;
  lang?: string;
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
  description:
    'Aksh — India ka Cursor alternative. Install guide, getting started, Cursor + Omni connect, API reference. Har page par step-by-step detail jaise public software launch par hoti hai.',
  quickLinks: [
    { slug: 'getting-started', title: 'Getting Started', desc: '3 steps — account, Studio, Omni' },
    { slug: 'installation', title: 'Installation', desc: 'Self-host / local dev with Docker' },
    { slug: 'cursor-connect', title: 'Cursor Connect', desc: 'Desktop IDE + Omni API' },
    { slug: 'api', title: 'API Reference', desc: 'Chat, threads, projects endpoints' },
  ],
} as const;

export const akshDocPages: DocPage[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    description: 'Aksh shuru karo — download ki zaroorat nahi. Browser, free account, Aksh Studio.',
    badge: 'Start here',
    sections: [
      {
        id: 'overview',
        title: 'Aksh kya hai',
        body: 'Aksh AitoTech ka AI coding platform hai — India ke liye Cursor alternative. Browser mein Aksh Studio (full IDE), Omni AI (ek brain), cloud projects, thread memory. Download optional; Cursor desktop bhi Omni API se connect ho sakta hai.',
        items: [
          'Modern browser — Chrome, Edge, Firefox',
          '4GB RAM laptop OK — thin client, cloud compute',
          'Hinglish ya English — dono se code',
        ],
      },
      {
        id: 'step1',
        title: 'Step 1 — Account banao',
        items: [
          'aitotech.in/aksh par waitlist join karo (pre-launch) ya live hone par Start Free',
          'Dashboard (/web/dashboard/) par signup — email + password',
          'API key copy karo — ek baar dikhegi, safe jagah save karo',
        ],
      },
      {
        id: 'step2',
        title: 'Step 2 — Aksh Studio kholo',
        items: [
          'Browser mein /web/studio/ open karo',
          'Settings → API key paste → Save',
          'New Project ya Upload zip (cloud account ke saath)',
        ],
      },
      {
        id: 'step3',
        title: 'Step 3 — Omni se baat karo',
        body: 'Chat panel mein Hinglish ya English mein likho:',
        code: 'Mujhe ek todo app banao React mein',
      },
      {
        id: 'cursor',
        title: 'Cursor users',
        body: 'Desktop par Cursor use karte ho? Omni ko OpenAI-compatible endpoint se connect karo.',
        note: 'Full guide: Cursor Connect doc',
      },
    ],
    next: { slug: 'installation', title: 'Installation' },
  },
  {
    slug: 'installation',
    title: 'Installation (Self-host)',
    description: 'Apne server par Aksh stack chalana — Docker, Postgres, env keys. Developers & operators ke liye.',
    badge: 'Self-host',
    sections: [
      {
        id: 'req',
        title: 'Requirements',
        items: [
          'Python 3.11+, Docker & Docker Compose',
          'PostgreSQL 15+ (local ya managed)',
          'Redis (optional — rate limits)',
          'OpenRouter / provider API keys (Omni routing)',
        ],
      },
      {
        id: 'clone',
        title: 'Step 1 — Repo clone',
        code: `git clone https://github.com/ujjwal-coder211/Saas.git
cd Saas
python -m venv .venv
.venv\\Scripts\\activate   # Windows
pip install -r requirements.txt`,
      },
      {
        id: 'env',
        title: 'Step 2 — Environment',
        body: '.env.example copy karke .env banao. Minimum keys:',
        code: `DATABASE_URL=postgresql://user:pass@localhost:5432/aksh
SAAS_ALLOW_PUBLIC_SIGNUP=true
OPENROUTER_API_KEY=sk-or-...
JWT_SECRET=your-long-random-secret`,
      },
      {
        id: 'docker',
        title: 'Step 3 — Docker (recommended local)',
        code: `docker compose up -d
python scripts/init_db.py
python scripts/verify_setup.py`,
      },
      {
        id: 'run',
        title: 'Step 4 — Server start',
        code: `uvicorn neuralrouter.main:app --host 0.0.0.0 --port 8000 --reload`,
        note: 'Browser: http://127.0.0.1:8000/web/studio/',
      },
      {
        id: 'prod',
        title: 'Production (India)',
        body: 'Production 100% E2E Networks par — Delhi NCR API/DB, Chennai GPU, Object Storage. Full guide: Saas repo docs/E2E_DEPLOY.md',
      },
    ],
    prev: { slug: 'getting-started', title: 'Getting Started' },
    next: { slug: 'cursor-connect', title: 'Cursor Connect' },
  },
  {
    slug: 'cursor-connect',
    title: 'Cursor Connect',
    description: 'Cursor IDE ko Aksh Omni API se connect karo — model name sirf omni.',
    sections: [
      {
        id: 'steps',
        title: 'Setup',
        items: [
          'Cursor → Settings → Models → OpenAI-compatible provider add karo',
          'Base URL: https://api.aksh.aitotech.in/v1 (local: http://127.0.0.1:8000/v1)',
          'API Key: Dashboard se copy',
          'Model name: omni (ya auto — same routing)',
        ],
      },
      {
        id: 'note',
        title: 'Single face',
        body: 'User ko sirf Omni dikhega. Backend mein expert models chalte hain — dropdown nahi.',
      },
      {
        id: 'test',
        title: 'Test with curl',
        code: `curl -X POST http://127.0.0.1:8000/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"omni","messages":[{"role":"user","content":"Hello"}]}'`,
      },
    ],
    prev: { slug: 'installation', title: 'Installation' },
    next: { slug: 'omni-memory', title: 'Omni Memory' },
  },
  {
    slug: 'omni-memory',
    title: 'Omni Memory',
    description: 'Har user, har thread alag context — Postgres mein persistent chat history.',
    sections: [
      {
        id: 'what',
        title: 'Kya hai',
        body: 'Omni Memory har conversation thread ko alag rakhta hai. Naya project = naya thread. Purani chat wapas load hoti hai jab thread select karo.',
      },
      {
        id: 'studio',
        title: 'Aksh Studio mein',
        items: [
          'Left panel: Threads list',
          'New Thread → fresh context',
          'Existing thread select → poori history Omni ko milti hai',
        ],
      },
      {
        id: 'api',
        title: 'API mein',
        body: 'Chat request mein optional thread_id bhejo — same thread continue hogi.',
        code: `POST /v1/chat
{"message": "Fix the bug", "thread_id": "uuid-from-threads-api"}`,
      },
    ],
    prev: { slug: 'cursor-connect', title: 'Cursor Connect' },
    next: { slug: 'cloud-projects', title: 'Cloud Projects' },
  },
  {
    slug: 'cloud-projects',
    title: 'Cloud Projects',
    description: 'Zip upload, browser edit, cloud save — thin client design.',
    sections: [
      {
        id: 'what',
        title: 'Kya hai',
        body: 'Cloud Projects aapke code ko server par rakhte hain. Browser se edit, Omni se generate, files auto-save.',
      },
      {
        id: 'upload',
        title: 'Upload',
        items: [
          'Studio → Upload zip',
          'Existing repo ya starter template zip select karo',
          'Files tree left panel mein dikhengi',
        ],
      },
      {
        id: 'edit',
        title: 'Edit & preview',
        items: [
          'Monaco editor — syntax highlight',
          'Omni se file create/update karwao',
          'Preview tab (static / dev server jab live ho)',
        ],
      },
    ],
    prev: { slug: 'omni-memory', title: 'Omni Memory' },
    next: { slug: 'api', title: 'API Reference' },
  },
  {
    slug: 'api',
    title: 'API Reference',
    description: 'Public Aksh API — Omni chat, threads, projects. Bearer token auth.',
    sections: [
      {
        id: 'auth',
        title: 'Authentication',
        code: `Authorization: Bearer YOUR_API_KEY`,
      },
      {
        id: 'chat',
        title: 'Chat (Omni)',
        code: `POST /v1/chat
Content-Type: application/json

{
  "message": "Build a landing page",
  "model": "omni",
  "search": "auto",
  "thread_id": "optional-uuid"
}`,
      },
      {
        id: 'openai',
        title: 'OpenAI-compatible',
        body: 'Cursor / third-party tools ke liye:',
        code: `POST /v1/chat/completions
{"model": "omni", "messages": [{"role": "user", "content": "Hi"}]}`,
      },
      {
        id: 'threads',
        title: 'Threads',
        items: ['GET /api/threads — list', 'POST /api/threads — create', 'GET /api/threads/{id}/messages'],
      },
      {
        id: 'projects',
        title: 'Projects',
        items: ['GET /api/projects — list', 'POST /api/projects — create', 'POST /api/projects/{id}/upload — zip'],
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
