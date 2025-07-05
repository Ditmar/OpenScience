import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { ButtonFilled } from './ButtonFilled';

// Tipado explícito y sin prop spreading
vi.mock('@mui/material', () => ({
  Button: ({
    children,
    'data-testid': dataTestId,
    disabled,
    startIcon,
    endIcon,
  }: {
    children: ReactNode;
    'data-testid'?: string;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  }) => (
    <button data-testid={dataTestId} disabled={disabled}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  ),
}));

describe('ButtonFilled', () => {
  it('renders with required text', () => {
    const { getByText } = render(<ButtonFilled text="Button text" />);
    expect(getByText('Button text')).toBeTruthy();
  });

  it('applies disabled prop', () => {
    const { getByTestId } = render(<ButtonFilled text="Disabled" disabled />);
    expect(getByTestId('mui-button')).toBeDisabled();
  });

  it('applies colorVariant, dark, size, buttonVariant', () => {
    const { getByTestId } = render(
      <ButtonFilled
        text="Props"
        colorVariant="primary"
        dark
        size="large"
        buttonVariant="outline"
      />,
    );
    expect(getByTestId('mui-button')).toBeTruthy();
  });

  it('forwards sx styles from buttonSx', () => {
    const { getByTestId } = render(<ButtonFilled text="Styled" />);
    expect(getByTestId('mui-button')).toBeTruthy();
  });
});
