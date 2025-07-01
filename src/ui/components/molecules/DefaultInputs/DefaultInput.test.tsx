import React from 'react';
import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DefaultInput } from './DefaultInput';

describe('DefaultInput', () => {
  it('renders with placeholder', () => {
    render(<DefaultInput placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  });

  it('calls onChange', () => {
    const handleChange = vi.fn();
    render(<DefaultInput placeholder="Email" onChange={handleChange} />);
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'a' } });
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
    render(<DefaultInput placeholder="Email" error="Invalid" />);
    expect(screen.getByText('Invalid')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('aria-invalid', 'true');
  });

  it('disables input', () => {
    render(<DefaultInput placeholder="Email" disabled />);
    expect(screen.getByPlaceholderText('Email')).toBeDisabled();
  });
});
