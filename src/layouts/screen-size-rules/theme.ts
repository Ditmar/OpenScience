import { createTheme } from '@mui/material/styles';
import { breakpointValues } from './breakpoints';
import { generateResponsiveTypography } from './typography-responsive';

const theme = createTheme({
  breakpoints: breakpointValues,
  typography: generateResponsiveTypography(),
});

export { theme };
