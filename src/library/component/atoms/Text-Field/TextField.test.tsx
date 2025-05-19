import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextField } from './TextField';

describe('TextField Component', () => {
  // Render tests
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
      expect(helperText).toHaveClass('text-field__helper-text--error');
    });

    test('renders TextField in disabled state', () => {
      render(<TextField disabled value="disabled@example.com" onChange={() => {}} />);

      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });
  });

  // Interaction tests
  describe('Interactions', () => {
    test('calls onChange when input value changes', () => {
      const handleChange = jest.fn();

      render(<TextField value="" onChange={handleChange} />);

      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'test@example.com' } });

      expect(handleChange).toHaveBeenCalledWith('test@example.com');
    });

    test('toggles focus state when input is focused and blurred', async () => {
      const { container } = render(<TextField value="" onChange={() => {}} />);

      const input = screen.getByRole('textbox');

      // Initial state should not have focused class
      expect(container.querySelector('.text-field--focused')).not.toBeInTheDocument();

      // Focus the input
      fireEvent.focus(input);
      expect(container.querySelector('.text-field--focused')).toBeInTheDocument();

      // Blur the input
      fireEvent.blur(input);
      expect(container.querySelector('.text-field--focused')).not.toBeInTheDocument();
    });
  });

  // Props tests
  describe('Props', () => {
    test('applies different size classes based on size prop', () => {
      const { rerender, container } = render(
        <TextField size="small" value="" onChange={() => {}} />,
      );

      expect(container.querySelector('.text-field--small')).toBeInTheDocument();

      rerender(<TextField size="large" value="" onChange={() => {}} />);

      expect(container.querySelector('.text-field--large')).toBeInTheDocument();
    });

    test('applies the correct input type', () => {
      const { rerender } = render(<TextField type="password" value="" onChange={() => {}} />);

      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'password');

      rerender(<TextField type="email" value="" onChange={() => {}} />);

      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
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
      expect(container.querySelector('.text-field--with-left-icon')).toBeInTheDocument();
      expect(container.querySelector('.text-field--with-right-icon')).toBeInTheDocument();
    });

    test('applies additional className from props', () => {
      const { container } = render(
        <TextField className="custom-class" value="" onChange={() => {}} />,
      );

      expect(container.querySelector('.text-field.custom-class')).toBeInTheDocument();
    });
  });
});
