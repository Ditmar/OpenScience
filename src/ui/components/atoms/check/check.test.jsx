import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Check from './check.tsx';

describe('Check component', () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders unchecked by default', () => {
    render(<Check onChange={mockOnChange} />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('calls onChange when clicked', () => {
    render(<Check onChange={mockOnChange} />);
    const checkbox = screen.getByTestId('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('does not call onChange when disabled', () => {
    render(<Check onChange={mockOnChange} disabled />);
    const checkbox = screen.getByTestId('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('calls onChange when toggled via keyboard (space/enter)', () => {
    render(<Check onChange={mockOnChange} />);
    const checkbox = screen.getByTestId('checkbox');

    fireEvent.keyDown(checkbox, { key: ' ' });
    expect(mockOnChange).toHaveBeenCalledWith(true);

    mockOnChange.mockClear();

    fireEvent.keyDown(checkbox, { key: 'Enter' });
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('applies correct variant class', () => {
    render(<Check variant="primary" onChange={mockOnChange} />);
    const checkbox = screen.getByTestId('checkbox');
    const box = checkbox.querySelector('.check__box');
    expect(box).toHaveClass('check__box--primary');
  });

  it('applies correct shape class', () => {
    render(<Check shape="circle" onChange={mockOnChange} />);
    const checkbox = screen.getByTestId('checkbox');
    const box = checkbox.querySelector('.check__box');
    expect(box).toHaveClass('check__box--circle');
  });

  it('applies custom className if provided', () => {
    render(<Check className="custom-class" onChange={mockOnChange} />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveClass('custom-class');
  });

  it('is focusable and supports keyboard interaction', () => {
    render(<Check onChange={mockOnChange} />);
    const checkbox = screen.getByTestId('checkbox');
    checkbox.focus();
    expect(checkbox).toHaveFocus();
  });

  it('has aria-disabled attribute when disabled', () => {
    render(<Check disabled onChange={mockOnChange} />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveAttribute('aria-disabled', 'true');
  });
});
