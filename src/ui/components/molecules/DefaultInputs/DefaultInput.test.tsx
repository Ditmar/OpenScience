import React from 'react';
import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DefaultInput } from './DefaultInput';

describe('DefaultInput', () => {
  it('renders with label', () => {
    render(<DefaultInput label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('calls onChange', () => {
    const handleChange = vi.fn();
    render(<DefaultInput label="Email" onChange={handleChange} />);
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'a' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('calls onClear', () => {
    const handleClear = vi.fn();
    render(<DefaultInput value="text" onClear={handleClear} />);
    const clearBtn = screen.getByLabelText('Clear input');
    fireEvent.click(clearBtn);
    expect(handleClear).toHaveBeenCalled();
  });

  it('displays error and aria-invalid', () => {
    render(<DefaultInput label="Email" error="Invalid" />);
    expect(screen.getByText('Invalid')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true');
  });

  it('disables input', () => {
    render(<DefaultInput label="Email" disabled />);
    expect(screen.getByLabelText('Email')).toBeDisabled();
  });
});
