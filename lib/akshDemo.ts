/** Aksh marketing demo — presets, mock replies, and simulated streaming */

export type WorkMode = 'ship' | 'fix' | 'extend' | 'guard' | 'deploy' | 'auto';

export const WORK_MODES: { id: WorkMode; label: string; hint: string }[] = [
  { id: 'ship', label: 'Ship', hint: 'Build new features from English' },
  { id: 'fix', label: 'Fix', hint: 'Find and patch bugs' },
  { id: 'extend', label: 'Extend', hint: 'Add to existing code' },
  { id: 'guard', label: 'Guard', hint: 'Security scan before deploy' },
  { id: 'deploy', label: 'Deploy', hint: 'Ship to E2E Networks India' },
  { id: 'auto', label: 'Auto', hint: 'Omni picks the best mode' },
];

export type PitchTourStep = {
  mode: WorkMode;
  label: string;
  prompt: string;
  narration: string;
  panel?: 'code' | 'preview' | 'terminal';
  showPreview?: boolean;
  terminalLines?: string[];
  delayAfterMs: number;
};

/** Scripted 90-second vision tour for investors, press, and expert demos */
export const PITCH_TOUR_STEPS: PitchTourStep[] = [
  {
    mode: 'ship',
    label: 'Build from English',
    prompt: 'Build a todo app with add, complete, and delete.',
    narration:
      'Step 1 — A founder describes the product in plain English. Omni writes real project files inside Aksh Studio.',
    panel: 'code',
    showPreview: true,
    delayAfterMs: 4500,
  },
  {
    mode: 'fix',
    label: 'Fix in context',
    prompt: 'Fix the null check bug in App.tsx.',
    narration:
      'Step 2 — Omni reads the whole project, not a pasted snippet. It patches bugs with full context.',
    panel: 'code',
    delayAfterMs: 3500,
  },
  {
    mode: 'guard',
    label: 'Security scan',
    prompt: 'Run a security scan on this project before we go live.',
    narration: 'Step 3 — Guard mode scans for risky patterns before anything ships to production.',
    panel: 'terminal',
    terminalLines: [
      '$ aksh scan --mode guard',
      '✓ 12 files checked · 0 critical · 1 low (fixed in App.tsx)',
    ],
    delayAfterMs: 3000,
  },
  {
    mode: 'deploy',
    label: 'Deploy in India',
    prompt: 'Deploy this project to E2E Networks in Delhi.',
    narration:
      'Step 4 — Deploy to India on E2E Networks. Browser editor, API, and storage — one product vision.',
    panel: 'terminal',
    terminalLines: [
      '$ aksh deploy --region delhi-ncr',
      '✓ Docker build · nginx · SSL',
      '✓ Live → https://demo.aitotech.in',
      '✓ Data stays in India',
    ],
    delayAfterMs: 4000,
  },
];

export type AkshDemoAgent = {
  id: string;
  title: string;
  subtitle: string;
  prompt: string;
  accent: string;
};

export const AKSH_DEMO_AGENTS: AkshDemoAgent[] = [
  {
    id: 'app-builder',
    title: 'App Builder',
    subtitle: 'Scaffold full apps from plain English',
    prompt: 'Build a todo app with add, complete, and delete.',
    accent: 'from-violet-500/20 to-indigo-500/10',
  },
  {
    id: 'bug-fixer',
    title: 'Bug Fixer',
    subtitle: 'Find and patch errors in your code',
    prompt: 'Fix the null check bug in App.tsx.',
    accent: 'from-rose-500/20 to-orange-500/10',
  },
  {
    id: 'refactor',
    title: 'Refactor Agent',
    subtitle: 'Clean structure without changing behavior',
    prompt: 'Split TodoList into smaller components.',
    accent: 'from-sky-500/20 to-cyan-500/10',
  },
  {
    id: 'test-writer',
    title: 'Test Writer',
    subtitle: 'Generate tests for existing code',
    prompt: 'Add unit tests for the TodoItem component.',
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    id: 'api-helper',
    title: 'API Helper',
    subtitle: 'Routes, types, and backend glue',
    prompt: 'Create a REST API route to save todos.',
    accent: 'from-amber-500/20 to-yellow-500/10',
  },
  {
    id: 'docs',
    title: 'Docs Agent',
    subtitle: 'README and inline comments',
    prompt: 'Write a README for this todo project.',
    accent: 'from-fuchsia-500/20 to-purple-500/10',
  },
];

