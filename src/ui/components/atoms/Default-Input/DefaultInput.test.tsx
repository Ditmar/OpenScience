import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { DefaultInput } from './DefaultInput';

describe('DefaultInput Component', () => {
  describe('Prop Tests', () => {
    it('renders with label', () => {
      render(<DefaultInput label="Test Label" id="test-input" />);
      expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    it('shows error message when error prop is provided', () => {
      render(<DefaultInput error="Test error" id="test-input" />);
      expect(screen.getByText('Test error')).toBeInTheDocument();
      expect(screen.getByText('Test error')).toHaveClass('error');
    });

    it('shows hint when provided', () => {
      render(<DefaultInput hint="Test hint" id="test-input" />);
      expect(screen.getByText('Test hint')).toBeInTheDocument();
    });

    it('applies disabled styles when disabled', () => {
      render(<DefaultInput disabled id="test-input" />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });
  });

  describe('Event Tests', () => {
    it('triggers onChange callback', () => {
      const handleChange = vi.fn();
      render(<DefaultInput onChange={handleChange} id="test-input" />);
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'test' } });
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('updates filled state on change', () => {
      render(<DefaultInput id="test-input" />);
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'test' } });
      expect(input.closest('div')).toHaveClass('filled');
    });
  });

  describe('Visual State Tests', () => {
    it('shows filled state when value prop provided', () => {
      render(<DefaultInput value="test" id="test-input" />);
      expect(screen.getByRole('textbox').closest('div')).toHaveClass('filled');
    });

    it('shows error state without filled', () => {
      render(<DefaultInput error="Error" id="test-input" />);
      const container = screen.getByRole('textbox').closest('div');
      expect(container).toHaveClass('error');
      expect(container).not.toHaveClass('filled');
    });

    it('shows error state with filled', () => {
      render(<DefaultInput value="test" error="Error" id="test-input" />);
      const container = screen.getByRole('textbox').closest('div');
      expect(container).toHaveClass('error');
      expect(container).toHaveClass('filled');
    });
  });

  describe('Accessibility Tests', () => {
    it('associates label with input', () => {
      render(<DefaultInput label="Test Label" id="test-input" />);
      const input = screen.getByLabelText('Test Label');
      expect(input).toBeInTheDocument();
    });

    it('shows aria-invalid when error exists', () => {
      render(<DefaultInput error="Test error" id="test-input" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    it('links error message to input via aria-describedby', () => {
      render(<DefaultInput error="Test error" id="test-input" />);
      const input = screen.getByRole('textbox');
      const errorMessage = screen.getByText('Test error');
      expect(input).toHaveAttribute('aria-describedby', errorMessage.id);
    });
  });

  describe('Shape Variants', () => {
    it('applies sharp corners class to container', () => {
      render(<DefaultInput className="sharp-corners" id="test-input" />);
      const container = screen.getByRole('textbox').closest('.default-input');
      expect(container).toHaveClass('sharp-corners');
    });

    it('applies pill shape class to container', () => {
      render(<DefaultInput className="pill-shape" id="test-input" />);
      const container = screen.getByRole('textbox').closest('.default-input');
      expect(container).toHaveClass('pill-shape');
    });
  });
});
