import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import VerticalHamburgerMenu from './VerticalHamburgerMenu';

describe('VerticalHamburgerMenu', () => {
  it('renders without crashing', () => {
    render(<VerticalHamburgerMenu />);
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument();
  });

  it('toggles menu when clicked', async () => {
    render(<VerticalHamburgerMenu />);
    const menuButton = screen.getByLabelText('Toggle menu');
    expect(screen.queryByLabelText('PDF')).not.toBeInTheDocument();
    fireEvent.click(menuButton);
    expect(screen.getByLabelText('PDF')).toBeInTheDocument();
    fireEvent.click(menuButton);
    await vi.waitFor(() => {
      expect(screen.queryByLabelText('PDF')).not.toBeInTheDocument();
    });
  });

  it('displays all icons when expanded', () => {
    render(<VerticalHamburgerMenu />);
    fireEvent.click(screen.getByLabelText('Toggle menu'));

    expect(screen.getByLabelText('PDF')).toBeInTheDocument();
    expect(screen.getByLabelText('Link')).toBeInTheDocument();
    expect(screen.getByLabelText('Image')).toBeInTheDocument();
    expect(screen.getByLabelText('Reference')).toBeInTheDocument();
  });

  it('logs to console when icon is clicked', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    render(<VerticalHamburgerMenu />);

    fireEvent.click(screen.getByLabelText('Toggle menu'));
    fireEvent.click(screen.getByLabelText('PDF'));

    expect(consoleSpy).toHaveBeenCalledWith('PDF icon clicked');
    consoleSpy.mockRestore();
  });

  it('applies position correctly', () => {
    const { container } = render(<VerticalHamburgerMenu position="right" />);
    expect(container.firstChild).toHaveStyle('right: 16px');
  });
});
