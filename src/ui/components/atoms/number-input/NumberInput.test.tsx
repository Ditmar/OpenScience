import { vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PhoneNumberInput from './NumberInput';
import styles from './NumberInput.module.scss';

describe('PhoneNumberInput component', () => {
  test('renders with default props', () => {
    render(<PhoneNumberInput />);
    const input = screen.getByPlaceholderText('Phone Number');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(styles.input);
  });

  test('accepts only numbers', () => {
    const handleChange = vi.fn();
    render(<PhoneNumberInput onChange={handleChange} />);
    const input = screen.getByPlaceholderText('Phone Number');
    fireEvent.change(input, { target: { value: 'abc123' } });
    expect(handleChange).toHaveBeenCalledWith('123');
  });

  test('applies correct size and border radius', () => {
    render(<PhoneNumberInput size="large" borderRadius="rounded" />);
    const container = screen.getByPlaceholderText('Phone Number').parentElement;
    expect(container?.className).toMatch(/large/);
    expect(container?.className).toMatch(/rounded/);
  });
});
