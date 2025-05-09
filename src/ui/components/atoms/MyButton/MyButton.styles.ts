import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main = '#1976d2',
  color: theme.palette.primary.contrastText = '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark = '#004ba0',
  }
}));