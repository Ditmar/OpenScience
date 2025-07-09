import { styled } from '@mui/material/styles';
import { Icon } from '../../../utils/vite-svgr/Icon';

const BaseDiv = styled('div')({
  border: 'none',
});

const IconCircle = styled(Icon)<{ isCircle?: boolean }>(({ theme, isCircle = false }) => ({
  alignItems: 'center',
  backgroundColor: isCircle ? theme.palette.background.paper : 'transparent',
  borderRadius: '50%',
  display: 'flex',
  height: '60px',
  justifyContent: 'center',
  transition: 'background-color 0.3s ease',
  width: '60px',
  stroke: theme.customColors.secondary,
  '& > svg': {
    height: '.5rem',
    width: '.5rem',
  },
  '&:hover': {
    color: '#3994ff',
  },

  [`@media (max-width: ${theme.breakpoints.up('sm')})`]: {
    height: '2.5rem',
    width: '2.5rem',

    '& svg': {
      height: '1.25rem',
      width: '1.25rem',
    },
  },

  [`@media (max-width: ${theme.breakpoints.up('md')})`]: {
    gap: '0.5rem',
    height: '2rem',
    width: '2rem',

    '& svg': {
      height: '1rem',
      width: '1rem',
    },
  },
}));

const NavbarWrapper = styled('button')<{
  isLogout?: boolean;
}>(({ theme, isLogout }) => ({
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  outline: 'none',
  padding: '0.5rem',
  transition: 'opacity 0.3s ease, transform 0.2s ease',
  userSelect: 'none',

  '&:active': {
    boxShadow: 'none',
    opacity: 1,
    transform: 'translateY(0)',
  },

  '&:focus-visible, &:hover': {
    opacity: 0.9,
    transform: 'translateY(-3px)',

    '& .icon-circle': {
      backgroundColor: theme.customColors.secondary,

      '& svg *': {
        fill: theme.palette.background.paper,
      },
    },
  },

  ...(isLogout && {
    '& .logout-icon': {
      height: '30px',
      width: '30px',

      '& svg *': {
        color: theme.palette.background.paper,
        height: '30px',
        transition: 'fill 0.3s ease',
        width: '30px',
      },

      '&:focus-visible, &:hover': {
        '& svg *': {
          color: theme.customColors.secondary,
        },
      },
    },
  }),
}));

const Label = styled('div')(({ theme }) => ({
  color: theme.palette.background.paper,
  fontFamily: 'Roboto, sans-serif',
  fontSize: '0.9rem',
  userSelect: 'none',
}));

const LabelContainer = styled('div')({
  background: 'none',
  backgroundColor: 'transparent',
  textAlign: 'center',
});

const NavbarHeroBanner = styled('div')(({ theme }) => ({
  alignItems: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  height: '266px',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',

  '&::before': {
    backgroundColor: 'rgb(0 0 0 / 30%)',
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: 0,
  },

  [`@media (max-width: ${theme.breakpoints.up('sm')})`]: {
    height: '140px',
  },

  [`@media (max-width: ${theme.breakpoints.up('md')})`]: {
    height: '266px',
  },

  [`@media (min-width: ${theme.breakpoints.up('lg')})`]: {
    height: '300px',
  },
}));

const NavbarMenu = styled('div')({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  justifyContent: 'center',
  margin: '0 auto',
  maxWidth: '900px',
  padding: '1rem 0',
  position: 'relative',
  width: '100%',
  zIndex: 5,
  border: 'none',
});

const NavbarMenuFooter = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1rem',
  position: 'relative',
  width: '100vh',
  zIndex: 1,

  '& .visually-hidden': {
    border: 0,
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
  },
});

const OpenMenuButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: 'none',
  borderRadius: '6px',
  boxShadow: theme.shadows[22] || '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  color: theme.customColors.secondary,
  cursor: 'pointer',
  fontWeight: 600,
  padding: '0.75rem 1.5rem',
  position: 'relative',
  right: '1rem',
  top: '1rem',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  zIndex: 10,

  '&:focus-visible, &:hover': {
    backgroundColor: theme.palette.background.paper || '#your-main-color',
    boxShadow: theme.shadows[24] || '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    outline: 'none',
  },
}));

export {
  BaseDiv,
  IconCircle,
  NavbarWrapper,
  Label,
  LabelContainer,
  NavbarHeroBanner,
  NavbarMenu,
  NavbarMenuFooter,
  OpenMenuButton,
};
