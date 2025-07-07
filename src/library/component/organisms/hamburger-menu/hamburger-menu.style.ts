import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const MenuContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: 117,
  height: 126,
  backgroundColor: theme.palette.background.paper,
  padding: 0,
  marginTop: -2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
}));

export const LogoWrapper = styled(Box)({
  width: 53,
  height: 28,
  display: 'flex',
  marginLeft: 27,
  marginBottom: 0,
  marginTop: 0,
  padding: 0,
});

export const DrawerContent = styled(Box)({
  display: 'block',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  margin: 0,
  gap: 0,
});
