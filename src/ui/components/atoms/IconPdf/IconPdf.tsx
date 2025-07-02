import React from 'react';
import type { SvgIconProps } from '@mui/material';
import PictureAsPdfIconFilled from '@mui/icons-material/PictureAsPdf';
import PictureAsPdfIconOutlined from '@mui/icons-material/PictureAsPdfOutlined';
import PictureAsPdfIconRounded from '@mui/icons-material/PictureAsPdfRounded';
import PictureAsPdfIconTwoTone from '@mui/icons-material/PictureAsPdfTwoTone';
import PictureAsPdfIconSharp from '@mui/icons-material/PictureAsPdfSharp';
import type { IconPdfProps } from './types/IProps';

const sizeMap = {
  small: 20,
  medium: 30,
  large: 40,
};

const variantMap = {
  filled: PictureAsPdfIconFilled,
  outlined: PictureAsPdfIconOutlined,
  rounded: PictureAsPdfIconRounded,
  twoTone: PictureAsPdfIconTwoTone,
  sharp: PictureAsPdfIconSharp,
} as const;

function IconPdf({
  size = 'medium',
  color = 'primary',
  variant = 'filled',
  className,
  sx = {},
}: IconPdfProps & SvgIconProps) {
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

export default IconPdf;
