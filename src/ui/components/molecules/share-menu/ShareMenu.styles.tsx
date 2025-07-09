import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import MuiBox from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';
import type { ButtonProps } from '@mui/material/Button';

const adsShareMain = '#02322C';
const adsPrimaryTwentyFive = '#F0F0F0';

export const ShareContainer = styled(MuiBox)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  backgroundColor: adsShareMain,
  borderRadius: 8,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.20)',
  padding: 20,
  width: 'fit-content',
}));

export const ShareButton = styled(MuiButton)<ButtonProps>(() => ({
  background: 'none',
  border: 'none',
  color: adsPrimaryTwentyFive,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.2em',
  fontWeight: 'bold',
  marginBottom: 10,
  padding: '10px 0',
  textTransform: 'none',

  '& svg': {
    color: adsPrimaryTwentyFive,
    marginRight: 8,
  },
}));

export const ShareOptions = styled(MuiBox)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
}));

export const ShareOption = styled(MuiBox)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  marginBottom: 8,
  width: '100%',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

export const ShareIconWrapper = styled(MuiBox)<BoxProps>(() => ({}));
