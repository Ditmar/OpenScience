import React from 'react';
import Typography from '@mui/material/Typography';

interface CountryTextProps {
  text: string;
  variant: 'name' | 'dialCode';
}

export function CountryText({ text, variant }: CountryTextProps): JSX.Element {
  if (variant === 'name') {
    return (
      <Typography component="span" variant="body1" sx={{ flexGrow: 1, fontWeight: 'medium' }}>
        {text}
      </Typography>
    );
  }
  return (
    <Typography component="span" variant="body2" color="text.secondary">
      ({text})
    </Typography>
  );
}
