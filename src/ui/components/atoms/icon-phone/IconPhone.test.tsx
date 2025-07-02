import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import IconPhone from './IconPhone';

describe('IconPhone Component', () => {
  test('renders phone icon and text', () => {
    render(<IconPhone text="Test Phone" />);

    expect(screen.getByTestId('phone-icon')).toBeInTheDocument();
    expect(screen.getByText('Test Phone')).toBeInTheDocument();
  });

  test('renders close button when onClose is provided', () => {
    const mockOnClose = vi.fn();
    render(<IconPhone onClose={mockOnClose} />);

    const closeButton = screen.getByTestId('close-button');
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  test('disables correctly', () => {
    render(<IconPhone disabled />);
    const container = screen.getByTestId('icon-phone');
    const styles = window.getComputedStyle(container);
    expect(parseFloat(styles.opacity)).toBeLessThan(1);
  });
});
