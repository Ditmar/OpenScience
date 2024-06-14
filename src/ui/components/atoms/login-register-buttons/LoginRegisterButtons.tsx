import React from 'react';
import Button from './Button';
import './styles.scss';

function LoginRegisterButtons() {
  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  const handleRegisterClick = () => {
    window.location.href = '/register';
  };

  return (
    <div className="auth-buttons">
      <Button variant="primary" onClick={handleLoginClick}>
        INICIAR SESIÓN
      </Button>
      <Button variant="secondary" onClick={handleRegisterClick}>
        REGISTRARSE
      </Button>
    </div>
  );
}

export default LoginRegisterButtons;
