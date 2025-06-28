import React from 'react';
import { Button, Stack } from '@mui/material';
import type { AuthButtonsProps } from './types/iProps';

function AuthButtons(props: AuthButtonsProps) {
  const { onLogin, onRegister, loading = false, disabled = false } = props;

  return (
    <Stack
      spacing={2}
      direction={{ xs: 'column', sm: 'row' }}
      aria-label="Botones de autenticación"
    >
      <Button
        variant="outlined"
        color="inherit"
        onClick={onLogin}
        disabled={disabled}
        aria-label="Iniciar sesión"
        data-testid="login-button"
        sx={{
          fontWeight: 'bold',
          color: '#ffffff',
          borderColor: '#ffffff',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
        fullWidth
      >
        {loading ? 'Cargando...' : 'INICIAR SESIÓN'}
      </Button>

      <Button
        variant="contained"
        onClick={onRegister}
        disabled={disabled}
        aria-label="Registrarse"
        data-testid="register-button"
        sx={{
          fontWeight: 'bold',
          backgroundColor: '#003c2f',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#005645',
          },
        }}
        fullWidth
      >
        {loading ? 'Cargando...' : 'REGISTRARSE'}
      </Button>
    </Stack>
  );
}

export default AuthButtons;
