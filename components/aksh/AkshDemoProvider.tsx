'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import AkshDemoModal from './AkshDemoModal';

type AkshDemoContextValue = {
  open: boolean;
  initialPrompt: string;
  openDemo: (prompt?: string) => void;
  closeDemo: () => void;
};

const AkshDemoContext = createContext<AkshDemoContextValue | null>(null);

export function useAkshDemo() {
  const ctx = useContext(AkshDemoContext);
  if (!ctx) throw new Error('useAkshDemo must be used within AkshDemoProvider');
  return ctx;
}

export function AkshDemoProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState('');

  const openDemo = useCallback((prompt = '') => {
    setInitialPrompt(prompt);
    setOpen(true);
  }, []);

  const closeDemo = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({ open, initialPrompt, openDemo, closeDemo }),
    [open, initialPrompt, openDemo, closeDemo]
  );

  return (
    <AkshDemoContext.Provider value={value}>
      {children}
      <AkshDemoModal open={open} initialPrompt={initialPrompt} onClose={closeDemo} />
    </AkshDemoContext.Provider>
  );
}
