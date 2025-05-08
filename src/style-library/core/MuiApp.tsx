import React from 'react';
import { CacheProvider, type EmotionCache } from '@emotion/react';
import { ThemeProvider } from '../providers/ThemeProvider';
import createEmotionCache from '../createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

interface AppProps {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}

export default function App({ children, emotionCache }: AppProps) {
  return (
    <CacheProvider value={emotionCache ?? clientSideEmotionCache}>
      <ThemeProvider>{children}</ThemeProvider>
    </CacheProvider>
  );
}
