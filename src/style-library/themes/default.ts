// theme/lightTheme.js
import { createTheme } from '@mui/material/styles';
import tokens from './tokens/tokens.json';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: tokens.colors.primary_main,
    },
    secondary: {
      main: tokens.colors.secondary_main,
    },
    error: {
      main: tokens.colors.danger_main,
    },
    warning: {
      main: tokens.colors.warning_main,
    },
    background: {
      default: tokens.colors.background_main,
      paper: tokens.colors.main,
    },
    text: {
      primary: tokens.colors.text_main_alpha,
      secondary: tokens.colors.text_secondary,
    },
    olitemPalette: {
      stroke_Primary: tokens.colors.stroke_primary,
      text_light: tokens.colors.main,
      stroke_primary_Soft: tokens.colors.stroke_primary_soft,
    },
    checkmuipalette: {
      dark: tokens.colors.dark,
      light: tokens.colors.light,
      primary: tokens.colors.primary_main,
      secondary: tokens.colors.secondary_main,
      positive: tokens.colors.positive,
      negative: tokens.colors.negative,
      disabled: tokens.colors.disabled,

      stroke_dark: tokens.colors.stroke_dark,
      stroke_primary: tokens.colors.stroke_primary,
      stroke_secondary: tokens.colors.stroke_secondary,
      stroke_positive: tokens.colors.stroke_positive,
      stroke_negative: tokens.colors.stroke_negative,
      stroke_disabled: tokens.colors.stroke_disabled,

      paragraph_dark: tokens.colors.paragraph_color_dark,
      icon_text: tokens.colors.icontextstat_color_text,
    },
    badgeCard: {
      primary: tokens.colors.primary_main,
      secondary: tokens.colors.secondary_main,
      warning: tokens.colors.warning_main,
      success: tokens.colors.success_main,
      danger: tokens.colors.danger_main,
    },
  },
  typography: {
    fontFamily: '"Lato", "Roboto", "Montserrat", "Poppins-Regular", sans-serif',
    fontSize: 16,
    h1: {
      fontSize: tokens.typography.fontSizes.first,
      fontWeight: tokens.typography.fontWeights.first,
    },
    h2: {
      fontSize: tokens.typography.fontSizes.quarter,
      fontWeight: tokens.typography.fontWeights.bold,
    },
    h3: {
      fontSize: tokens.typography.fontSizes.second,
      fontWeight: tokens.typography.fontWeights.second,
    },
    body1: {
      fontSize: tokens.typography.fontSizes.primary,
      fontWeight: tokens.typography.fontWeights.bold,
    },
    body2: {
      fontSize: tokens.typography.fontSizes.sixth,
      color: tokens.colors.text_input,
    },
    textPoppins: {
      fontFamily: 'Poppins-Regular',
    },
    textSm: {
      fontSize: tokens.colors.icontextstat_fontsize_smalltext,
    },
    textMd: {
      fontSize: tokens.colors.icontextstat_fontsize_mediumtext,
    },
    textLg: {
      fontSize: tokens.colors.icontextstat_fontsize_largetext,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
});
