import React from 'react';
import { Typography, Stack } from '@mui/material';
import type { ErrorPageProps } from './types/IProps';

export function ErrorPage({ code, title, message }: ErrorPageProps) {
  return (
    <Stack
      spacing={1.5}
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '5rem', sm: '6rem', md: '8rem' },
          fontWeight: 700,
          color: '#0095cc',
          lineHeight: 1,
        }}
      >
        {code}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          color: '#0095cc',
        }}
      >
        {title}
      </Typography>
      {message && (
        <Typography variant="body1" sx={{ color: '#0095cc', maxWidth: 500 }}>
          {message}
        </Typography>
      )}
    </Stack>
  );
}
