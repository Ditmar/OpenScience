import { render, screen } from '@testing-library/react';
import LoginRegisterButtons from './LoginRegisterButtons';
import PrimaryButtons from '../../atoms/primary-buttons/PrimaryButtons';

describe('LoginRegisterButtons Component', () => {
  test('should render both buttons', () => {
    render(
      <LoginRegisterButtons>
        <PrimaryButtons variant="primary">Iniciar sesión</PrimaryButtons>
        <PrimaryButtons variant="tertiary">Registrarse</PrimaryButtons>
      </LoginRegisterButtons>,
    );
    const loginButton = screen.getByText(/Iniciar sesión/i);
    const registerButton = screen.getByText(/Registrarse/i);

    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});
