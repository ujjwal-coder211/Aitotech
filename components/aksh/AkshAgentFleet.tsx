'use client';

import { motion } from 'framer-motion';
import { AKSH_DEMO_AGENTS } from '@/lib/akshDemo';
import { useAkshDemo } from './AkshDemoProvider';

export default function AkshAgentFleet() {
  const { openDemo } = useAkshDemo();

  return (
    <section className="section-pad border-t border-zinc-800/80" aria-labelledby="aksh-agent-fleet">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-400">Meet your coding agents</p>
          <h2 id="aksh-agent-fleet" className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
            Routely handles the work
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            From greenfield apps to bug fixes and tests — pick a task, open the demo, and watch Routely respond.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AKSH_DEMO_AGENTS.map((agent, i) => (
            <motion.button
              key={agent.id}
              type="button"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              onClick={() => openDemo(agent.prompt)}
              className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br ${agent.accent} p-6 text-left transition hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-950/30`}
            >
              <div className="absolute inset-0 bg-[#0a0a0f]/80 transition group-hover:bg-[#0a0a0f]/70" />
              <div className="relative">
                <p className="font-display text-lg font-semibold text-white">{agent.title}</p>
                <p className="mt-2 text-sm text-zinc-400">{agent.subtitle}</p>
                <p className="mt-4 text-xs font-medium text-violet-300 opacity-0 transition group-hover:opacity-100">
                  Try in demo →
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => openDemo()}
            className="btn-primary inline-flex bg-violet-600 hover:bg-violet-500"
          >
            Try Routely
          </button>
        </div>
      </div>
    </section>
  );
}
