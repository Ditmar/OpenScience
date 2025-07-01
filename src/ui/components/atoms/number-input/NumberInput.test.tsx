import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
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
  onCountryButtonClick,
  isOpen = false,
}: Partial<PhoneNumberInputProps> = {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <PhoneNumberInput
        value={value}
        onChange={onChange}
        size={size}
        borderRadius={borderRadius}
        state={state}
        onCountryButtonClick={onCountryButtonClick}
        isOpen={isOpen}
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

  it('calls onCountryButtonClick when clicking button and not disabled', () => {
    const onCountryButtonClick = vi.fn();
    renderComponent({ onCountryButtonClick });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onCountryButtonClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onCountryButtonClick if disabled', () => {
    const onCountryButtonClick = vi.fn();
    renderComponent({ state: 'disabled', onCountryButtonClick });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onCountryButtonClick).not.toHaveBeenCalled();
  });

  it('shows mocked ArrowDropUp and ArrowDropDown icons', () => {
    const { unmount } = renderComponent();

    expect(screen.getByTestId('arrow-drop-down-mock')).toBeInTheDocument();

    unmount();

    renderComponent({ isOpen: true });

    expect(screen.getByTestId('arrow-drop-up-mock')).toBeInTheDocument();
  });
});
