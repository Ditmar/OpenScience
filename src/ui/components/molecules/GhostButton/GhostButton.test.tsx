import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import GhostButton from './GhostButton';

describe('GhostButton Component', () => {
  test('renders with primary variant and medium size', () => {
    render(<GhostButton label="Click me" variant="primary" size="medium" />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`color: var(--variant-textColor)`);
  });

  test('renders the button without icons', () => {
    render(<GhostButton label="No icons" />);
    expect(screen.getByRole('button', { name: /no icons/i })).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const onClick = vi.fn();
    render(<GhostButton label="Click me" onClick={onClick} />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<GhostButton label="Disabled" disabled />);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  test('has focus styles when focused', () => {
    render(<GhostButton label="Focus me" />);
    const button = screen.getByRole('button', { name: /focus me/i });
    button.focus();
    expect(button).toHaveFocus();
  });
});
