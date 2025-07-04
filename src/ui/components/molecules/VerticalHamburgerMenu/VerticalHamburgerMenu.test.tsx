import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
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
    expect(await screen.findByLabelText('PDF')).toBeInTheDocument();

    fireEvent.click(menuButton);
    await waitFor(() => {
      expect(screen.queryByLabelText('PDF')).not.toBeInTheDocument();
    });
  });

  it('displays all icons when expanded', async () => {
    render(<VerticalHamburgerMenu />);
    fireEvent.click(screen.getByLabelText('Toggle menu'));

    expect(await screen.findByLabelText('PDF')).toBeInTheDocument();
    expect(await screen.findByLabelText('Link')).toBeInTheDocument();
    expect(await screen.findByLabelText('Image')).toBeInTheDocument();
    expect(await screen.findByLabelText('Reference')).toBeInTheDocument();
  });

  it('applies position correctly', () => {
    const { container } = render(<VerticalHamburgerMenu position="right" />);
    expect(container.firstChild).toHaveStyle('right: 16px');
  });

  it('has correct background colors', async () => {
    const { container } = render(<VerticalHamburgerMenu />);

    const menuContainer = container.firstChild as HTMLElement;
    expect(menuContainer).toHaveStyle('background-color: #02322C');

    fireEvent.click(screen.getByLabelText('Toggle menu'));

    const expandedList = await screen.findByRole('list');
    expect(expandedList).toHaveStyle('background-color: #0793BF');
  });
});
