import React from 'react';
import { Box, Stack } from '@mui/material';
import type { AuthButtonsProps } from './types/iProps';
import LoginButton from '../../atoms/LoginButton/LoginButton';
import RegisterButton from '../../atoms/RegisterButton/RegisterButton';
import backgroundImage from '../../assets/background-auth.png';

export default function AuthButtons({
  onLogin,
  onRegister,
  loading = false,
  disabled = false,
}: AuthButtonsProps) {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '250px',
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Stack spacing={4} direction="row" alignItems="center" justifyContent="center">
        <LoginButton onClick={onLogin} loading={loading} disabled={disabled} />
        <RegisterButton onClick={onRegister} loading={loading} disabled={disabled} />
      </Stack>
    </Box>
  );
}
