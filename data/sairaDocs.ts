/** Routely docs — very simple English, product-first (no competitor marketing) */

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
  title: 'Routely docs',
  headline: 'Learn Routely — step by step',
  description:
    'How to use Routely. All text is in simple English. Choose a guide below.',
  intro:
    'New here? Open Getting Started first. Need your own server? Open Installation.',
  quickLinks: [
    {
      slug: 'getting-started',
      title: 'Getting started',
      desc: 'Join the waitlist, try Routely in the browser, describe tasks in plain English. No big download.',
    },
    {
      slug: 'installation',
      title: 'Installation (self-host)',
      desc: 'Clone the repo, use Docker, set up the database. For developers and IT teams.',
    },
    {
      slug: 'cursor-connect',
      title: 'Connect a desktop editor',
      desc: 'Use Routely from a desktop coding tool. Model name: routely.',
    },
    {
      slug: 'omni-memory',
      title: 'Persistent memory',
      desc: 'Each chat remembers your project. Open an old chat and Routely still knows your work.',
    },
    {
      slug: 'cloud-projects',
      title: 'Cloud projects',
      desc: 'Upload a zip, edit in the browser, save online. Works on weak laptops.',
    },
    {
      slug: 'api',
      title: 'API reference',
      desc: 'Connect your own app to Routely chat, threads, and projects.',
    },
  ],
  strengthsNote:
    'Routely gives you smart model routing, persistent memory, agent workflows, and browser + desktop — in one coding tool. Open a tab and start building.',
  links: [
    { href: '/routely', label: 'Launch page and waitlist' },
    { href: '/routely/demo?tour=1', label: 'Interactive demo' },
    { href: '/docs/getting-started', label: 'Start here' },
  ],
} as const;

