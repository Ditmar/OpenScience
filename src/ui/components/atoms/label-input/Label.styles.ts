import { Box, styled, Typography } from '@mui/material';
import { Icon } from '../../../utils/vite-svgr/Icon';
import type { LabelProps, Size } from './types/IProps';

export const StyledLabelWrapper = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: theme.spacing(0.6), // 0.3rem

  '& > *': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const StyledIcon = styled(Icon)<{ iconSize?: Size }>(({ iconSize = 'medium' }) => {
  const sizes = {
    small: '0.75rem',
    medium: '1rem',
    large: '1.25rem',
  };

  return {
    height: sizes[iconSize],
    width: sizes[iconSize],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& path': {
      fill: 'currentColor',
    },

    '& svg': {
      width: '100%',
      height: '100%',
    },
  };
});

export const Required = styled('span')(({ theme }) => ({
  color: theme.palette.error.main,
}));

export const LabelUi = styled(Typography)<LabelProps>(({ size = 'medium' }) => {
  const sizes = {
    small: '0.75rem',
    medium: '1rem',
    large: '1.25rem',
  };

  return {
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.3rem',
    fontSize: sizes[size],
    color: 'inherit',
  };
});