import { render, screen } from '@testing-library/react';
import Button from './Button.tsx';
import LoginRegisterButtons from './LoginRegisterButtons.tsx';

describe('Button Component', () => {
  test('should render Iniciar sesión button', () => {
    render(<Button variant="primary">Iniciar sesión</Button>);
    const buttonElement = screen.getByText(/Iniciar sesión/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should render Registrarse button', () => {
    render(<Button variant="secondary">Registrarse</Button>);
    const buttonElement = screen.getByText(/Registrarse/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

describe('AuthButtons Component', () => {
  test('should render both buttons', () => {
    render(<LoginRegisterButtons />);
    const loginButton = screen.getByText(/Iniciar sesión/i);
    const registerButton = screen.getByText(/Registrarse/i);

    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});
