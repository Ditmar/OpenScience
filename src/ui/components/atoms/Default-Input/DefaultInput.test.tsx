import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DefaultInput } from './DefaultInput';

describe('DefaultInput', () => {
  const setup = (props = {}) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<DefaultInput {...props} />);
    const input = screen.getByRole('textbox');
    return { input };
  };

  it('renders with label, placeholder, and hint', () => {
    render(<DefaultInput label="Email" placeholder="Enter email" hint="We won't spam you" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
    expect(screen.getByText("We won't spam you")).toBeInTheDocument();
  });

  it('calls onChange when user types', () => {
    const handleChange = vi.fn();
    const { input } = setup({ onChange: handleChange });
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays error message and sets aria-invalid', () => {
    render(<DefaultInput label="Email" placeholder="Email" error="Invalid email" />);
    const input = screen.getByPlaceholderText('Email');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('disables input when disabled is true', () => {
    const { input } = setup({ disabled: true });
    expect(input).toBeDisabled();
  });

  it('associates label with input via htmlFor and id', () => {
    render(<DefaultInput label="Email" />);
    const label = screen.getByText('Email') as HTMLLabelElement;
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(label.htmlFor).toBe(input.id);
  });

  it('applies custom className to root', () => {
    const { container } = render(<DefaultInput className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
