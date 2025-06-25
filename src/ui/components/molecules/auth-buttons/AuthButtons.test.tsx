import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import AuthButtons from './AuthButtons';

describe('AuthButtons', () => {
  test('renderiza ambos botones correctamente', () => {
    render(<AuthButtons onLogin={() => {}} onRegister={() => {}} />);
    expect(screen.getByLabelText('Iniciar sesión')).toBeInTheDocument();
    expect(screen.getByLabelText('Registrarse')).toBeInTheDocument();
  });

  test('ejecuta callbacks al hacer click', () => {
    const onLogin = vi.fn();
    const onRegister = vi.fn();

    render(<AuthButtons onLogin={onLogin} onRegister={onRegister} />);
    fireEvent.click(screen.getByTestId('login-button'));
    fireEvent.click(screen.getByTestId('register-button'));

    expect(onLogin).toHaveBeenCalled();
    expect(onRegister).toHaveBeenCalled();
  });

  test('botones muestran estado loading', () => {
    render(<AuthButtons onLogin={() => {}} onRegister={() => {}} loading />);
    expect(screen.getByTestId('login-button')).toHaveTextContent('Cargando...');
    expect(screen.getByTestId('register-button')).toHaveTextContent('Cargando...');
  });

  test('botones deshabilitados', () => {
    render(<AuthButtons onLogin={() => {}} onRegister={() => {}} disabled />);
    expect(screen.getByTestId('login-button')).toBeDisabled();
    expect(screen.getByTestId('register-button')).toBeDisabled();
  });
});
