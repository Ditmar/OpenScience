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
      primary: tokens.colors['text_main-alpha'],
      secondary: tokens.colors.text_secondary,
    },
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
