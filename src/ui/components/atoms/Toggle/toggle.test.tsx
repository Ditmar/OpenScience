import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Toggle from './toggle';
import styles from './toggle.module.scss';

describe('Toggle Component', () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders toggle component', () => {
    render(<Toggle checked={false} onChange={mockOnChange} />);
    const toggleElement = screen.getByTestId('toggle');
    expect(toggleElement).toBeInTheDocument();
  });

  it('renders with correct aria attributes', () => {
    const props = {
      checked: true,
      onChange: mockOnChange,
      'aria-label': 'Test toggle',
    };

    render(
      <Toggle checked={props.checked} onChange={props.onChange} aria-label={props['aria-label']} />,
    );
    const toggleElement = screen.getByTestId('toggle');

    expect(toggleElement).toHaveAttribute('role', 'switch');
    expect(toggleElement).toHaveAttribute('aria-checked', 'true');
    expect(toggleElement).toHaveAttribute('aria-label', 'Test toggle');
    expect(toggleElement).toHaveAttribute('tabIndex', '0');
  });

  it('calls onChange when clicked', () => {
    render(<Toggle checked={false} onChange={mockOnChange} />);
    const toggleElement = screen.getByTestId('toggle');

    fireEvent.click(toggleElement);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('calls onChange with opposite value when clicked', () => {
    render(<Toggle checked onChange={mockOnChange} />);
    const toggleElement = screen.getByTestId('toggle');

    fireEvent.click(toggleElement);
    expect(mockOnChange).toHaveBeenCalledWith(false);
  });

  it('does not call onChange when disabled', () => {
    render(<Toggle checked={false} onChange={mockOnChange} disabled />);
    const toggleElement = screen.getByTestId('toggle');

    fireEvent.click(toggleElement);
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('handles keyboard navigation - Space key', () => {
    render(<Toggle checked={false} onChange={mockOnChange} />);
    const toggleElement = screen.getByTestId('toggle');

    fireEvent.keyDown(toggleElement, { key: ' ' });
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('handles keyboard navigation - Enter key', () => {
    render(<Toggle checked={false} onChange={mockOnChange} />);
    const toggleElement = screen.getByTestId('toggle');

    fireEvent.keyDown(toggleElement, { key: 'Enter' });
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('does not handle other keyboard keys', () => {
    render(<Toggle checked={false} onChange={mockOnChange} />);
    const toggleElement = screen.getByTestId('toggle');

    fireEvent.keyDown(toggleElement, { key: 'Tab' });
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('applies correct CSS classes for checked state', () => {
    render(<Toggle checked onChange={mockOnChange} />);
    const toggleElement = screen.getByTestId('toggle');

    expect(toggleElement).toHaveClass(styles['toggle--checked']);
  });

  it('applies correct CSS classes for disabled state', () => {
    render(<Toggle checked={false} onChange={mockOnChange} disabled />);
    const toggleElement = screen.getByTestId('toggle');

    expect(toggleElement).toHaveClass(styles['toggle--disabled']);
    expect(toggleElement).toHaveAttribute('aria-disabled', 'true');
    expect(toggleElement).toHaveAttribute('tabIndex', '-1');
  });

  it('applies correct CSS classes for variants', () => {
    const variants = ['default', 'success', 'info', 'warning', 'danger'] as const;

    variants.forEach((variant) => {
      const { unmount } = render(
        <Toggle checked={false} onChange={mockOnChange} variant={variant} />,
      );
      const toggleElement = screen.getByTestId('toggle');

      expect(toggleElement).toHaveClass(styles[`toggle--${variant}`]);
      unmount();
    });
  });

  it('renders slider and thumb elements', () => {
    render(<Toggle checked={false} onChange={mockOnChange} />);

    const sliderElement = screen.getByTestId('toggle-slider');
    const thumbElement = screen.getByTestId('toggle-thumb');

    expect(sliderElement).toBeInTheDocument();
    expect(thumbElement).toBeInTheDocument();
  });

  it('uses aria-labelledby when provided', () => {
    const props = {
      checked: false,
      onChange: mockOnChange,
      'aria-labelledby': 'toggle-label',
    };

    render(
      <Toggle
        checked={props.checked}
        onChange={props.onChange}
        aria-labelledby={props['aria-labelledby']}
      />,
    );
    const toggleElement = screen.getByTestId('toggle');

    expect(toggleElement).toHaveAttribute('aria-labelledby', 'toggle-label');
  });

  it('applies default variant when no variant is provided', () => {
    render(<Toggle checked={false} onChange={mockOnChange} />);
    const toggleElement = screen.getByTestId('toggle');

    expect(toggleElement).toHaveClass(styles['toggle--default']);
  });
});
