// src/style-library/themes/declarations.d.ts
import '@mui/material/styles';
import '@mui/material/Typography'; // <--- ¡AÑADE ESTA LÍNEA AQUÍ!

declare module '@mui/material/styles' {
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

  interface Palette {
    olpalette: {
      dark: string;
      dark_soft: string;
      disabled: string;
      light: string;
      negative: string;
      negative_soft: string;
      positive: string;
      positive_soft: string;
      primary: string;
      secondary: string;
      secondary_soft: string;
      tertiary: string;
      tertiary_soft: string;
      warning: string;
      warning_soft: string;
      stroke_dark: string;
      stroke_dark_soft: string;
      stroke_disabled: string;
      stroke_negative: string;
      stroke_negative_soft: string;
      stroke_positive: string;
      stroke_positive_soft: string;
      stroke_primary: string;
      stroke_primary_soft: string;
      stroke_secondary: string;
      stroke_secondary_soft: string;
      stroke_tertiary: string;
      stroke_tertiary_soft: string;
      stroke_warning: string;
      stroke_warning_soft: string;
      shadow_xs?: string;
      shadow_sm?: string;
      shadow_md?: string;
      shadow_lg?: string;
      shadow_xl?: string;
      shadow_xxxl?: string;
    };
  }

  interface PaletteOptions {
    olpalette?: {
      dark?: string;
      dark_soft?: string;
      disabled?: string;
      light?: string;
      negative?: string;
      negative_soft?: string;
      positive?: string;
      positive_soft?: string;
      primary?: string;
      secondary?: string;
      secondary_soft?: string;
      tertiary?: string;
      tertiary_soft?: string;
      warning?: string;
      warning_soft?: string;
      stroke_dark?: string;
      stroke_dark_soft?: string;
      stroke_disabled?: string;
      stroke_negative?: string;
      stroke_negative_soft?: string;
      stroke_positive?: string;
      stroke_positive_soft?: string;
      stroke_primary?: string;
      stroke_primary_soft?: string;
      stroke_secondary?: string;
      stroke_secondary_soft?: string;
      stroke_tertiary?: string;
      stroke_tertiary_soft?: string;
      stroke_warning?: string;
      stroke_warning_soft?: string;
      shadow_xs?: string;
      shadow_sm?: string;
      shadow_md?: string;
      shadow_lg?: string;
      shadow_xl?: string;
      shadow_xxxl?: string;
    };
  }

  // ¡IMPORTANTE! Asegúrate de que las interfaces 'Theme' y 'ThemeOptions' también
  // incluyan tus tipografías extendidas. Si no las tienes, añádelas:
  interface ThemeOptions {
    typography?: TypographyVariantsOptions;
    palette?: PaletteOptions; // Mantén esto
    // Añade otras opciones de tema personalizadas aquí si tienes alguna
  }

  interface Theme {
    typography: TypographyVariants; // <--- ¡AÑADE ESTA LÍNEA SI NO ESTÁ!
    palette: Palette; // Mantén esto
    // Añade otras propiedades de tema personalizadas aquí si tienes alguna
  }
}

// Este bloque ya lo tenías y es correcto para las anulaciones de variantes de TypographyProps
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    textSm: true;
    textMd: true;
    textLg: true;
    textPoppins: true;
  }
}