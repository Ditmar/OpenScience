// src/theme/theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      primary: string;
      secondary: string;
      white: string;
    };
  }

  interface ThemeOptions {
    customColors?: {
      primary?: string;
      secondary?: string;
      white?: string;
    };
  }
}
