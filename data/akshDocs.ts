/** Aksh docs — simple English, synced with /aksh launch page */

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
  headline: 'India\'s Cursor alternative — full guide',
  description:
    'Aksh does the same job as Cursor: AI helps you write code, fix bugs, and build apps. The difference: Aksh Studio runs in your browser, projects save in the cloud, and data can stay in India. Pick a guide below.',
  intro:
    'Start with Getting Started if you are new. Read Installation if you want to run Aksh on your own server. Read Cursor Connect if you use the Cursor desktop app. Every page has clear steps.',
  quickLinks: [
    {
      slug: 'getting-started',
      title: 'Getting Started',
      desc: 'Join waitlist, open Aksh Studio, talk to Omni. No big download.',
    },
    {
      slug: 'installation',
      title: 'Installation (self-host)',
      desc: 'Clone the repo, use Docker, set up the database. For developers and IT teams.',
    },
    {
      slug: 'cursor-connect',
      title: 'Cursor connect',
      desc: 'Keep Cursor on your PC. Use Omni from Aksh as the AI brain. Model name: omni.',
    },
    {
      slug: 'omni-memory',
      title: 'Omni memory',
      desc: 'Each chat thread remembers your project. Open an old thread and Omni still knows the context.',
    },
    {
      slug: 'cloud-projects',
      title: 'Cloud projects',
      desc: 'Upload a zip, edit in the browser, save online. Works on weak laptops.',
    },
    {
      slug: 'api',
      title: 'API reference',
      desc: 'Connect your own app to Omni chat, threads, and projects.',
    },
  ],
  compareNote:
    'Cursor = desktop app + AI (mostly US servers). Aksh = browser IDE + Omni + India cloud. You can use both: Cursor UI + Omni API.',
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
      'Use Aksh in your browser in 3 steps: join the waitlist, open Aksh Studio, ask Omni to write code. No large install needed.',
    badge: 'Start here',
    sections: [
      {
        id: 'what',
        title: 'What is Aksh?',
        body:
          'Aksh is an AI coding platform from AitoTech. It is built as an alternative to Cursor for India. You get AI chat, code generation, file edits, and app builds. Cursor is a desktop app. Aksh Studio runs in Chrome or Edge. Omni is the one AI you talk to. Projects save in the cloud.',
        items: [
          'Same idea as Cursor: write code with AI help',
          'Different: browser IDE, cloud save, one AI (Omni), data plan for India',
          'Optional: use Cursor desktop with Omni API',
        ],
      },
      {
        id: 'need',
        title: 'What you need',
        items: [
          'A modern browser: Chrome, Edge, or Firefox',
          'Internet connection',
          'A waitlist spot (aitotech.in/aksh#waitlist) until public launch',
          'Optional: Cursor desktop if you prefer that UI',
        ],
      },
      {
        id: 'step1',
        title: 'Step 1 — Join the waitlist',
        body: 'Aksh is in pre-launch. Join the waitlist to get early access.',
        items: [
          'Go to https://aitotech.in/aksh#waitlist',
          'Enter your name, email, and role',
          'After launch: sign up at /web/dashboard/ and copy your API key (save it — we show it once)',
        ],
      },
      {
        id: 'step2',
        title: 'Step 2 — Open Aksh Studio',
        body: 'Aksh Studio is the browser IDE. This is where you code like Cursor.',
        items: [
          'Open /web/studio/ (local test: http://127.0.0.1:8000/web/studio/)',
          'Paste your API key in Settings and save',
          'Click New Project or Upload zip',
          'Left: files and threads · Center: editor · Right: Omni chat',
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
        note: 'Omni saves files and remembers the thread. Next guide: Omni Memory.',
      },
      {
        id: 'cursor-path',
        title: 'Other option — Cursor desktop',
        body: 'If you like the Cursor app, connect it to Omni. Always use model name: omni.',
        note: 'Full steps: /docs/cursor-connect',
      },
      {
        id: 'help',
        title: 'Read next',
        items: [
          'Run your own server: /docs/installation',
          'Cursor + Omni: /docs/cursor-connect',
          'Build an integration: /docs/api',
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
          'Redis optional',
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
        title: 'Step 2 — Set environment variables',
        body: 'Copy .env.example to .env. Fill in at least these values:',
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
        title: 'Step 5 — Production in India',
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
    next: { slug: 'cursor-connect', title: 'Cursor connect' },
  },
  {
    slug: 'cursor-connect',
    title: 'Connect Cursor to Omni',
    description:
      'Use the Cursor desktop app with Aksh\'s Omni AI. Same brain as Aksh Studio. Model name must be omni.',
    badge: 'Cursor users',
    sections: [
      {
        id: 'why',
        title: 'Why connect Cursor?',
        body:
          'Some people like the Cursor app UI. Omni gives you the same AI power as Aksh Studio. Point Cursor to the Aksh API instead of default US services.',
      },
      {
        id: 'steps',
        title: 'Setup steps',
        items: [
          '1. Get your API key from /web/dashboard/',
          '2. In Cursor: Settings → Models → Add OpenAI-compatible provider',
          '3. Base URL (live): https://api.aksh.aitotech.in/v1',
          '4. Base URL (local): http://127.0.0.1:8000/v1',
          '5. Paste your API key',
          '6. Model name: omni (required)',
          '7. Select omni in Cursor chat',
        ],
      },
      {
        id: 'vs-studio',
        title: 'Cursor vs Aksh Studio',
        body:
          'Cursor Connect = Cursor app + Omni AI. Aksh Studio = full IDE in the browser + Omni. Both use Omni but threads are separate for now.',
      },
      {
        id: 'single-face',
        title: 'You only see Omni',
        body: 'Do not pick other model names. The public API uses omni. Smart models run behind Omni automatically.',
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
      'Each chat thread saves your history. Omni remembers what you built. New thread = fresh start.',
    badge: 'Core feature',
    sections: [
      {
        id: 'problem',
        title: 'What problem does it solve?',
        body:
          'Without memory, the AI forgets your project every time. Omni Memory stores each thread so you can say "fix the login page" and Omni still knows your files.',
      },
      {
        id: 'what',
        title: 'How it works',
        body: 'Chats save in a Postgres database. Each user only sees their own threads.',
      },
      {
        id: 'studio',
        title: 'In Aksh Studio',
        items: [
          'Left panel shows your threads',
          'New Thread — start fresh',
          'Click an old thread — Omni gets full history',
          'Name threads by feature or bug',
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
        id: 'cursor',
        title: 'Cursor and memory',
        body: 'Cursor manages its own chat today. Best memory experience is in Aksh Studio or direct API calls.',
      },
    ],
    prev: { slug: 'cursor-connect', title: 'Cursor connect' },
    next: { slug: 'cloud-projects', title: 'Cloud projects' },
  },
  {
    slug: 'cloud-projects',
    title: 'Cloud projects',
    description:
      'Your code lives on the server. Edit in the browser. Upload a zip. Omni can change files. Good for weak laptops.',
    badge: 'Thin client',
    sections: [
      {
        id: 'why',
        title: 'Why cloud projects?',
        body:
          'Cursor keeps big folders on your disk. Aksh keeps files online. Open a browser and start — even on a 4GB RAM laptop.',
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
      'HTTP API for Omni chat, threads, and projects. Use a Bearer token from your dashboard.',
    badge: 'Developers',
    sections: [
      {
        id: 'base',
        title: 'Base URLs',
        items: [
          'Production (plan): https://api.aksh.aitotech.in',
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
        body: 'For Cursor and other OpenAI-compatible tools:',
        code: `{
  "model": "omni",
  "messages": [{"role": "user", "content": "Hello"}]
}`,
      },
      {
        id: 'threads',
        title: 'Threads',
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
