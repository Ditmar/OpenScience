import { AppBar, Toolbar, Box, IconButton, InputBase, Button, darken } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  background: theme.customColors.navbarMain,
  padding: 0,
  margin: 0,
  height: '58px',
  borderBottom: `13px solid ${theme.customColors.navbarBorder}`,
  [theme.breakpoints.up('sm')]: {
    height: '73px',
  },
  [theme.breakpoints.up('md')]: {
    height: '78px',
  },
}));

export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  minHeight: 'inherit',
  paddingLeft: 0,
  paddingRight: theme.spacing(2),
  marginLeft: 0,
}));

export const LogoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.customColors.white,
  borderTopRightRadius: '50px',
  borderBottomRightRadius: '50px',
  width: '150px',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  margin: 0,
  position: 'relative',
  left: -20,
  [theme.breakpoints.up('sm')]: {
    width: '180px',
    height: '60px',
  },
  [theme.breakpoints.up('md')]: {
    width: '220px',
    height: '65px',
  },
}));

export const LogoImage = styled('img')({
  display: 'block',
  width: '80%',
  height: '100%',
  objectFit: 'contain',
  marginLeft: 0,
});

export const Spacer = styled(Box)({
  flexGrow: 1,
});

export const SearchIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export const SearchFormContainer = styled('form')(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const CloseIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  color: theme.palette.text.primary,
}));

export const SearchInput = styled(InputBase)(({ theme }) => ({
  fontSize: '1.2rem',
  padding: theme.spacing(2),
  borderBottom: `2px solid ${theme.customColors.navbarMain}`,
  width: '100%',
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  alignSelf: 'flex-end',
  backgroundColor: theme.customColors.navbarMain,
  '&:hover': {
    backgroundColor: darken(theme.customColors.navbarMain, 0.1),
  },
}));
