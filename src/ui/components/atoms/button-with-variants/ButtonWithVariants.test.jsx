import { render, screen } from '@testing-library/react';
import ButtonWithVariants from './ButtonWithVariants';

describe('Button', () => {
  test('renders button with icon', () => {
    render(<ButtonWithVariants icon="<svg>...</svg>" />);
    const iconElement = screen.getByTestId('button__icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('applies size class correctly', () => {
    render(<ButtonWithVariants size="large" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('button--large');
  });

  test('applies color class correctly', () => {
    render(<ButtonWithVariants color="primary" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('button--primary');
  });

  test('is disabled when disabled prop is true', () => {
    render(<ButtonWithVariants disabled />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });
});
