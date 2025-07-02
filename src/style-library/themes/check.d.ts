import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    textPoppins: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    textPoppins?: React.CSSProperties;
  }

  interface Palette {
    checkmuipalette: {
      dark: string;
      light: string;
      primary: string;
      secondary: string;
      positive: string;
      negative: string;
      disabled: string;

      stroke_dark: string;
      stroke_light: string;
      stroke_primary: string;
      stroke_secondary: string;
      stroke_positive: string;
      stroke_negative: string;
      stroke_disabled: string;
      paragraph_dark: string;
      icon_text: string;
    };

    badgeCard: {
      primary: string;
      secondary: string;
      warning: string;
      success: string;
      danger: string;
    };
  }

  interface PaletteOptions {
    checkmuipalette?: {
      dark?: string;
      light?: string;
      primary?: string;
      secondary?: string;
      positive?: string;
      negative?: string;
      disabled?: string;

      stroke_dark?: string;
      stroke_light?: string;
      stroke_primary?: string;
      stroke_secondary?: string;
      stroke_positive?: string;
      stroke_negative?: string;
      stroke_disabled?: string;
      paragraph_dark?: string;
      icon_text?: string;
    };

    badgeCard?: {
      primary?: string;
      secondary?: string;
      warning?: string;
      success?: string;
      danger?: string;
    };
  }
}