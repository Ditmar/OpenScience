import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const InitialButtonRoot = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.info.main,
  color: theme.palette.getContrastText(theme.palette.info.main),
  fontFamily: theme.typography.fontFamily,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  lineHeight: 1.4,
  borderRadius: 0,
  fontWeight: theme.typography.fontWeightMedium,

  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingTop: theme.spacing(0),
  paddingBottom: theme.spacing(0),

  fontSize: theme.typography.pxToRem(14),

  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(20),
    '& .MuiButton-endIcon svg': {
      fontSize: theme.typography.pxToRem(22),
    },
  },
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(24),
    '& .MuiButton-endIcon svg': {
      fontSize: theme.typography.pxToRem(28),
    },
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.pxToRem(28),
    '& .MuiButton-endIcon svg': {
      fontSize: theme.typography.pxToRem(32),
    },
  },

  '& .MuiButton-endIcon': {
    marginLeft: theme.spacing(0.75),
  },

  '&:hover': {
    backgroundColor: theme.palette.info.dark || theme.palette.info.main,
  },
}));
