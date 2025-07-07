import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { IconProps } from './types/IProps';
import { IconContainer, StyledImg, backgroundColor } from './Icons.styles';

function Icon({
  icon,
  background,
  className,
  containerSize,
  iconWidth,
  iconHeight,
  alt,
}: IconProps) {
  const theme = useTheme();
  const getBgColor = backgroundColor[background];
  const bgcolor = getBgColor(theme);
  return (
    <Box
      component={IconContainer}
      className={className}
      bgcolor={bgcolor}
      containerSize={containerSize}
    >
      <StyledImg
        src={`data:image/svg+xml;utf8,${encodeURIComponent(icon)}`}
        alt={alt}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
      />
    </Box>
  );
}

export default Icon;
