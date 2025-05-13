import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Check from './check.tsx';

describe('Check component', () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  // Unitarias
  it('renders unchecked by default', () => {
    render(<Check checked={false} onChange={mockOnChange} />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  it('renders checked when prop is true', () => {
    render(<Check checked onChange={mockOnChange} />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });

  it('calls onChange when clicked', () => {
    render(<Check checked={false} onChange={mockOnChange} />);
    const checkbox = screen.getByTestId('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('does not call onChange when disabled', () => {
    render(<Check checked={false} onChange={mockOnChange} disabled />);
    const checkbox = screen.getByTestId('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('calls onChange with correct value when toggled via keyboard (space/enter)', () => {
    render(<Check checked={false} onChange={mockOnChange} />);
    const checkbox = screen.getByTestId('checkbox');

    fireEvent.keyDown(checkbox, { key: ' ' });
    expect(mockOnChange).toHaveBeenCalledWith(true);

    mockOnChange.mockClear();

    fireEvent.keyDown(checkbox, { key: 'Enter' });
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('renders checkmark only when checked', () => {
    const { rerender } = render(<Check checked={false} onChange={mockOnChange} />);
    expect(screen.queryByTestId('checkmark')).toBeNull();

    rerender(<Check checked onChange={mockOnChange} />);
    expect(screen.getByTestId('checkmark')).toBeInTheDocument();
  });

  it('applies correct variant class', () => {
    const { rerender } = render(<Check checked onChange={mockOnChange} variant="success" />);
    const checkbox = screen.getByTestId('checkbox').querySelector('.check__box');
    expect(checkbox).toHaveClass('check__box--success');

    rerender(<Check checked onChange={mockOnChange} variant="danger" />);
    const updated = screen.getByTestId('checkbox').querySelector('.check__box');
    expect(updated).toHaveClass('check__box--danger');
  });

  it('applies correct shape class', () => {
    const { rerender } = render(<Check checked onChange={mockOnChange} shape="circle" />);
    const checkbox = screen.getByTestId('checkbox').querySelector('.check__box');
    expect(checkbox).toHaveClass('check__box--circle');

    rerender(<Check checked onChange={mockOnChange} shape="square" />);
    const updated = screen.getByTestId('checkbox').querySelector('.check__box');
    expect(updated).toHaveClass('check__box--square');
  });

  it('is focusable and supports keyboard interaction', () => {
    render(<Check checked={false} onChange={mockOnChange} />);
    const checkbox = screen.getByTestId('checkbox');

    checkbox.focus();
    expect(checkbox).toHaveFocus();

    fireEvent.keyDown(checkbox, { key: ' ' });
    expect(mockOnChange).toHaveBeenCalled();
  });
});
