import { styled } from '@mui/material/styles';

interface StyledProps {
  size: 'sm' | 'md' | 'lg';
  rounded: 'r_none' | 'r_md' | 'r_full';
}

export const StyledTextCard = styled('div')<StyledProps>(({ theme, size, rounded }) => {
  const paddingBySize = {
    sm: theme.spacing(1),
    md: theme.spacing(2),
    lg: theme.spacing(3),
  };

  const borderRadiusByRounded = {
    r_none: 0,
    r_md: theme.shape.borderRadius,
    r_full: 9999,
  };

  const maxWidthBySize = {
    sm: 280,
    md: 300,
    lg: 640,
  };

  return {
    display: 'flex',
    flexDirection: 'column',
    padding: paddingBySize[size],
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: borderRadiusByRounded[rounded],
    maxWidth: maxWidthBySize[size],
    width: 'auto',
    boxSizing: 'border-box',
    gap: theme.spacing(1),

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      maxWidth: '100%',
      width: '100%',
    },
  };
});

export const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
  gap: theme.spacing(2),
}));
