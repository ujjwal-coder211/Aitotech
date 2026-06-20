/** Aksh docs — very simple English, product-first (no competitor marketing) */

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
  title: 'Aksh docs',
  headline: 'Learn Aksh — step by step',
  description:
    'How to use Aksh. All text is in simple English. Choose a guide below.',
  intro:
    'New here? Open Getting Started first. Need your own server? Open Installation.',
  quickLinks: [
    {
      slug: 'getting-started',
      title: 'Getting started',
      desc: 'Join the waitlist, open Aksh Studio, talk to Omni. No big download.',
    },
    {
      slug: 'installation',
      title: 'Installation (self-host)',
      desc: 'Clone the repo, use Docker, set up the database. For developers and IT teams.',
    },
    {
      slug: 'cursor-connect',
      title: 'Connect a desktop editor',
      desc: 'Use Omni from a desktop coding tool. Model name: omni.',
    },
    {
      slug: 'omni-memory',
      title: 'Omni memory',
      desc: 'Each chat remembers your project. Open an old chat and Omni still knows your work.',
    },
    {
      slug: 'cloud-projects',
      title: 'Cloud projects',
      desc: 'Upload a zip, edit in the browser, save online. Works on weak laptops.',
    },
    {
      slug: 'api',
      title: 'API reference',
      desc: 'Connect your own app to Omni chat, chats, and projects.',
    },
  ],
  strengthsNote:
    'Aksh gives you a browser editor, one AI (Omni), cloud projects, chat memory, and India hosting — in one tool. Open a tab and start building.',
  links: [
    { href: '/aksh', label: 'Launch page and waitlist' },
    { href: '/aksh/press', label: 'Press kit' },
    { href: '/docs/getting-started', label: 'Start here' },
  ],
} as const;

