import React, { createContext, useState } from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { themeCreator } from '../themes/base';

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
  const [themeName, setThemeName] = useState('NebulaFighterTheme');
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
      <MUIThemeProvider theme={themeCreator(themeName)}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
    // </StylesProvider>
  );
}
