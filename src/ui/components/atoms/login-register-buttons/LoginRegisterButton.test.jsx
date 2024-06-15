import { render, screen } from '@testing-library/react';
import LoginRegisterButtons from './LoginRegisterButtons.tsx';

describe('LoginRegisterButtons Component', () => {
  test('should render both buttons', () => {
    render(<LoginRegisterButtons />);
    const loginButton = screen.getByText(/Iniciar sesión/i);
    const registerButton = screen.getByText(/Registrarse/i);

    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});
