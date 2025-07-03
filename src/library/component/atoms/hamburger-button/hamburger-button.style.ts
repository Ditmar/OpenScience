import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const StyledHamburgerButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.text.primary_alpha,
  color: theme.palette.common.white,
  borderRadius: (theme.shape.borderRadius as number) - 4,
  width: 41,
  height: 41,
  padding: 0,
  '&:hover': {
    backgroundColor: theme.palette.text.primary_alpha,
  },
}));
