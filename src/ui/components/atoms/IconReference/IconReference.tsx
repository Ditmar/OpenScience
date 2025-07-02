import React from 'react';
import { SvgIcon } from '@mui/material';
import type { SvgIconProps } from '@mui/material';
import type { IconReferenceProps } from './types/IProps';

const sizeMap = {
  small: 20,
  medium: 30,
  large: 40,
};

function IconReference({
  size = 'medium',
  color = 'primary',
  className,
  sx = {},
}: IconReferenceProps & SvgIconProps) {
  const fontSize = sizeMap[size];

  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fontSize="inherit"
      color={color}
      className={className}
      sx={{
        fontSize,
        ...sx,
      }}
    >
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontFamily="Roboto, Arial, sans-serif"
        fontWeight="bold"
        fontSize="16"
        fill="currentColor"
      >
        R
      </text>
    </SvgIcon>
  );
}

export default IconReference;
