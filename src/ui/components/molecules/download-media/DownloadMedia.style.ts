import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';

const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideOut = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-100%); opacity: 0; }
`;

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.customColors.primary,
  width: '100%',
  maxWidth: theme.breakpoints.values.md,
  padding: theme.spacing(2, 3.125, 3),
  margin: '0 auto',
  animation: `${slideIn} 0.3s ease-in-out`,

  '&.slide-out': {
    animation: `${slideOut} 0.3s ease-in-out`,
  },

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.5, 2, 2.5),
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.25, 1.5, 2),
  },
}));

export const IconBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: theme.spacing(0, 1),
  marginBottom: theme.spacing(0.625),
  zIndex: 2,

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 0.5),
  },
}));

export const LeftIconWrapper = styled(Box)(({ theme }) => ({
  marginLeft: '-13px',

  [theme.breakpoints.down('sm')]: {
    marginLeft: '-10px',
  },
}));

export const RightIconWrapper = styled(Box)(({ theme }) => ({
  marginRight: '-30px',
  marginTop: '-14px',

  [theme.breakpoints.down('sm')]: {
    marginRight: '-16px',
    marginTop: '-8px',
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  aspectRatio: '16 / 9',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: 0,

  [theme.breakpoints.down('sm')]: {
    aspectRatio: '4 / 3',
  },
}));
