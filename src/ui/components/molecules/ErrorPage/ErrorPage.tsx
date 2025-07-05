import React from 'react';
import { Typography, Stack, useTheme } from '@mui/material';
import type { ErrorPageProps } from './types/IProps';

export function ErrorPage({ code, title, message }: ErrorPageProps) {
  const theme = useTheme();

  return (
    <Stack
      spacing={1.5}
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        textAlign: 'center',
        backgroundColor: theme.palette.background.default,
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '5rem', sm: '6rem', md: '8rem' },
          fontWeight: theme.typography.fontWeightBold,
          color: theme.palette.olitemPalette.brandBlue,
          lineHeight: 1,
        }}
      >
        {code}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: theme.typography.fontWeightMedium,
          color: theme.palette.olitemPalette.brandBlue,
        }}
      >
        {title}
      </Typography>
      {message && (
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.olitemPalette.brandBlue,
            maxWidth: 500,
          }}
        >
          {message}
        </Typography>
      )}
    </Stack>
  );
}
