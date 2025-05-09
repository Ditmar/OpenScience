import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button'; // Asegúrate de importar Button de MUI

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

