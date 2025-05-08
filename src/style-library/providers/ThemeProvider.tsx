import React, { createContext, useState } from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { defaultTheme } from '../themes/default';

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextProps {
  themeName: string;
  toggleTheme: (newThemeName: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  themeName: 'default',
  toggleTheme: (newThemeName: string) => {},
});

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  return context;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeName, setThemeName] = useState('light');
  const toggleTheme = (newThemeName: string) => {
    setThemeName(newThemeName);
  };
  const themeContextValue = {
    themeName,
    toggleTheme,
  };
  return (
    // <StylesProvider injectFirst>
    <ThemeContext.Provider value={themeContextValue}>
      <MUIThemeProvider theme={themeName === 'dark' ? defaultTheme : defaultTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
    // </StylesProvider>
  );
}
