import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { TextField } from './TextField';

describe('TextField Component', () => {
  describe('Rendering', () => {
    test('renders TextField with label', () => {
      render(<TextField label="Email" value="" onChange={() => {}} />);
      expect(screen.getByText('Email')).toBeInTheDocument();
    });

    test('renders TextField with placeholder', () => {
      render(<TextField placeholder="Enter your email" value="" onChange={() => {}} />);
      expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    });

    test('renders TextField with helper text', () => {
      render(<TextField helperText="Please enter a valid email" value="" onChange={() => {}} />);
      expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
    });

    test('renders TextField with error state', () => {
      render(<TextField error helperText="Email is required" value="" onChange={() => {}} />);
      const input = screen.getByRole('textbox');
      const helperText = screen.getByText('Email is required');
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(helperText.className).toContain('text-field__helper-text--error'); // CSS modules
    });

    test('renders TextField in disabled state', () => {
      render(<TextField disabled value="disabled@example.com" onChange={() => {}} />);
      const input = screen.getByDisplayValue('disabled@example.com');
      expect(input).toBeDisabled();
    });
  });

  describe('Interactions', () => {
    test('calls onChange when input value changes', () => {
      const handleChange = vi.fn();
      render(<TextField value="" onChange={handleChange} />);
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'test@example.com' } });
      expect(handleChange).toHaveBeenCalledWith('test@example.com');
    });

    test('toggles focus state when input is focused and blurred', () => {
      const { container } = render(<TextField value="" onChange={() => {}} />);
      const input = screen.getByRole('textbox');

      // Focus
      fireEvent.focus(input);
      expect(container.innerHTML).toContain('text-field--focused');

      // Blur
      fireEvent.blur(input);
      expect(container.innerHTML).not.toContain('text-field--focused');
    });
  });

  describe('Props', () => {
    test('applies different size classes based on size prop', () => {
      const { rerender, container } = render(
        <TextField size="small" value="" onChange={() => {}} />,
      );
      expect(container.innerHTML).toContain('text-field--small');

      rerender(<TextField size="large" value="" onChange={() => {}} />);
      expect(container.innerHTML).toContain('text-field--large');
    });

    test('applies the correct input type', () => {
      render(<TextField type="password" value="" placeholder="Clave" onChange={() => {}} />);
      expect(screen.getByPlaceholderText('Clave')).toHaveAttribute('type', 'password');
    });

    test('renders with left and right icons', () => {
      const { container } = render(
        <TextField
          leftIcon={<span data-testid="left-icon">L</span>}
          rightIcon={<span data-testid="right-icon">R</span>}
          value=""
          onChange={() => {}}
        />,
      );
      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
      expect(container.innerHTML).toContain('text-field--with-left-icon');
      expect(container.innerHTML).toContain('text-field--with-right-icon');
    });

    test('applies additional className from props', () => {
      const { container } = render(
        <TextField className="custom-class" value="" onChange={() => {}} />,
      );
      expect(container.innerHTML).toContain('custom-class');
    });
  });
});