export const akshDocPages: DocPage[] = [
  {
    slug: 'getting-started',
    title: 'Getting started with Aksh',
    description:
      'Start Aksh in 3 steps: join the waitlist, open Aksh Studio, ask Omni to write code. No big download.',
    badge: 'Start here',
    sections: [
      {
        id: 'what',
        title: 'What is Aksh?',
        body:
          'Aksh helps you write code with AI. AitoTech made it. You use Aksh Studio in Chrome or Edge. You talk to Omni — one AI only. Your files save online.',
        items: [
          'Works in the browser — no big install',
          'One AI name: Omni',
          'Files save in the cloud',
          'You can connect other coding apps through our API (see docs)',
        ],
      },
      {
        id: 'need',
        title: 'What you need',
        items: [
          'Chrome, Edge, or Firefox browser',
          'Internet',
          'Join the waitlist at aitotech.in/aksh#waitlist',
        ],
      },
      {
        id: 'step1',
        title: 'Step 1 — Join the waitlist',
        body: 'Aksh is coming soon. Join the waitlist now.',
        items: [
          'Go to aitotech.in/aksh#waitlist',
          'Enter your name and email',
          'After launch: sign up and copy your API key (save it — we show it once)',
        ],
      },
      {
        id: 'step2',
        title: 'Step 2 — Open Aksh Studio',
        body: 'Aksh Studio is where you write code in the browser.',
        items: [
          'Open the Studio page from your Aksh account',
          'Paste your API key in Settings and save',
          'Click New Project or Upload zip',
        ],
      },
      {
        id: 'step3',
        title: 'Step 3 — Ask Omni',
        body: 'Type in simple English. Omni writes and saves code.',
        code: `Examples:
"Build a todo app in React"
"Add a login page"
"Fix the bug in App.js"`,
        note: 'Omni saves files and remembers the chat. Next guide: Omni Memory.',
      },
      {
        id: 'desktop-path',
        title: 'Optional — desktop editor',
        body: 'If you already use a desktop AI coding tool, you can point it to the Omni API. Model name must be omni.',
        note: 'Full steps: /docs/cursor-connect',
      },
      {
        id: 'help',
        title: 'Read next',
        items: [
          'Run your own server: /docs/installation',
          'Desktop editor + Omni: /docs/cursor-connect',
          'Build a connection: /docs/api',
          'Press text: /aksh/press',
        ],
      },
    ],
    next: { slug: 'installation', title: 'Installation' },
  },
  {
    slug: 'installation',
    title: 'Installation — run Aksh yourself',
    description:
      'Install Aksh on your laptop or server: Python, Docker, database, and API keys. For developers and ops teams — not for normal browser users.',
    badge: 'Developers',
    sections: [
      {
        id: 'when',
        title: 'Who needs this guide?',
        body:
          'Most users only need a browser and Aksh Studio online. This guide is for people who want to run the full stack locally or on a private server.',
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
          'OpenRouter API key (powers Omni)',
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
        code: `DATABASE_URL=postgresql://postgres:postgres@localhost:5432/aksh
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
          'Public Aksh will run on E2E Networks: API and database in Delhi, GPU in Chennai. Full steps are in the Saas repo file docs/E2E_DEPLOY.md.',
        items: [
          'Domain: api.aksh.aitotech.in',
          'Waitlist site: aitotech.in/aksh',
        ],
      },
      {
        id: 'trouble',
        title: 'Common problems',
        items: [
          'Database error — check DATABASE_URL and run init_db.py',
          'Omni silent — check OPENROUTER_API_KEY',
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
      'Use Omni from a desktop coding tool that uses the same API format as OpenAI. Same AI as Aksh Studio. Model name must be omni.',
    badge: 'Optional',
    sections: [
      {
        id: 'why',
        title: 'When to use this',
        body:
          'Most people use Aksh Studio in the browser. This guide is for developers who prefer a desktop editor and want Omni as the AI backend through our API.',
      },
      {
        id: 'steps',
        title: 'Setup steps',
        items: [
          '1. Get your API key from /web/dashboard/',
          '2. In your editor: Settings → Models → Add OpenAI API provider',
          '3. Base URL (live): https://api.aksh.aitotech.in/v1',
          '4. Base URL (local): http://127.0.0.1:8000/v1',
          '5. Paste your API key',
          '6. Model name: omni (required)',
          '7. Select omni in the editor chat',
        ],
        note: 'Some desktop AI code editors support this API format. Steps may vary slightly by tool.',
      },
      {
        id: 'vs-studio',
        title: 'Desktop editor vs Aksh Studio',
        body:
          'Aksh Studio is the full editor in your browser with Omni and cloud projects. A desktop editor plus Omni API uses the same AI but keeps files local to that tool. Chat memory works best in Aksh Studio or direct API calls.',
      },
      {
        id: 'single-face',
        title: 'You only use Omni',
        body: 'Do not pick other model names. The public API uses omni. Smart engines run behind Omni automatically.',
      },
      {
        id: 'test',
        title: 'Test with curl',
        code: `curl -X POST http://127.0.0.1:8000/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"omni","messages":[{"role":"user","content":"Hello"}]}'`,
      },
      {
        id: 'trouble',
        title: 'Fix errors',
        items: [
          '401 — wrong API key',
          '404 — check base URL, no trailing slash on /v1',
          'Model not found — type omni exactly',
        ],
      },
    ],
    prev: { slug: 'installation', title: 'Installation' },
    next: { slug: 'omni-memory', title: 'Omni memory' },
  },
  {
    slug: 'omni-memory',
    title: 'Omni memory',
    description:
      'Each chat saves your history. Omni remembers what you built. New chat = fresh start.',
    badge: 'Core feature',
    sections: [
      {
        id: 'problem',
        title: 'What problem does it solve?',
        body:
          'Without memory, the AI forgets your project every time. Omni Memory stores each chat so you can say "fix the login page" and Omni still knows your files.',
      },
      {
        id: 'what',
        title: 'How it works',
        body: 'Chats save in the database. Each user only sees their own chats.',
      },
      {
        id: 'studio',
        title: 'In Aksh Studio',
        items: [
          'Left panel shows your chats',
          'New Chat — start fresh',
          'Click an old chat — Omni gets full history',
          'Name chats by feature or bug',
        ],
      },
      {
        id: 'api',
        title: 'In the API',
        code: `POST /api/threads
{"title": "My todo app"}

POST /v1/chat
{"message": "Add dark mode", "thread_id": "your-uuid", "model": "omni"}`,
      },
      {
        id: 'desktop',
        title: 'Desktop editors and memory',
        body: 'Third-party desktop tools manage their own chat history. For full Omni Memory, use Aksh Studio or the API directly.',
      },
    ],
    prev: { slug: 'cursor-connect', title: 'Connect a desktop editor' },
    next: { slug: 'cloud-projects', title: 'Cloud projects' },
  },
  {
    slug: 'cloud-projects',
    title: 'Cloud projects',
    description:
      'Your code lives on the server. Edit in the browser. Upload a zip. Omni can change files. Good for weak laptops.',
    badge: 'Light laptop',
    sections: [
      {
        id: 'why',
        title: 'Why cloud projects?',
        body:
          'Desktop tools usually keep code on your disk. Aksh keeps files online. Open a browser and start — even on a 4 GB RAM laptop.',
      },
      {
        id: 'create',
        title: 'New project',
        items: [
          'Studio → New Project → name it',
          'Ask Omni to create starter files',
          'Files auto-save when you are logged in',
        ],
      },
      {
        id: 'upload',
        title: 'Upload existing code',
        items: [
          'Studio → Upload zip',
          'Files appear in the left panel',
          'Edit by hand or ask Omni',
        ],
      },
      {
        id: 'edit',
        title: 'How to edit',
        items: [
          'Monaco editor with syntax colors',
          'Type yourself or ask Omni: "Add a navbar to index.html"',
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
    prev: { slug: 'omni-memory', title: 'Omni memory' },
    next: { slug: 'api', title: 'API reference' },
  },
  {
    slug: 'api',
    title: 'API reference',
    description:
      'HTTP API for Omni chat, chats, and projects. Use a Bearer token from your dashboard.',
    badge: 'Developers',
    sections: [
      {
        id: 'base',
        title: 'Base URLs',
        items: [
          'Live (plan): https://api.aksh.aitotech.in',
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
  "model": "omni",
  "search": "auto",
  "thread_id": "optional-uuid"
}`,
      },
      {
        id: 'openai',
        title: 'POST /v1/chat/completions',
        body: 'For tools that use the OpenAI API format:',
        code: `{
  "model": "omni",
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
  return akshDocPages.find((d) => d.slug === slug);
}

export function getAllDocSlugs(): string[] {
  return akshDocPages.map((d) => d.slug);
}
