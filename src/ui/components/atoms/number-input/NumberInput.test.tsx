import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material';
import '@testing-library/jest-dom';
import { vi, describe, it, afterEach } from 'vitest';

import PhoneNumberInput from './NumberInput';
import type { PhoneNumberInputProps } from './types/IProps';

vi.mock('@mui/icons-material', () => {
  return {
    ArrowDropDown: () => <svg data-testid="arrow-drop-down-mock" />,
    ArrowDropUp: () => <svg data-testid="arrow-drop-up-mock" />,
  };
});

const theme = createTheme();
const mockOnChange = vi.fn();

const renderComponent = ({
  value = '',
  onChange = mockOnChange,
  size = 'medium' as const,
  borderRadius = 'rounded' as const,
  state = 'default' as const,
}: Partial<PhoneNumberInputProps> = {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <PhoneNumberInput
        value={value}
        onChange={onChange}
        size={size}
        borderRadius={borderRadius}
        state={state}
      />
    </ThemeProvider>,
  );
};

describe('PhoneNumberInput', () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('renders correctly with default props', () => {
    renderComponent();

    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument();
    expect(screen.getByText('(+54)')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByAltText('Flag')).toBeInTheDocument();
    expect(screen.getByAltText('Phone icon')).toBeInTheDocument();
  });

  it('calls onChange with only numbers when typing', () => {
    renderComponent();

    const input = screen.getByPlaceholderText('Phone Number');
    fireEvent.change(input, { target: { value: '123abc456' } });

    expect(mockOnChange).toHaveBeenCalledWith('123456');
  });

  it('toggles dropdown open and closed when clicking button', async () => {
    renderComponent();

    const button = screen.getByRole('button');

    expect(screen.getByText('Country List')).not.toBeVisible();

    fireEvent.click(button);
    expect(screen.getByText('Country List')).toBeVisible();

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Country List')).not.toBeVisible();
    });
  });

  it('does not open dropdown if disabled', () => {
    renderComponent({ state: 'disabled' });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByText('Country List')).not.toBeVisible();
  });

  it('shows mocked ArrowDropUp and ArrowDropDown icons', () => {
    renderComponent();

    expect(screen.getByTestId('arrow-drop-down-mock')).toBeInTheDocument();

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByTestId('arrow-drop-up-mock')).toBeInTheDocument();
  });
});
