import { Box, IconButton, styled } from '@mui/material';

export const Container = styled(Box)({
  display: 'flex',
  gap: '12px',
  padding: '4px 8px',
  backgroundColor: 'white',
  position: 'relative',
  alignItems: 'center',
  height: '48px',
});

export const MenuButton = styled(IconButton)<{ active?: boolean }>(() => ({
  color: '#03a9f4',
}));

export const OptionsBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: '100%',
  marginLeft: '0px',
  backgroundColor: '#235347',
  color: '#fff',
  minWidth: '180px',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  zIndex: 10,
  alignItems: 'center',
  justifyContent: 'center',
  height: '48px',
});

export const IconBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
  padding: '4px 8px',
});
