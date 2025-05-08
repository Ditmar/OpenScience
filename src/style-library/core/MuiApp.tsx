import React from 'react';
import { CacheProvider, type EmotionCache } from '@emotion/react';
import { ThemeProvider } from '../providers/ThemeProvider';
import createEmotionCache from '../createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

interface AppProps {
  children: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache;
}

function App({ children, emotionCache = clientSideEmotionCache }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>{children}</ThemeProvider>
    </CacheProvider>
  );
}

export default App;
