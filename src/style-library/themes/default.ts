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
    info: {
      main: tokens.colors.tertiary_main,
    },
    background: {
      default: tokens.colors.background_main,
      paper: tokens.colors.main,
    },
    text: {
      primary: tokens.colors.text_main_alpha,
      secondary: tokens.colors.text_secondary,
      primary_alpha: tokens.colors.text_main,
      tertiary: tokens.colors.tertiary_main,
      quintary_main: tokens.colors.quintary_main,
    },
    olitemPalette: {
      stroke_Primary: tokens.colors.stroke_primary,
      text_light: tokens.colors.main,
      stroke_primary_Soft: tokens.colors.stroke_primary_soft,
    },
    pillpalette: {
      dark: tokens.colors.dark,
      dark_soft: tokens.colors.dark_soft,
      disabled: tokens.colors.disabled,
      light: tokens.colors.light,
      negative: tokens.colors.negative,
      negative_soft: tokens.colors.negative_soft,
      positive: tokens.colors.positive,
      positive_soft: tokens.colors.positive_soft,
      primary: tokens.colors.primary,
      secondary: tokens.colors.secondary,
      secondary_soft: tokens.colors.secondary_soft,
      tertiary: tokens.colors.tertiary,
      tertiary_soft: tokens.colors.tertiary_soft,
      warning: tokens.colors.warning,
      warning_soft: tokens.colors.warning_soft,
      stroke_dark: tokens.colors.stroke_dark,
      stroke_dark_soft: tokens.colors.stroke_dark_soft,
      stroke_disabled: tokens.colors.stroke_disabled,
      stroke_negative: tokens.colors.stroke_negative,
      stroke_negative_soft: tokens.colors.stroke_negative_soft,
      stroke_positive: tokens.colors.stroke_positive,
      stroke_positive_soft: tokens.colors.stroke_positive_soft,
      stroke_primary: tokens.colors.stroke_primary,
      stroke_primary_soft: tokens.colors.stroke_primary_soft,
      stroke_secondary: tokens.colors.stroke_secondary,
      stroke_secondary_soft: tokens.colors.stroke_secondary_soft,
      stroke_tertiary: tokens.colors.stroke_tertiary,
      stroke_tertiary_soft: tokens.colors.stroke_tertiary_soft,
      stroke_warning: tokens.colors.stroke_warning,
      stroke_warning_soft: tokens.colors.stroke_warning_soft,
    },
    hamburgerMenuPalette: {
      main: tokens.colors.text_main,
      accent: tokens.colors.quintary_main,
      iconSize: tokens.typography.fontSizes.headingone,
    },
    phonedropdownPalette: {
      textPrimary: '#1B2037',
      textSecondary: tokens.colors.icontextstat_color_text,
      textTertiary: tokens.colors.white,
      background: tokens.colors.primary_main,
      borderFocus: tokens.colors.primary_main,
      borderDefault: tokens.colors.stroke_dark_soft,
      borderCountryList: tokens.colors.stroke_primary_soft,
    },
  },
  customColors: {
    primary: '#235347',
    secondary: '#03a9f4',
    white: tokens.colors.main,
    navbarMain: tokens.colors.quintary_main,
    navbarBorder: tokens.colors.text_main,
  },
  paletteErrorPage: {
    brandBlue: '#0793BF',
  },
  customColorsBadge: {
    gray: '#e0e0e0',
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
    body3: {
      fontSize: tokens.colors.font_size_fifth,
      fontWeight: tokens.colors.font_weight_regular,
    },
    textPoppins: {
      fontFamily: 'Poppins-Regular',
    },
    textLato: {
      fontFamily: 'Lato',
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
