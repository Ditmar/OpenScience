import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customColorsBadge: {
      gray:string;
    };
  }

  interface ThemeOptions {
    customColorsBadge?: {
      gray?:string;
    };
  }
}
