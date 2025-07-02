import React from 'react';
import type { SvgIconProps } from '@mui/material';
import LinkIconFilled from '@mui/icons-material/Link';
import LinkIconOutlined from '@mui/icons-material/LinkOutlined';
import LinkIconRounded from '@mui/icons-material/LinkRounded';
import LinkIconTwoTone from '@mui/icons-material/LinkTwoTone';
import LinkIconSharp from '@mui/icons-material/LinkSharp';
import type { IconLinkProps } from './types/IProps';

const sizeMap = {
  small: 20,
  medium: 30,
  large: 40,
};

const variantMap = {
  filled: LinkIconFilled,
  outlined: LinkIconOutlined,
  rounded: LinkIconRounded,
  twoTone: LinkIconTwoTone,
  sharp: LinkIconSharp,
} as const;

function IconLink({
  size = 'medium',
  color = 'primary',
  variant = 'filled',
  className,
  sx = {},
}: IconLinkProps & SvgIconProps) {
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

export default IconLink;
