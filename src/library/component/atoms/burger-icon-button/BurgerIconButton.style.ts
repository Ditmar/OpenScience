import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.burgerFloatingMenuPalette.buttonBackground,
  color: theme.palette.burgerFloatingMenuPalette.buttonIcon,
  borderRadius: '50%',
  width: 62,
  height: 62,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 6,
}));

export const Bar = styled('div')(({ theme }) => ({
  width: 45.43,
  height: 6.88,
  backgroundColor: theme.palette.burgerFloatingMenuPalette.barBackground,
  borderRadius: 3.44,
}));
