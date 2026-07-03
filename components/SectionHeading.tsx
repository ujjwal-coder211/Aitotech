'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 max-w-3xl sm:mb-14 ${alignClass}`}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-zinc-500">{highlight}</span>
          </>
        )}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-zinc-500">{description}</p>}
    </motion.div>
  );
}
