// src/components/atoms/MyCheckbox/MyCheckbox.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../../../style-library/themes/default';

import MyCheckbox from './MyCheckbox';
import '@testing-library/jest-dom';

describe('MyCheckbox (Without test-utils.tsx)', () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
  };

  test('should render and be unchecked by default', () => {
    renderWithTheme(<MyCheckbox onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('should render and be checked when `checked` prop is true', () => {
    renderWithTheme(<MyCheckbox checked onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  test('should render and be disabled when `disabled` prop is true', () => {
    renderWithTheme(<MyCheckbox onChange={mockOnChange} disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  test('should not be disabled by default', () => {
    renderWithTheme(<MyCheckbox onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeDisabled();
  });

  test('should call `onChange` with true when clicked and unchecked', () => {
    renderWithTheme(<MyCheckbox onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  test('should call `onChange` with false when clicked and checked', () => {
    renderWithTheme(<MyCheckbox checked onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(false);
  });

  test('should NOT call `onChange` when disabled and clicked', () => {
    renderWithTheme(<MyCheckbox onChange={mockOnChange} disabled />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  test('should have the correct `role="checkbox"`', () => {
    renderWithTheme(<MyCheckbox onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('role', 'checkbox');
  });

  test('should have the correct `aria-checked` attribute', () => {
    const { rerender } = renderWithTheme(<MyCheckbox onChange={mockOnChange} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'false');

    rerender(
      <ThemeProvider theme={lightTheme}>
        <MyCheckbox checked onChange={mockOnChange} />
      </ThemeProvider>,
    );
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });

  test('should have the `aria-disabled` attribute when disabled', () => {
    renderWithTheme(<MyCheckbox onChange={mockOnChange} disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-disabled', 'true');
  });

  test('should match snapshot when unchecked by default', () => {
    const { asFragment } = renderWithTheme(<MyCheckbox onChange={mockOnChange} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