export type DemoFile = { name: string; language: string; content: string };

export const DEMO_PROJECT_FILES: DemoFile[] = [
  {
    name: 'App.tsx',
    language: 'tsx',
    content: `import { useState } from 'react';
import { TodoList } from './TodoList';

export default function App() {
  const [todos, setTodos] = useState<{ id: string; text: string; done: boolean }[]>([]);

  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold">My Todos</h1>
      <TodoList todos={todos} onChange={setTodos} />
    </main>
  );
}`,
  },
  {
    name: 'TodoList.tsx',
    language: 'tsx',
    content: `type Todo = { id: string; text: string; done: boolean };

export function TodoList({ todos, onChange }: { todos: Todo[]; onChange: (t: Todo[]) => void }) {
  // TODO: add input + handlers
  return <ul>{todos.map((t) => <li key={t.id}>{t.text}</li>)}</ul>;
}`,
  },
  {
    name: 'api/todos/route.ts',
    language: 'ts',
    content: `// REST route — Omni can generate this for you
export async function GET() {
  return Response.json({ todos: [] });
}`,
  },
];

type MockScenario = {
  match: RegExp;
  reply: string;
  fileUpdates?: Partial<Record<string, string>>;
};

const MOCK_SCENARIOS: MockScenario[] = [
  {
    match: /todo|build|app|scaffold/i,
    reply:
      'Done. I added a working todo flow in TodoList.tsx — input field, add button, complete toggle, and delete. Preview is ready on the right.',
    fileUpdates: {
      'TodoList.tsx': `import { useState } from 'react';

type Todo = { id: string; text: string; done: boolean };

export function TodoList({ todos, onChange }: { todos: Todo[]; onChange: (t: Todo[]) => void }) {
  const [text, setText] = useState('');

  function addTodo() {
    if (!text.trim()) return;
    onChange([...todos, { id: crypto.randomUUID(), text: text.trim(), done: false }]);
    setText('');
  }

  return (
    <div className="mt-4 space-y-3">
      <div className="flex gap-2">
        <input value={text} onChange={(e) => setText(e.target.value)} className="flex-1 rounded border px-3 py-2" placeholder="New todo" />
        <button onClick={addTodo} className="rounded bg-violet-600 px-4 py-2 text-white">Add</button>
      </div>
      <ul className="space-y-2">
        {todos.map((t) => (
          <li key={t.id} className="flex items-center gap-2 rounded border px-3 py-2">
            <input type="checkbox" checked={t.done} onChange={() => onChange(todos.map((x) => (x.id === t.id ? { ...x, done: !x.done } : x)))} />
            <span className={t.done ? 'line-through opacity-60' : ''}>{t.text}</span>
            <button onClick={() => onChange(todos.filter((x) => x.id !== t.id))} className="ml-auto text-sm text-rose-400">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
    },
  },
  {
    match: /bug|null|fix|error/i,
    reply:
      'Found it. todos could be undefined on first render. I added a safe default and a guard in TodoList so the list never crashes.',
    fileUpdates: {
      'App.tsx': `import { useState } from 'react';
import { TodoList } from './TodoList';

export default function App() {
  const [todos, setTodos] = useState<{ id: string; text: string; done: boolean }[]>([]);

  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold">My Todos</h1>
      <TodoList todos={todos ?? []} onChange={setTodos} />
    </main>
  );
}`,
    },
  },
  {
    match: /split|refactor|component/i,
    reply:
      'Refactored. TodoItem is now its own file. TodoList only handles state and layout — easier to test and reuse.',
    fileUpdates: {
      'TodoItem.tsx': `type Todo = { id: string; text: string; done: boolean };

export function TodoItem({ todo, onToggle, onDelete }: { todo: Todo; onToggle: () => void; onDelete: () => void }) {
  return (
    <li className="flex items-center gap-2 rounded border px-3 py-2">
      <input type="checkbox" checked={todo.done} onChange={onToggle} />
      <span className={todo.done ? 'line-through opacity-60' : ''}>{todo.text}</span>
      <button onClick={onDelete} className="ml-auto text-sm text-rose-400">Delete</button>
    </li>
  );
}`,
    },
  },
  {
    match: /test|unit|spec/i,
    reply:
      'Added TodoItem.test.tsx with three cases: renders label, toggles done state, and calls onDelete. Run with your test runner when Studio opens.',
    fileUpdates: {
      'TodoItem.test.tsx': `import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from './TodoItem';

test('renders todo text', () => {
  render(<TodoItem todo={{ id: '1', text: 'Ship Aksh', done: false }} onToggle={() => {}} onDelete={() => {}} />);
  expect(screen.getByText('Ship Aksh')).toBeInTheDocument();
});`,
    },
  },
  {
    match: /api|rest|route|backend/i,
    reply:
      'Created api/todos/route.ts with GET and POST. Todos persist in memory for the demo — swap to your database when you deploy.',
    fileUpdates: {
      'api/todos/route.ts': `const store: { id: string; text: string; done: boolean }[] = [];

export async function GET() {
  return Response.json({ todos: store });
}

export async function POST(req: Request) {
  const { text } = await req.json();
  const todo = { id: crypto.randomUUID(), text, done: false };
  store.push(todo);
  return Response.json({ todo }, { status: 201 });
}`,
    },
  },
  {
    match: /security|scan|guard|vuln/i,
    reply:
      'Guard scan complete. No critical issues. I fixed one low-risk pattern in App.tsx (unsafe optional chain). Safe to deploy.',
    fileUpdates: {},
  },
  {
    match: /deploy|e2e|india|host|launch/i,
    reply:
      'Deploy pipeline started on E2E Networks (Delhi-NCR). Docker image built, nginx configured, SSL issued. Your app goes live in ~3 minutes — all in India.',
    fileUpdates: {},
  },
  {
    match: /food|landing|restaurant|website|page|html/i,
    reply:
      'Done. I scaffolded a food landing page — hero, menu section, and contact CTA. Check App.tsx and the new components in the editor. Open Preview to see the layout.',
    fileUpdates: {
      'App.tsx': `export default function App() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <header className="border-b border-stone-800 px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-amber-400">Spice Garden</span>
        <nav className="flex gap-4 text-sm text-stone-400">
          <a href="#menu">Menu</a>
          <a href="#contact">Order</a>
        </nav>
      </header>
      <section className="px-6 py-20 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Fresh Indian food, delivered fast</h1>
        <p className="mt-4 text-stone-400">Order online or book a table — built with Aksh Studio.</p>
        <button className="mt-8 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-stone-950">See menu</button>
      </section>
    </main>
  );
}`,
    },
  },
  {
    match: /readme|doc|comment/i,
    reply:
      'README.md is ready with setup steps, scripts, and a short Omni section. I kept it in simple English for your team.',
    fileUpdates: {
      'README.md': `# Todo App (Aksh demo)

