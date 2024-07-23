import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import InputText from '../../atoms/input-text/InputText';
import eye from '../../../../assets/icons/eye.svg?raw';

describe('LoginForm Component', () => {
  it('toggles password visibility correctly within LoginForm', () => {
    render(<LoginForm isValid onChangeValue={() => {}} />);

    const eyeIcon = screen.getByTestId('eye-icon');
    const passwordInput = document.querySelector('input[name="password"]');

    expect(passwordInput?.getAttribute('type')).toBe('password');
    fireEvent.click(eyeIcon);
    expect(passwordInput?.getAttribute('type')).toBe('text');
  });

  it('toggles password visibility correctly within InputText component', () => {
    const { getByTestId } = render(
      <InputText
        label="Contraseña"
        type="password"
        name="password"
        placeholder=""
        isValid
        eyeIcon={eye}
        onChangeValue={() => {}}
        id=""
        value=""
      />,
    );

    const eyeIcon = getByTestId('eye-icon');
    const passwordInput = document.querySelector('input[name="password"]');

    expect(passwordInput?.getAttribute('type')).toBe('password');
    fireEvent.click(eyeIcon);
    expect(passwordInput?.getAttribute('type')).toBe('text');
  });
});
