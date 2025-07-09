// src/theme/theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      primary: string;
      secondary: string;
      white: string;
      navbarMain: string;
      navbarBorder: string;
    };
    paletteErrorPage: {
      brandBlue: string;
    };
  }

  interface ThemeOptions {
    customColors?: {
      primary?: string;
      secondary?: string;
      white?: string;
      navbarMain?: string;
      navbarBorder?: string;
    };
    paletteErrorPage?: {
      brandBlue?: string;
    };
  }
}
