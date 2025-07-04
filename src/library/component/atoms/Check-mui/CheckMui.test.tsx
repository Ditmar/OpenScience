import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../../../style-library/themes/default';
import CheckMui from './CheckMui';
import type { IProps } from './types/IProps';

const renderWithTheme = ({ disabled, variant, onChange, name, value, checked }: IProps = {}) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <CheckMui
        disabled={disabled}
        variant={variant}
        onChange={onChange}
        name={name}
        value={value}
        checked={checked}
      />
    </ThemeProvider>,
  );

describe('CheckMui', () => {
  test('renderiza el checkbox con props básicas', () => {
    renderWithTheme({ variant: 'brand-primary', name: 'test-checkbox' });
    const checkbox = screen.getByRole('checkbox', { name: '' });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('checkbox puede ser marcado y desmarcado', () => {
    const handleChange = vi.fn();
    renderWithTheme({
      variant: 'brand-primary',
      name: 'test-checkbox',
      onChange: handleChange,
    });
    const checkbox = screen.getByRole('checkbox', { name: '' });
    expect(checkbox).not.toBeChecked();

    checkbox.click();
    expect(handleChange).toHaveBeenCalled();
  });

  test('checkbox está deshabilitado si disabled es true', () => {
    renderWithTheme({
      variant: 'brand-primary',
      name: 'test-checkbox',
      disabled: true,
    });
    const checkbox = screen.getByRole('checkbox', { name: '' });
    expect(checkbox).toBeDisabled();
  });
});
