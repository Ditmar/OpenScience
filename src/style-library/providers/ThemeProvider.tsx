import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from '../themes/default';
import { darkTheme } from '../themes/dark';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export interface ThemeContextProps {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const contextValue = useMemo(
    () => ({
      mode,
      setMode,
    }),
    [mode],
  );
  return (
    <ThemeContext.Provider value={contextValue}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}
