import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithTheme } from '../../../../testUtils/renderWithTheme';
import IconPhone from './IconPhone';

describe('IconPhone Component', () => {
  test('renders phone icon and text', () => {
    renderWithTheme(<IconPhone text="Test Phone" />);

    expect(screen.getByTestId('phone-icon')).toBeInTheDocument();
    const text = screen.getByText('Test Phone');
    expect(text).toBeInTheDocument();
    const textStyles = window.getComputedStyle(text);
    expect(textStyles.fontFamily).toMatch(/Poppins/);
    expect(textStyles.fontWeight).toBe('400');
    expect(textStyles.color).toBeDefined();
  });

  test('renders close button when onClose is provided', () => {
    const mockOnClose = vi.fn();
    renderWithTheme(<IconPhone onClose={mockOnClose} />);

    const closeButton = screen.getByTestId('close-button');
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  test('disables correctly', () => {
    renderWithTheme(<IconPhone disabled />);
    const container = screen.getByTestId('icon-phone');
    const styles = window.getComputedStyle(container);
    expect(parseFloat(styles.opacity)).toBeLessThan(1);
  });
});
