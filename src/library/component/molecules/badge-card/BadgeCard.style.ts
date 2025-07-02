import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

type BadgeColor = 'primary' | 'secondary' | 'warning' | 'success' | 'danger';

interface StyledBadgeCardProps {
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'r_none' | 'r_md' | 'r_full';
  backgroundColor?: BadgeColor;
}

export const StyledBadgeCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'size' && prop !== 'rounded' && prop !== 'backgroundColor',
})<StyledBadgeCardProps>(({
  theme,
  size = 'md',
  rounded = 'r_md',
  backgroundColor = 'primary',
}) => {
  const paddingMap = {
    sm: { top: 4, right: 8, bottom: 4, left: 4 },
    md: { top: 4, right: 8, bottom: 4, left: 4 },
    lg: { top: 4, right: 8, bottom: 4, left: 4 },
  };

  const heightMap = {
    sm: 33,
    md: 36,
    lg: 39,
  };

  const borderRadiusMap = {
    r_none: 0,
    r_md: theme.spacing(1),
    r_full: theme.spacing(99),
  };

  const badgeCardPalette = theme.palette.badgeCard as
    | {
        primary: string;
        secondary: string;
        warning: string;
        success: string;
        danger: string;
      }
    | undefined;

  const bgColorValue = badgeCardPalette?.[backgroundColor] ?? theme.palette.background.paper;

  const gapMap = {
    sm: 6,
    md: 8,
    lg: 10,
  };

  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: gapMap[size],
    height: heightMap[size],
    paddingTop: paddingMap[size].top,
    paddingRight: paddingMap[size].right,
    paddingBottom: paddingMap[size].bottom,
    paddingLeft: paddingMap[size].left,
    borderRadius: borderRadiusMap[rounded],
    backgroundColor: bgColorValue,
    boxSizing: 'border-box',
  };
});
