import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BaseInput } from './BaseInput';

describe('BaseInput Component', () => {
  const mockOnChange = vi.fn();
  const mockOnFocus = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(<BaseInput id="test-input" value="" onChange={mockOnChange} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('handles onChange and onFocus events', () => {
    render(<BaseInput id="test-input" value="" onChange={mockOnChange} onFocus={mockOnFocus} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'new value' } });
    fireEvent.focus(input);

    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnFocus).toHaveBeenCalled();
  });
});
