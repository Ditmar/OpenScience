import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const MenuContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  zIndex: theme.zIndex.modal,
  backgroundColor: theme.palette.background.paper,
  width: 117,
  height: 126,
  padding: 0,
  marginTop: theme.spacing(0),
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
}));

export const DrawerContent = styled(Box)({
  width: 117,
  height: 126,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: 0,
  margin: 0,
});

export const LogoWrapper = styled(Box)({
  width: 53,
  height: 28,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  padding: 0,
});