export const sairaDocPages: DocPage[] = [
  {
    slug: 'getting-started',
    title: 'Getting started with Routely',
    description:
      'Start Routely in 3 steps: join the waitlist, try in the browser, describe tasks in plain English. No big download.',
    badge: 'Start here',
    sections: [
      {
        id: 'what',
        title: 'What is Routely?',
        body:
          'Routely helps you write code with AI. AitoTech made it. Try in Chrome or Edge, or download for desktop. Routely picks the best free model for each task — you never choose models yourself.',
        items: [
          'Works in the browser — no big install',
          'Smart model routing — no model picker',
          'Files save in the cloud (browser) or locally (desktop)',
          'You can connect other coding apps through our API (see docs)',
        ],
      },
      {
        id: 'need',
        title: 'What you need',
        items: [
          'Chrome, Edge, or Firefox browser (or Windows for desktop)',
          'Internet',
          'Join the waitlist at aitotech.in/routely#waitlist',
        ],
      },
      {
        id: 'step1',
        title: 'Step 1 — Join the waitlist',
        body: 'Routely is in beta. Join the waitlist now.',
        items: [
          'Go to aitotech.in/routely#waitlist',
          'Enter your name and email',
          'After launch: sign up and copy your API key (save it — we show it once)',
        ],
      },
      {
        id: 'step2',
        title: 'Step 2 — Open Routely',
        body: 'Routely browser runs online. Desktop opens local folders with real git.',
        items: [
          'Browser: open app.routely.aitotech.in from your account',
          'Paste your API key in Settings and save',
          'Click New Project or Upload zip',
        ],
      },
      {
        id: 'step3',
        title: 'Step 3 — Describe your task',
        body: 'Type in simple English. Routely routes to the best free model and saves code.',
        code: `Examples:
"Build a todo app in React"
"Add a login page"
"Fix the bug in App.js"`,
        note: 'Routely saves files and remembers the chat. Next guide: Persistent memory.',
      },
      {
        id: 'desktop-path',
        title: 'Optional — desktop editor',
        body: 'If you already use a desktop AI coding tool, you can point it to the Routely API. Model name must be routely.',
        note: 'Full steps: /docs/cursor-connect',
      },
      {
        id: 'help',
        title: 'Read next',
        items: [
          'Run your own server: /docs/installation',
          'Desktop editor + Routely: /docs/cursor-connect',
          'Build a connection: /docs/api',
          'Interactive demo: /routely/demo?tour=1',
        ],
      },
    ],
    next: { slug: 'installation', title: 'Installation' },
  },
  {
    slug: 'installation',
    title: 'Installation — run Routely yourself',
    description:
      'Install Routely on your laptop or server: Python, Docker, database, and API keys. For developers and ops teams — not for normal browser users.',
    badge: 'Developers',
    sections: [
      {
        id: 'when',
        title: 'Who needs this guide?',
        body:
          'Most users only need a browser and Routely online. This guide is for people who want to run the full stack locally or on a private server.',
      },
      {
        id: 'req',
        title: 'What you need',
        items: [
          'Windows 10+, macOS, or Linux',
          'Python 3.11 or newer',
          'Docker Desktop (recommended)',
          'PostgreSQL 15+ (Docker can start it for you)',
          'Redis not required',
          'Git',
          'OpenRouter API key (powers Routely routing)',
        ],
      },
      {
        id: 'clone',
        title: 'Step 1 — Get the code',
        code: `git clone https://github.com/ujjwal-coder211/Saas.git
cd Saas

python -m venv .venv
# Windows: .venv\\Scripts\\activate
# Mac/Linux: source .venv/bin/activate

pip install -r requirements.txt`,
      },
      {
        id: 'env',
        title: 'Step 2 — Settings file (.env)',
        body: 'Copy .env.example to .env. Add at least these lines:',
        code: `DATABASE_URL=postgresql://postgres:postgres@localhost:5432/routely
SAAS_ALLOW_PUBLIC_SIGNUP=true
JWT_SECRET=use-a-long-random-string-here
OPENROUTER_API_KEY=sk-or-v1-...`,
        note: 'Never commit .env to Git.',
      },
      {
        id: 'docker',
        title: 'Step 3 — Start database',
        code: `docker compose up -d
python scripts/init_db.py
python scripts/verify_setup.py`,
        body: 'verify_setup.py should pass. It checks the database and app setup.',
      },
      {
        id: 'run',
        title: 'Step 4 — Start the server',
        code: `uvicorn neuralrouter.main:app --host 0.0.0.0 --port 8000 --reload`,
        items: [
          'Home: http://127.0.0.1:8000/web/index.html',
          'Studio: http://127.0.0.1:8000/web/studio/',
          'Dashboard: http://127.0.0.1:8000/web/dashboard/',
        ],
      },
      {
        id: 'prod',
        title: 'Step 5 — Go live in India',
        body:
          'Public Routely will run on E2E Networks: API and database in Delhi, GPU in Chennai. Full steps are in the Saas repo file docs/E2E_DEPLOY.md.',
        items: [
          'Domain: app.routely.aitotech.in',
          'Waitlist site: aitotech.in/routely',
        ],
      },
      {
        id: 'trouble',
        title: 'Common problems',
        items: [
          'Database error — check DATABASE_URL and run init_db.py',
          'No AI reply — check OPENROUTER_API_KEY',
          'Upload fails — run: pip install python-multipart',
        ],
      },
    ],
    prev: { slug: 'getting-started', title: 'Getting started' },
    next: { slug: 'cursor-connect', title: 'Connect a desktop editor' },
  },
  {
    slug: 'cursor-connect',
    title: 'Connect a desktop editor',
    description:
      'Use Routely from a desktop coding tool that uses the same API format as OpenAI. Same routing as the browser app. Model name must be routely.',
    badge: 'Optional',
    sections: [
      {
        id: 'why',
        title: 'When to use this',
        body:
          'Most people use Routely in the browser. This guide is for developers who prefer a desktop editor and want Routely as the AI backend through our API.',
      },
      {
        id: 'steps',
        title: 'Setup steps',
        items: [
          '1. Get your API key from /web/dashboard/',
          '2. In your editor: Settings → Models → Add OpenAI API provider',
          '3. Base URL (live): https://app.routely.aitotech.in/v1',
          '4. Base URL (local): http://127.0.0.1:8000/v1',
          '5. Paste your API key',
          '6. Model name: routely (required)',
          '7. Select routely in the editor chat',
        ],
        note: 'Some desktop AI code editors support this API format. Steps may vary slightly by tool.',
      },
      {
        id: 'vs-studio',
        title: 'Desktop editor vs Routely browser',
        body:
          'Routely browser is the full editor online with cloud projects. A desktop editor plus Routely API uses the same smart routing but keeps files local to that tool. Chat memory works best in Routely browser or direct API calls.',
      },
      {
        id: 'single-face',
        title: 'You only use Routely',
        body: 'Do not pick other model names. The public API uses routely. Free models are routed automatically behind the scenes.',
      },
      {
        id: 'test',
        title: 'Test with curl',
        code: `curl -X POST http://127.0.0.1:8000/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"routely","messages":[{"role":"user","content":"Hello"}]}'`,
      },
      {
        id: 'trouble',
        title: 'Fix errors',
        items: [
          '401 — wrong API key',
          '404 — check base URL, no trailing slash on /v1',
          'Model not found — type routely exactly',
        ],
      },
    ],
    prev: { slug: 'installation', title: 'Installation' },
    next: { slug: 'omni-memory', title: 'Persistent memory' },
  },
  {
    slug: 'omni-memory',
    title: 'Persistent memory',
    description:
      'Each chat saves your history. Routely remembers what you built. New chat = fresh start.',
    badge: 'Core feature',
    sections: [
      {
        id: 'problem',
        title: 'What problem does it solve?',
        body:
          'Without memory, the AI forgets your project every time. Routely stores each chat so you can say "fix the login page" and it still knows your files.',
      },
      {
        id: 'what',
        title: 'How it works',
        body: 'Chats save in the database. Each user only sees their own chats.',
      },
      {
        id: 'studio',
        title: 'In Routely browser',
        items: [
          'Left panel shows your chats',
          'New Chat — start fresh',
          'Click an old chat — Routely gets full history',
          'Name chats by feature or bug',
        ],
      },
      {
        id: 'api',
        title: 'In the API',
        code: `POST /api/threads
{"title": "My todo app"}

POST /v1/chat
{"message": "Add dark mode", "thread_id": "your-uuid", "model": "routely"}`,
      },
      {
        id: 'desktop',
        title: 'Desktop editors and memory',
        body: 'Third-party desktop tools manage their own chat history. For full Routely memory, use the browser app or the API directly.',
      },
    ],
    prev: { slug: 'cursor-connect', title: 'Connect a desktop editor' },
    next: { slug: 'cloud-projects', title: 'Cloud projects' },
  },
  {
    slug: 'cloud-projects',
    title: 'Cloud projects',
    description:
      'Your code lives on the server. Edit in the browser. Upload a zip. Routely can change files. Good for weak laptops.',
    badge: 'Light laptop',
    sections: [
      {
        id: 'why',
        title: 'Why cloud projects?',
        body:
          'Desktop tools usually keep code on your disk. Routely browser keeps files online. Open a tab and start — even on a 4 GB RAM laptop.',
      },
      {
        id: 'create',
        title: 'New project',
        items: [
          'Browser → New Project → name it',
          'Ask Routely to create starter files',
          'Files auto-save when you are logged in',
        ],
      },
      {
        id: 'upload',
        title: 'Upload existing code',
        items: [
          'Browser → Upload zip',
          'Files appear in the left panel',
          'Edit by hand or ask Routely',
        ],
      },
      {
        id: 'edit',
        title: 'How to edit',
        items: [
          'Monaco editor with syntax colors',
          'Type yourself or ask Routely: "Add a navbar to index.html"',
          'Preview tab for static pages',
        ],
      },
      {
        id: 'api',
        title: 'Projects API',
        code: `GET  /api/projects
POST /api/projects  {"name": "my-app"}
POST /api/projects/{id}/upload  (zip file)`,
      },
    ],
    prev: { slug: 'omni-memory', title: 'Persistent memory' },
    next: { slug: 'api', title: 'API reference' },
  },
  {
    slug: 'api',
    title: 'API reference',
    description:
      'HTTP API for Routely chat, threads, and projects. Use a Bearer token from your dashboard.',
    badge: 'Developers',
    sections: [
      {
        id: 'base',
        title: 'Base URLs',
        items: [
          'Live (plan): https://app.routely.aitotech.in',
          'Local: http://127.0.0.1:8000',
          'OpenAI style: /v1/chat/completions',
          'Native chat: /v1/chat',
        ],
      },
      {
        id: 'auth',
        title: 'Auth header',
        code: `Authorization: Bearer YOUR_API_KEY`,
        note: 'Never put your key in public GitHub code.',
      },
      {
        id: 'chat',
        title: 'POST /v1/chat',
        code: `{
  "message": "Build a landing page in HTML",
  "model": "routely",
  "search": "auto",
  "thread_id": "optional-uuid"
}`,
      },
      {
        id: 'openai',
        title: 'POST /v1/chat/completions',
        body: 'For tools that use the OpenAI API format:',
        code: `{
  "model": "routely",
  "messages": [{"role": "user", "content": "Hello"}]
}`,
      },
      {
        id: 'threads',
        title: 'Chats (threads)',
        items: [
          'GET /api/threads — list',
          'POST /api/threads — create',
          'GET /api/threads/{id}/messages — history',
        ],
      },
      {
        id: 'projects',
        title: 'Projects',
        items: [
          'GET /api/projects',
          'POST /api/projects',
          'POST /api/projects/{id}/upload',
        ],
      },
      {
        id: 'health',
        title: 'Health check',
        code: `GET /health`,
      },
    ],
    prev: { slug: 'cloud-projects', title: 'Cloud projects' },
  },
];

export function getDocBySlug(slug: string): DocPage | undefined {
  return sairaDocPages.find((d) => d.slug === slug);
}

export function getAllDocSlugs(): string[] {
  return sairaDocPages.map((d) => d.slug);
}
