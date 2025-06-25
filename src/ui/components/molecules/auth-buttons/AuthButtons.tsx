import React from 'react';
import { Button } from '@mui/material';
import type { AuthButtonsProps } from './types/iProps';
import LoginRegisterButtons from '../login-register-buttons/LoginRegisterButtons';

function AuthButtons(props: AuthButtonsProps) {
  const { onLogin, onRegister, loading = false, disabled = false } = props;

  return (
    <LoginRegisterButtons>
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
          marginRight: '1rem',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
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
      >
        {loading ? 'Cargando...' : 'REGISTRARSE'}
      </Button>
    </LoginRegisterButtons>
  );
}

export default AuthButtons;
