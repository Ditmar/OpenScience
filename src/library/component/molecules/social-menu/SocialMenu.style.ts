import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import type { ISocialMenuProps } from './types/IProps';
import tokens from '../../../../style-library/themes/tokens/tokens';

export const SocialMenuContainer = styled(Box)<{
  orientation: ISocialMenuProps['orientation'];
  backgroundColor?: string;
}>(({ theme, orientation, backgroundColor }) => ({
  display: 'flex',
  flexDirection: orientation === 'vertical' ? 'column' : 'row',
  gap: theme.spacing(0),
  backgroundColor: backgroundColor ?? tokens.colors?.quintary_main,
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
    small: 32,
    medium: 40,
    large: 48,
  };

  const getSocialColor = () => {
    switch (socialType) {
      case 'whatsapp':
        return tokens.colors?.green_main;
      case 'telegram':
        return tokens.colors?.tertiary;
      case 'facebook':
        return tokens.colors?.brand_bg;
      default:
        return theme.palette.primary.main;
    }
  };

  const buttonColor = backgroundColor ?? getSocialColor();
  const socialColor = getSocialColor();

  if (socialType === 'telegram') {
    return {
      width: sizeMap[size],
      height: sizeMap[size],
      backgroundColor: tokens.colors?.main,
      color: buttonColor,
      margin: theme.spacing(0.25),
      border: 'none',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: theme.shadows[2],
      transition: theme.transitions.create(
        ['transform', 'box-shadow', 'background-color', 'color'],
        {
          duration: theme.transitions.duration.short,
        },
      ),

      '& .MuiSvgIcon-root': {
        fontSize: iconSizeMap[size],
        color: buttonColor,
        transition: theme.transitions.create(['color'], {
          duration: theme.transitions.duration.short,
        }),
      },

      '&:hover': {
        backgroundColor: tokens.colors?.main,
        transform: 'scale(1.1)',
        boxShadow: theme.shadows[6],
        '& .MuiSvgIcon-root': {
          color: socialColor,
        },
      },

      '&:focus': {
        backgroundColor: tokens.colors?.main,
        outline: `2px solid ${socialColor ?? ''}`,
        outlineOffset: '2px',
        '& .MuiSvgIcon-root': {
          color: socialColor,
        },
      },

      '&:active': {
        transform: 'scale(0.95)',
      },

      '&:focus-visible': {
        outline: `3px solid ${socialColor ?? ''}`,
        outlineOffset: '2px',
      },
    };
  }

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
