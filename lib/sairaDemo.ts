/** SAIRA Phase 1 marketing demo — mock routing, replies, and simulated streaming */

import { classifyPrompt, routePrompt, type RouteResult, type TaskClass } from '@/lib/sairaRouting';

export type DemoFile = { name: string; language: string; content: string };

export type EventPhase = 'PERCEIVE' | 'DECIDE' | 'ACT' | 'REMEMBER' | 'IMPROVE';

export type SairaTourStep = {
  phase: EventPhase;
  label: string;
  prompt: string;
  narration: string;
  panel?: 'code' | 'preview' | 'terminal';
  showPreview?: boolean;
  terminalLines?: string[];
  skillExtracted?: string;
  delayAfterMs: number;
};

export const DEMO_FILES: DemoFile[] = [
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
    content: `// REST route — SAIRA Harness can generate this for you
export async function GET() {
  return Response.json({ todos: [] });
}`,
  },
];

export const STARTER_CHIPS = [
  'Build a todo app with add and delete',
  'Fix the null check in App.tsx',
  'Run a security scan before deploy',
  'Deploy to E2E Networks in Delhi',
];

export const SAIRA_PHASE1_TOUR: SairaTourStep[] = [
  {
    phase: 'PERCEIVE',
    label: 'Perceive task',
    prompt: 'Build a todo app with add, complete, and delete.',
    narration:
      'PERCEIVE — SAIRA reads your prompt and project context. Omni classifies this as CODE_GEN and shows the cold-start route.',
    panel: 'code',
    showPreview: true,
    skillExtracted: 'react-todo-patterns',
    delayAfterMs: 4000,
  },
  {
    phase: 'DECIDE',
    label: 'Route model',
    prompt: 'Fix the null check bug in App.tsx.',
    narration:
      'DECIDE — Cold-start table picks deepseek-chat for CODE_DEBUG. No manual model picker — routing is automatic.',
    panel: 'code',
    delayAfterMs: 3500,
  },
  {
    phase: 'ACT',
    label: 'Act in Harness',
    prompt: 'Run a security scan on this project before we go live.',
    narration: 'ACT — Harness edits files and runs terminal tools. Guard mode scans for risky patterns.',
    panel: 'terminal',
    terminalLines: ['$ routely scan --mode guard', '✓ 12 files checked · 0 critical · 1 low (fixed in App.tsx)'],
    delayAfterMs: 3000,
  },
  {
    phase: 'REMEMBER',
    label: 'Remember in Hermes',
    prompt: 'Split TodoList into smaller components.',
    narration:
      'REMEMBER — Hermes stores thread history and extracted skills. Re-open the chat and SAIRA still knows your project.',
    panel: 'code',
    skillExtracted: 'component-splitting',
    delayAfterMs: 3500,
  },
  {
    phase: 'IMPROVE',
    label: 'Improve & deploy',
    prompt: 'Deploy this project to E2E Networks in Delhi.',
    narration:
      'IMPROVE — Feedback updates routing weights over time. Deploy ships to India on E2E Networks — full Phase 1 vision.',
    panel: 'terminal',
    terminalLines: [
      '$ routely deploy --region delhi-ncr',
      '✓ Docker build · nginx · SSL',
      '✓ Live → https://demo.aitotech.in',
      '✓ Data stays in India',
    ],
    delayAfterMs: 4000,
  },
];

type MockScenario = {
  match: RegExp;
  taskClass?: TaskClass;
  reply: string;
  fileUpdates?: Partial<Record<string, string>>;
  terminalLines?: string[];
  skillExtracted?: string;
};

const MOCK_SCENARIOS: MockScenario[] = [
  {
    match: /todo|build|app|scaffold/i,
    taskClass: 'CODE_GEN',
    reply:
      'Done. I added a working todo flow in TodoList.tsx — input field, add button, complete toggle, and delete. Preview is ready in Harness.',
    skillExtracted: 'react-todo-patterns',
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
    taskClass: 'CODE_DEBUG',
    reply:
      'Found it. todos could be undefined on first render. I added a safe default and a guard in TodoList so the list never crashes.',
    skillExtracted: 'null-safe-react',
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
    match: /split|refactor|component|plan/i,
    taskClass: 'MULTI_STEP_PLAN',
    reply:
      'Refactored. TodoItem is now its own file. TodoList only handles state and layout — easier to test and reuse.',
    skillExtracted: 'component-splitting',
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
    match: /security|scan|guard|vuln/i,
    taskClass: 'SECURITY',
    reply: 'Guard scan complete. No critical issues. I fixed one low-risk pattern in App.tsx. Safe to deploy.',
    terminalLines: ['$ routely scan --mode guard', '✓ 12 files · 0 critical · 1 low (auto-fixed)'],
  },
  {
    match: /deploy|e2e|india|host|launch/i,
    taskClass: 'DEPLOY',
    reply:
      'Deploy pipeline started on E2E Networks (Delhi-NCR). Docker image built, nginx configured, SSL issued. Live in ~3 minutes — all in India.',
    terminalLines: [
      '$ routely deploy --region delhi-ncr',
      'Building Docker image…',
      '✓ nginx + SSL configured',
      '✓ Live at https://demo.aitotech.in (E2E Networks · India)',
    ],
  },
  {
    match: /api|rest|route|backend/i,
    taskClass: 'CODE_GEN',
    reply: 'Created api/todos/route.ts with GET and POST. Todos persist in memory for the demo.',
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
    match: /math|algorithm|complexity|proof/i,
    taskClass: 'MATH_ALGO',
    reply: 'Worked through the algorithm step by step. Time complexity O(n log n) — see the annotated solution in the editor.',
  },
  {
    match: /what is|how do i|syntax|define/i,
    taskClass: 'SIMPLE_LOOKUP',
    reply: 'Quick answer: check the docs snippet I added. For deeper changes, ask me to edit files in Harness.',
  },
];

const DEFAULT_REPLY =
  'Got it. SAIRA routed your request, updated the project in Harness, and saved context to Hermes memory.';

export type ResolveDemoResult = {
  routing: RouteResult;
  reply: string;
  fileUpdates: Partial<Record<string, string>>;
  terminalLines: string[];
  skillExtracted?: string;
  phases: EventPhase[];
};

export function resolveDemo(userMessage: string): ResolveDemoResult {
  const routing = routePrompt(userMessage);

  for (const scenario of MOCK_SCENARIOS) {
    if (scenario.match.test(userMessage)) {
      const taskClass = scenario.taskClass ?? classifyPrompt(userMessage);
      const r = routePrompt(userMessage);
      if (scenario.taskClass) {
        r.taskClass = taskClass;
      }
      return {
        routing: scenario.taskClass ? { ...r, taskClass: scenario.taskClass } : routing,
        reply: scenario.reply,
        fileUpdates: scenario.fileUpdates ?? {},
        terminalLines: scenario.terminalLines ?? [],
        skillExtracted: scenario.skillExtracted,
        phases: ['PERCEIVE', 'DECIDE', 'ACT', 'REMEMBER'],
      };
    }
  }

  return {
    routing,
    reply: DEFAULT_REPLY,
    fileUpdates: {},
    terminalLines: [],
    phases: ['PERCEIVE', 'DECIDE', 'ACT'],
  };
}

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
