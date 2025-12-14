'use client';

import { ReactNode, useState, useEffect } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from './Navbar';

export function ClientLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <ThemeProvider>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
