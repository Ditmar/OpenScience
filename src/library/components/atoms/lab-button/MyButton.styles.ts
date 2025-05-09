import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: theme.shadows[2],
  '&:active': {
    boxShadow: theme.shadows[4],
    backgroundColor: theme.palette.primary.dark,
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
