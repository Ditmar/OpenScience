import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,  // Aplica el color principal
  color: theme.palette.primary.contrastText,    // Color de texto en contraste
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,  // Color en el estado hover
  },
}));
