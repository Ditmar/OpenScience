import { styled } from '@mui/material/styles';
import { Box, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const StyledWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  right: theme.spacing(2),

  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  color: 'white',
  fontSize: '2rem',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0.5rem 3rem',
  boxSizing: 'border-box',
  width: '52rem',
  gap: theme.spacing(1),
  marginTop: theme.spacing(10),

  [theme.breakpoints.down('md')]: {
    maxWidth: '40rem',
    padding: '0.4rem 2.7rem',
  },

  [theme.breakpoints.down('sm')]: {
    maxWidth: '19rem',
    padding: '0.7rem 0.5rem',
    marginTop: theme.spacing(4),
  },
}));

export const StyledInput = styled(InputBase)(({ theme }) => ({
  borderBottom: '0.625rem solid white',
  color: 'white',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    borderBottom: `0.2rem solid white`,
  },

  [theme.breakpoints.down('sm')]: {
    borderBottom: `0.125rem solid white`,
  },
}));

export const StyledSearchButton = styled(Button)(({ theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  alignSelf: 'center',
  backgroundColor: 'white',
  color: 'currentColor',
  borderRadius: '0.125rem',
  width: '11rem',
  height: '3rem',
  fontSize: '2rem',
  padding: theme.spacing(2, 10),

  [theme.breakpoints.down('md')]: {
    width: '5rem',
    height: '1rem',
    fontSize: '1rem',
    padding: theme.spacing(1.5, 7),
  },

  [theme.breakpoints.down('sm')]: {
    width: '4rem ',
    height: '1.5rem',
    fontSize: '1rem',
    padding: theme.spacing(0, 7),
  },

  '&:hover, &:focus, &:active': {
    backgroundColor: 'white',
    boxShadow: 'none',
    outline: 'none',
    border: 'none',
    transform: 'none',
  },
}));

export const StyledFormContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(3),
}));

export const StyledArrowIcon = styled(ArrowForwardIosIcon)(({ theme }) => ({
  fontSize: '2rem',

  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

export const StorybookBgContainer = styled('div')({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '18.75rem',
  width: '100%',
  position: 'relative',
});
