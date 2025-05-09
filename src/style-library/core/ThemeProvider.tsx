import React from 'react';
import { CacheProvider, type EmotionCache } from '@emotion/react';
import { ThemeProvider } from '../providers/ThemeProvider';
import createEmotionCache from '../createEmotionCache';

interface AppProps {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}

function ThemeWrapper({ children, emotionCache }: AppProps) {
  let emotion = emotionCache;
  if (typeof window !== 'undefined') {
    emotion = createEmotionCache();
  }
  return (
    <CacheProvider value={emotion}>
      <ThemeProvider>{children}</ThemeProvider>
    </CacheProvider>
  );
}

export default ThemeWrapper;
