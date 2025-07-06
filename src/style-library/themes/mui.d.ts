import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    olitemPalette: {
      stroke_Primary: string;
      text_light: string;
      stroke_primary_Soft: string;
    };
    pillpalette: {
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
    };
    tertiary: PaletteColor;
    primary_alpha: PaletteColor;
    quintary_main: PaletteColor;
  }
  interface PaletteOptions {
    olitemPalette?: {
      stroke_Primary: string;
      text_light: string;
      stroke_primary_Soft: string;
    };
    pillpalette?: {
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
    };
    tertiary?: PaletteColorOptions;
    primary_alpha?: PaletteColorOptions;
    quintary_main?: PaletteColorOptions;
  }
  interface Palette {
    customBlue: Palette['primary'];
  }
  interface PaletteOptions {
    customBlue?: PaletteOptions['primary'];
  }
  interface TypographyVariants {
    textSm: React.CSSProperties;
    textMd: React.CSSProperties;
    textLg: React.CSSProperties;
    textPoppins: React.CSSProperties;
    textLato: React.CSSProperties;
    body3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    textSm?: React.CSSProperties;
    textMd?: React.CSSProperties;
    textLg?: React.CSSProperties;
    textPoppins?: React.CSSProperties;
    textLato?: React.CSSProperties;
    body3?: React.CSSProperties;
  }

  interface TypeText {
    tertiary: string;
    primary_alpha: string;
    quintary_main: string;
  }

  interface TypeTextOptions {
    tertiary?: string;
    primary_alpha?: string;
    quintary_main?: string;
  }
}
