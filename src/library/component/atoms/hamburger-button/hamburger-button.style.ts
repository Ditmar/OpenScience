import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const StyledHamburgerButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.text.primary_alpha,
  color: theme.palette.common.white,
  borderRadius: (theme.shape.borderRadius as number) - 4,
  width: 41,
  height: 41,
  padding: 0,
  '& svg': {
    fontSize: 43,
    width: 41,
    height: 41,
    color: theme.palette.common.white,
    stroke: theme.palette.common.white,
    strokeWidth: 1.5,
  },
  '&:hover': {
    backgroundColor: theme.palette.text.primary_alpha,
  },
}));
