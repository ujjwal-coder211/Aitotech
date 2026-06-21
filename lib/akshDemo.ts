/** Aksh marketing demo — presets, mock replies, and simulated streaming */

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
    if (res.ok && data.answer) {
      return { answer: data.answer, live: true };
    }
  } catch {
    /* fall through to mock */
  }
  return { answer: resolveMockDemo(message).reply, live: false };
}
