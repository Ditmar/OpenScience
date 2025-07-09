import { styled } from '@mui/material/styles';

interface StyledProps {
  size: 'sm' | 'md' | 'lg';
  rounded: 'r_none' | 'r_md' | 'r_full';
}

export const StyledTextCard = styled('div')<StyledProps>(({ theme, size, rounded }) => {
  const heightBySize = {
    sm: 263,
    md: 284,
    lg: 311,
  };

  const borderRadiusByRounded = {
    r_none: 0,
    r_md: theme.shape.borderRadius,
    r_full: 9999,
  };

  return {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: borderRadiusByRounded[rounded],
    width: 619,
    height: heightBySize[size],
    boxSizing: 'border-box',
    gap: theme.spacing(3),

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '100%',
      height: 'auto',
    },
  };
});

export const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
  marginBottom: 0,
}));

export const BadgeContainer = styled('div')(() => ({
  display: 'inline-flex',
  width: 'fit-content',
  maxWidth: '100%',
}));
