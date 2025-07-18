// theme/darkTheme.js
import { createTheme } from '@mui/material/styles';
import tokens from './tokens/tokens.json';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: tokens.colors.primary_main,
    },
    secondary: {
      main: tokens.colors.background_main,
    },
    error: {
      main: tokens.colors.danger_main,
    },
    warning: {
      main: tokens.colors.warning_main,
    },
    background: {
      default: '#070C27',
      paper: '#070C27',
    },
    text: {
      primary: tokens.colors.main,
      secondary: tokens.colors.text_input,
    },
    olitemPalette: {
      stroke_Primary: tokens.colors.stroke_primary,
      text_light: tokens.colors.main,
      stroke_primary_Soft: tokens.colors.stroke_primary_soft,
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
  typography: {
    fontFamily: '"Lato", "Roboto", "Montserrat", sans-serif',
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
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
});
