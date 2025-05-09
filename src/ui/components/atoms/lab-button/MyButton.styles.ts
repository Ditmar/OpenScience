import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const primaryColors = {
  main: '#1976d2',
  light: '#63a4ff',
  dark: '#004ba0',
  contrastText: '#fff',
};

export const StyledButton = styled(Button)(() => ({
  backgroundColor: primaryColors.main,
  color: primaryColors.contrastText,
  '&:hover': {
    backgroundColor: primaryColors.dark,
  },
}));
