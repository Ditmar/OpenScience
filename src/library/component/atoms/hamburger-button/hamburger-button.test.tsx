import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import HamburgerButton from './hamburger-button';

describe('HamburgerButton', () => {
  it('should call onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<HamburgerButton onClick={handleClick} />);
    const button = screen.getByLabelText('Open menu');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should use custom aria-label if provided', () => {
    render(<HamburgerButton onClick={() => {}} ariaLabel="Menu" />);
    expect(screen.getByLabelText('Menu')).toBeInTheDocument();
  });
});
