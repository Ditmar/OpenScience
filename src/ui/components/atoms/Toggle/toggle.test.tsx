import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Toggle from './toggle';
import '@testing-library/jest-dom';
import styles from './toggle.module.scss';

describe('Toggle Component', () => {
  test('renders with default props', () => {
    render(<Toggle checked={false} onChange={() => {}} />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  test('toggles when clicked', () => {
    const handleChange = vi.fn();
    render(<Toggle checked={false} onChange={handleChange} />);
    fireEvent.click(screen.getByRole('switch'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  test('handles keyboard events', () => {
    const handleChange = vi.fn();
    render(<Toggle checked={false} onChange={handleChange} />);
    const toggle = screen.getByRole('switch');
    fireEvent.keyDown(toggle, { key: ' ' });
    fireEvent.keyDown(toggle, { key: 'Enter' });
    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  test('displays all variants correctly', () => {
    render(<Toggle checked variant="default" onChange={() => {}} />);
    const toggleElement = screen.getByRole('switch');
    expect(toggleElement).toBeInTheDocument();
    expect(toggleElement).toHaveClass(styles['toggle--default']);
  });

  test('shows disabled state', () => {
    render(<Toggle checked={false} disabled onChange={() => {}} />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  test('accepts custom test id', () => {
    render(<Toggle checked={false} onChange={() => {}} data-testid="custom-id" />);
    expect(screen.getByTestId('custom-id')).toBeInTheDocument();
  });
});