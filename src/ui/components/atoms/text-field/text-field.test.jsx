import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TextField from './text-field.tsx';

describe('TextField Component', () => {
  it('renders with label', () => {
    render(<TextField label="Test Label" value="" onChange={() => { }} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('handles onChange event', () => {
    const handleChange = vi.fn();
    render(<TextField value="" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledWith('test');
  });

  it('displays error state', () => {
    render(
      <TextField
        value=""
        onChange={() => { }}
        error
        helperText="Error message"
      />
    );
    expect(screen.getByRole('textbox')).toHaveClass('text-field__input--error');
    expect(screen.getByText('Error message')).toHaveClass(
      'text-field__helper-text--error'
    );
  });

  it('displays disabled state', () => {
    render(<TextField value="" onChange={() => { }} disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
    expect(screen.getByRole('textbox')).toHaveClass('text-field__input--disabled');
  });

  it('renders with left icon', () => {
    const leftIcon = <span data-testid="left-icon">Icon</span>;
    render(<TextField value="" onChange={() => { }} leftIcon={leftIcon} />);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveClass('text-field__input--with-left-icon');
  });

  it('renders with right icon', () => {
    const rightIcon = <span data-testid="right-icon">Icon</span>;
    render(<TextField value="" onChange={() => { }} rightIcon={rightIcon} />);
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveClass('text-field__input--with-right-icon');
  });

  it('renders different sizes', () => {
    const { rerender } = render(<TextField value="" onChange={() => { }} size="small" />);
    expect(screen.getByRole('textbox')).toHaveClass('text-field__input--small');

    rerender(<TextField value="" onChange={() => { }} size="medium" />);
    expect(screen.getByRole('textbox')).toHaveClass('text-field__input--medium');

    rerender(<TextField value="" onChange={() => { }} size="large" />);
    expect(screen.getByRole('textbox')).toHaveClass('text-field__input--large');
  });

  it('has proper accessibility attributes', () => {
    render(
      <TextField
        value=""
        onChange={() => { }}
        error
        helperText="Error message"
        name="test-field"
      />
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      'test-field-helper-text'
    );
  });
});
