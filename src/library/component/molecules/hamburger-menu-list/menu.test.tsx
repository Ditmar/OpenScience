import React from 'react';
import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../../../style-library/themes/default';
import HamburgerMenuList from './menu';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);

describe('HamburgerMenuList', () => {
  it('renders all links', () => {
    renderWithTheme(<HamburgerMenuList items={items} />);
    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it('calls onItemClick when an item is clicked', () => {
    const onItemClick = vi.fn();
    renderWithTheme(<HamburgerMenuList items={items} onItemClick={onItemClick} />);
    fireEvent.click(screen.getByText('Home'));
    expect(onItemClick).toHaveBeenCalledWith('Home');
  });
});
