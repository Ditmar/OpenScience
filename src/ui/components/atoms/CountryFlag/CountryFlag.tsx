import React from 'react';
import Avatar from '@mui/material/Avatar';

interface CountryFlagProps {
  src: string;
  alt: string;
  size?: number;
}

export function CountryFlag({ src, alt, size = 24 }: CountryFlagProps): JSX.Element {
  return <Avatar src={src} alt={alt} sx={{ width: size, height: size, marginRight: 1.5 }} />;
}
