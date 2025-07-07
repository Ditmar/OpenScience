import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customColorsBarge: {
      gray:string;
    };
  }

  interface ThemeOptions {
    customColorsBarge?: {
      gray?:string;
    };
  }
}
