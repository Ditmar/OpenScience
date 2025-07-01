import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import type { ISocialMenuProps } from './types/IProps';

export const SocialMenuContainer = styled(Box)<{
  orientation: ISocialMenuProps['orientation'];
  backgroundColor?: string;
}>(({ theme, orientation, backgroundColor }) => ({
  display: 'flex',
  flexDirection: orientation === 'vertical' ? 'column' : 'row',
  gap: theme.spacing(0),
  backgroundColor: backgroundColor ?? '#0793BF',
  padding: theme.spacing(0.5),
  boxShadow: theme.shadows[4],
  zIndex: theme.zIndex.fab,
  width: 'fit-content',
}));

export const SocialIconButton = styled(IconButton)<{
  socialType: 'whatsapp' | 'telegram' | 'facebook';
  size: 'small' | 'medium' | 'large';
  backgroundColor?: string;
}>(({ theme, socialType, size, backgroundColor }) => {
  const sizeMap = {
    small: 32,
    medium: 40,
    large: 48,
  };

  const iconSizeMap = {
    small: 18,
    medium: 24,
    large: 30,
  };

  const getSocialColor = () => {
    switch (socialType) {
      case 'whatsapp':
        return '#25D366';
      case 'telegram':
        return '#0088cc';
      case 'facebook':
        return '#1877f2';
      default:
        return theme.palette.primary.main;
    }
  };

  const buttonColor = backgroundColor ?? getSocialColor();
  const socialColor = getSocialColor();

  return {
    width: sizeMap[size],
    height: sizeMap[size],
    backgroundColor: buttonColor,
    color: 'white',
    margin: theme.spacing(0.25),
    border: 'none',
    transition: theme.transitions.create(['transform', 'box-shadow', 'background-color'], {
      duration: theme.transitions.duration.short,
    }),

    '& .MuiSvgIcon-root': {
      fontSize: iconSizeMap[size],
      color: 'white',
      transition: theme.transitions.create(['color'], {
        duration: theme.transitions.duration.short,
      }),
    },

    '&:hover': {
      backgroundColor: socialColor,
      transform: 'scale(1.1)',
      boxShadow: theme.shadows[6],

      '& .MuiSvgIcon-root': {
        color: 'white',
      },
    },

    '&:focus': {
      backgroundColor: socialColor,
      outline: `2px solid white`,
      outlineOffset: '2px',

      '& .MuiSvgIcon-root': {
        color: 'white',
      },
    },

    '&:active': {
      transform: 'scale(0.95)',
    },

    '&:focus-visible': {
      outline: `3px solid white`,
      outlineOffset: '2px',
    },
  };
});
