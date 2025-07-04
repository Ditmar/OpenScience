import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    olitemPalette: {
      stroke_Primary: string;
      text_light: string;
      stroke_primary_Soft: string;
      brandBlue?: string;
    };
  }
  interface PaletteOptions {
    olitemPalette?: {
      stroke_Primary: string;
      text_light: string;
      stroke_primary_Soft: string;
      brandBlue?: string; 
    };
  }

  interface TypographyVariants {
    textSm: React.CSSProperties;
    textMd: React.CSSProperties;
    textLg: React.CSSProperties;
    textPoppins: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    textSm?: React.CSSProperties;
    textMd?: React.CSSProperties;
    textLg?: React.CSSProperties;
    textPoppins?: React.CSSProperties;
  }
}