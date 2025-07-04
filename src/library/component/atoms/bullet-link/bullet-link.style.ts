import { styled } from '@mui/material/styles';

export const Root = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.text.quintary_main,
  fontFamily: theme.typography.fontFamily,
  fontSize: 14,
  fontWeight: 400,
  padding: theme.spacing(0.3, 0),
  lineHeight: 1.2,
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: theme.palette.text.primary_alpha,
  },
}));

export const Bullet = styled('span')(({ theme }) => ({
  width: 5,
  height: 5,
  borderRadius: '50%',
  backgroundColor: theme.palette.text.quintary_main,
  marginRight: 3.5,
  transition: 'transform 0.2s ease-in-out',
  flexShrink: 0,
  '&:hover': {
    transform: 'scale(1.2)',
  },
}));
