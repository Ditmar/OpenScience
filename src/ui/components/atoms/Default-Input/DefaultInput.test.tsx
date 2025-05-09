import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DefaultInput } from './DefaultInput';

describe('DefaultInput', () => {
  const setup = (
    label: string,
    placeholder: string,
    hint?: string,
    error?: string,
    disabled?: boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    className?: string,
  ) => {
    render(
      <DefaultInput
        label={label}
        placeholder={placeholder}
        hint={hint}
        error={error}
        disabled={disabled}
        onChange={onChange}
        className={className}
      />,
    );
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
    const { input } = setup('Email', 'Enter email', undefined, undefined, undefined, handleChange);
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
    const { input } = setup('Email', 'Enter email', undefined, undefined, true);
    expect(input).toBeDisabled();
  });

  it('applies custom className to root', () => {
    const { container } = render(
      <DefaultInput className="custom-class" label="Email" placeholder="Enter email" />,
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