## Run
Open in Aksh Studio or \`npm run dev\`.

## Features
- Add, complete, and delete todos
- Powered by Omni in Aksh Studio

## Ask Omni
Try: "Add dark mode" or "Deploy to E2E Networks".`,
    },
  },
];

const DEFAULT_MOCK_REPLY =
  'Got it. I updated the project based on your request. Check the editor — files are saved to your cloud project in Aksh Studio.';

/** Old sales / support bots — never show in Aksh Studio demo */
function looksLikeSalesBot(text: string): boolean {
  return /₹\s*49,?999|book a call|contact form|hamari team|web development service|Namaste!.*AitoTech|At AitoTech|AI Automation|Workflow Automation|filling out our contact|automate business workflows|discovery call/i.test(
    text
  );
}

export function resolveMockDemo(userMessage: string): { reply: string; fileUpdates: Partial<Record<string, string>> } {
  for (const scenario of MOCK_SCENARIOS) {
    if (scenario.match.test(userMessage)) {
      return { reply: scenario.reply, fileUpdates: scenario.fileUpdates ?? {} };
    }
  }
  return { reply: DEFAULT_MOCK_REPLY, fileUpdates: {} };
}

/** Typewriter chunks for simulated streaming */
export async function streamText(
  text: string,
  onChunk: (partial: string) => void,
  msPerChar = 12
): Promise<void> {
  let out = '';
  for (const ch of text) {
    out += ch;
    onChunk(out);
    await new Promise((r) => setTimeout(r, msPerChar));
  }
}

export async function fetchOmniReply(message: string): Promise<{ answer: string; live: boolean }> {
  try {
    const res = await fetch('/api/agent-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, agent_type: 'aksh' }),
    });
    const data = await res.json();
    if (res.ok && data.answer && !looksLikeSalesBot(data.answer)) {
      return { answer: data.answer, live: true };
    }
  } catch {
    /* fall through to mock */
  }
  return { answer: resolveMockDemo(message).reply, live: false };
}
