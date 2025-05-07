// src/components/common/App.jsx
import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '../providers/ThemeProvider';
import createEmotionCache from '../createEmotionCache';

// Client-side cache, shared for the whole session
const clientSideEmotionCache = createEmotionCache();

interface AppProps {
  children: React.ReactNode;
}

export default function App({ children }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider>{children}</ThemeProvider>
    </CacheProvider>
  );
}
