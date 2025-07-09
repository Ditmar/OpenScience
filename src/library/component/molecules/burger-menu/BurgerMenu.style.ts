import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const FooterStripesWrapper = styled(Box)({
  width: '100vw',
  position: 'fixed',
  bottom: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0,
  zIndex: 1,
});

export const BlueStripe = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 31,
  backgroundColor: theme.palette.burgerFloatingMenuPalette.blueStripe,
}));

export const GreenStripe = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 15,
  backgroundColor: theme.palette.burgerFloatingMenuPalette.greenStripe,
}));

export const ButtonWrapper = styled(Box)({
  position: 'fixed',
  bottom: 15,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 10,
});
