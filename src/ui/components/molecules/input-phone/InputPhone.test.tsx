import React from 'react';
import { screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi, describe, it, afterEach } from 'vitest';
import InputPhone from './InputPhone';
import { renderWithTheme } from '../../../../testUtils/renderWithTheme';

vi.mock('@mui/icons-material', () => ({
  __esModule: true,
  ArrowDropDown: () => <svg data-testid="arrow-drop-down-mock" />,
  ArrowDropUp: () => <svg data-testid="arrow-drop-up-mock" />,
  SettingsInputComponentSharp: () => <svg data-testid="settings-icon-mock" />,
}));

describe('InputPhone Component', () => {
  const mockOnChange = vi.fn();
  const mockOnClose = vi.fn();

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders phone icon, input and hint when props provided', () => {
    renderWithTheme(
      <InputPhone
        iconText="My Icon"
        hintText="Helpful hint"
        onChange={mockOnChange}
        onClose={mockOnClose}
      />,
    );
    expect(screen.getByTestId('phone-icon')).toBeInTheDocument();
    expect(screen.getByText('My Icon')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument();
    expect(screen.getByText('Helpful hint')).toBeInTheDocument();
  });

  it('strips non-numeric chars from the input value', () => {
    renderWithTheme(<InputPhone onChange={mockOnChange} />);
    const input = screen.getByPlaceholderText('Phone Number');
    fireEvent.change(input, { target: { value: '555abc123' } });
    expect((input as HTMLInputElement).value).toBe('555123');
  });

  it('calls onClose when close button clicked', () => {
    renderWithTheme(<InputPhone onClose={mockOnClose} />);
    const btn = screen.getByTestId('close-button');
    fireEvent.click(btn);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('disables all elements when disabled prop is true', () => {
    renderWithTheme(<InputPhone disabled onChange={mockOnChange} onClose={mockOnClose} />);
    const iconPhone = screen.getByTestId('icon-phone');
    expect(parseFloat(window.getComputedStyle(iconPhone).opacity)).toBeLessThan(1);
    const input = screen.getByPlaceholderText('Phone Number');
    expect(input).toBeDisabled();
    const hintEl = screen.queryByTestId('hint-text');
    if (hintEl) {
      expect(parseFloat(window.getComputedStyle(hintEl).opacity)).toBeLessThan(1);
    }
  });

  it('does not render hint when hintText is not provided', () => {
    renderWithTheme(<InputPhone />);
    expect(screen.queryByTestId('hint-text')).toBeNull();
  });

  it('toggles arrow icon when dropdown state changes', () => {
    renderWithTheme(<InputPhone onChange={mockOnChange} />);
    expect(screen.getByTestId('arrow-drop-down-mock')).toBeInTheDocument();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByTestId('arrow-drop-up-mock')).toBeInTheDocument();
  });
});
