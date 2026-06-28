/** SAIRA Phase 1 — task classification and cold-start routing (paper §8.1) */

export type TaskClass =
  | 'CODE_GEN'
  | 'CODE_DEBUG'
  | 'MATH_ALGO'
  | 'SIMPLE_LOOKUP'
  | 'MULTI_STEP_PLAN'
  | 'DEPLOY'
  | 'SECURITY';

export type ColdStartEntry = {
  taskClass: TaskClass;
  label: string;
  model: string;
  provider: string;
  rationale: string;
};

/** Cold-start routing table — Section 8.1 defaults before online learning */
export const COLD_START_TABLE: ColdStartEntry[] = [
  {
    taskClass: 'CODE_GEN',
    label: 'Code generation',
    model: 'qwen/qwen-2.5-coder-32b-instruct:free',
    provider: 'OpenRouter',
    rationale: 'Strong codegen on free tier; best first pick for greenfield files.',
  },
  {
    taskClass: 'CODE_DEBUG',
    label: 'Debug & fix',
    model: 'deepseek/deepseek-chat-v3-0324:free',
    provider: 'OpenRouter',
    rationale: 'Reasoning-heavy traces for stack errors and null checks.',
  },
  {
    taskClass: 'MATH_ALGO',
    label: 'Math & algorithms',
    model: 'deepseek/deepseek-r1:free',
    provider: 'OpenRouter',
    rationale: 'Chain-of-thought for proofs, complexity, and numeric edge cases.',
  },
  {
    taskClass: 'SIMPLE_LOOKUP',
    label: 'Simple lookup',
    model: 'google/gemma-2-9b-it:free',
    provider: 'OpenRouter',
    rationale: 'Fast, cheap answers for docs, syntax, and one-liner facts.',
  },
  {
    taskClass: 'MULTI_STEP_PLAN',
    label: 'Multi-step plan',
    model: 'meta-llama/llama-3.3-70b-instruct:free',
    provider: 'OpenRouter',
    rationale: 'Long-horizon planning — refactor plans, migration steps, agent chains.',
  },
  {
    taskClass: 'DEPLOY',
    label: 'Deploy & DevOps',
    model: 'mistralai/mistral-7b-instruct:free',
    provider: 'OpenRouter',
    rationale: 'Shell, Docker, nginx, and India hosting scripts.',
  },
  {
    taskClass: 'SECURITY',
    label: 'Security scan',
    model: 'qwen/qwen-2.5-coder-32b-instruct:free',
    provider: 'OpenRouter',
    rationale: 'Pattern scan for secrets, injection, and unsafe defaults.',
  },
];

const CLASS_PATTERNS: { taskClass: TaskClass; patterns: RegExp[] }[] = [
  { taskClass: 'SECURITY', patterns: [/security|scan|guard|vuln|secret|xss|injection/i] },
  { taskClass: 'DEPLOY', patterns: [/deploy|docker|nginx|e2e|host|launch|ssl|pipeline/i] },
  { taskClass: 'MATH_ALGO', patterns: [/algorithm|complexity|proof|math|fibonacci|sort|leetcode|big.?o/i] },
  { taskClass: 'CODE_DEBUG', patterns: [/bug|fix|null|error|crash|debug|stack trace|failing test/i] },
  { taskClass: 'MULTI_STEP_PLAN', patterns: [/plan|migrate|refactor|split|architecture|roadmap|steps|workflow/i] },
  { taskClass: 'SIMPLE_LOOKUP', patterns: [/what is|how do i|syntax|define|explain briefly|lookup/i] },
  { taskClass: 'CODE_GEN', patterns: [/build|create|scaffold|generate|write|todo|app|component|api|route/i] },
];

export function classifyPrompt(prompt: string): TaskClass {
  const text = prompt.trim();
  for (const { taskClass, patterns } of CLASS_PATTERNS) {
    if (patterns.some((p) => p.test(text))) return taskClass;
  }
  return 'CODE_GEN';
}

export type RouteResult = {
  taskClass: TaskClass;
  model: string;
  provider: string;
  label: string;
  rationale: string;
};

export function routePrompt(prompt: string): RouteResult {
  const taskClass = classifyPrompt(prompt);
  const entry = COLD_START_TABLE.find((e) => e.taskClass === taskClass)!;
  return {
    taskClass,
    model: entry.model,
    provider: entry.provider,
    label: entry.label,
    rationale: entry.rationale,
  };
}

export function getColdStartEntry(taskClass: TaskClass): ColdStartEntry {
  return COLD_START_TABLE.find((e) => e.taskClass === taskClass) ?? COLD_START_TABLE[0];
}
