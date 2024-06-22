import { render, fireEvent } from '@testing-library/react';
import eye from '../../../../assets/icons/eye.svg?raw';
import InputText from './InputText';

describe('InputText Component', () => {
  it('renders with label and placeholder correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <InputText
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        isValid
        onChangeValue={() => {}}
        id=""
        value=""
      />,
    );

    expect(getByText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter your email')).toBeInTheDocument();
  });

  it('toggles password visibility correctly', () => {
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

  it('calls onChangeValue handler on input change', () => {
    let capturedValue = '';
    const mockOnChangeValue = (value: { value: string }) => {
      capturedValue = value.value;
    };

    const { getByRole } = render(
      <InputText
        label="Nombre"
        type="text"
        name="name"
        placeholder=""
        isValid
        onChangeValue={mockOnChangeValue}
        id=""
        value=""
      />,
    );
    const nameInput = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    setTimeout(() => {
      expect(capturedValue).toBe('John Doe');
    }, 300);
  });
});
