import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ILocationStyleProps {
  size: 'small' | 'medium' | 'large';
}

const sizeStyles = {
  gap: { small: '0.4rem', medium: '0.6rem', large: '0.8rem' },
  padding: { small: '0.5rem', medium: '1rem', large: '1.5rem' },
  fontSize: { small: '10px', medium: '12px', large: '14px' },
  fontSizeMd: { small: '11px', medium: '13px', large: '16px' },
  iconHeight: { small: '1rem', medium: '1.3rem', large: '2rem' },
  iconWidth: { small: '1.4rem', medium: '1.8rem', large: '2.8rem' },
  iconHeightMd: { small: '1.2rem', medium: '1.6rem', large: '2.3rem' },
  iconWidthMd: { small: '1.6rem', medium: '2.2rem', large: '3.2rem' },
  dividerWidth: { small: '0.12rem', medium: '0.15rem', large: '0.2rem' },
  dividerWidthMd: { small: '0.14rem', medium: '0.18rem', large: '0.25rem' },
};

export const LocationContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'size',
})<ILocationStyleProps>(({ theme, size }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  maxWidth: '800px',
  color: theme.palette.text.primary,
  gap: sizeStyles.gap[size],
  padding: sizeStyles.padding[size],
  ...(size === 'medium' && {
    justifyContent: 'flex-end',
    paddingLeft: '4rem',
  }),
  ...(size === 'small' && {
    paddingLeft: '4rem',
  }),
}));

export const LocationSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
});

export const LocationText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'size',
})<ILocationStyleProps>(({ theme, size }) => ({
  fontWeight: 300,
  textTransform: 'uppercase',
  fontSize: sizeStyles.fontSize[size],
  [theme.breakpoints.up('md')]: {
    fontSize: sizeStyles.fontSizeMd[size],
  },
}));

export const IconWrapper = styled('span', {
  shouldForwardProp: (prop) => prop !== 'size',
})<ILocationStyleProps>(({ theme, size }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    height: sizeStyles.iconHeight[size],
    width: sizeStyles.iconWidth[size],
    [theme.breakpoints.up('md')]: {
      height: sizeStyles.iconHeightMd[size],
      width: sizeStyles.iconWidthMd[size],
    },
  },
}));

export const LocationDivider = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'size',
})<ILocationStyleProps>(({ theme, size }) => ({
  alignSelf: 'stretch',
  backgroundColor: theme.palette.text.primary,
  width: sizeStyles.dividerWidth[size],
  [theme.breakpoints.up('md')]: {
    width: sizeStyles.dividerWidthMd[size],
  },
}));
