import React from 'react';
import type { SvgIconProps } from '@mui/material';
import ImageIconFilled from '@mui/icons-material/Image';
import ImageIconOutlined from '@mui/icons-material/ImageOutlined';
import ImageIconRounded from '@mui/icons-material/ImageRounded';
import ImageIconTwoTone from '@mui/icons-material/ImageTwoTone';
import ImageIconSharp from '@mui/icons-material/ImageSharp';
import type { IconImageProps } from './types/IProps';

const sizeMap = {
  small: 20,
  medium: 30,
  large: 40,
};

const variantMap = {
  filled: ImageIconFilled,
  outlined: ImageIconOutlined,
  rounded: ImageIconRounded,
  twoTone: ImageIconTwoTone,
  sharp: ImageIconSharp,
} as const;

function IconImage({
  size = 'medium',
  color = 'primary',
  variant = 'filled',
  className,
  sx = {},
}: IconImageProps & SvgIconProps) {
  const IconComponent = variantMap[variant];
  const fontSize = sizeMap[size];

  return (
    <IconComponent
      color={color}
      className={className}
      sx={{
        fontSize,
        ...sx,
      }}
    />
  );
}

export default IconImage;
