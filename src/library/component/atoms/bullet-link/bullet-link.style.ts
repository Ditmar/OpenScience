import { styled } from '@mui/material/styles';

export const Root = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.text.quintary_main,
  fontFamily: theme.typography.textLato.fontFamily,
  fontSize: theme.typography.body3.fontSize,
  fontWeight: theme.typography.body3.fontWeight,
  padding: theme.spacing(0.1, 0),
}));

export const Bullet = styled('span')(({ theme }) => ({
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: theme.palette.text.quintary_main,
  marginRight: theme.spacing(1),
  transition: 'transform 0.2s ease-in-out',
  flexShrink: 0,
  '&:hover': {
    transform: 'scale(1.3)',
  },
}));
