import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberButton from './number-button';

describe('NumberButton', () => {
  test('renders button with number', () => {
    render(<NumberButton number={1} />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<NumberButton number={2} onClick={handleClick} />);
    fireEvent.click(screen.getByText('2'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<NumberButton number={3} disabled />);
    expect(screen.getByText('3')).toBeDisabled();
  });

  test('applies selected class when selected', () => {
    render(<NumberButton number={4} selected />);
    expect(screen.getByText('4')).toHaveClass('number-button--selected');
  });
});
