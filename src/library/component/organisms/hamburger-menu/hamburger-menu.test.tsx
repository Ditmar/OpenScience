import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../../../style-library/themes/default';
import HamburgerMenu from './hamburger-menu';

const menuItems = [
  { label: 'Continent', href: '/continent' },
  { label: 'Mpox', href: '/mpox' },
];

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);

test('should display menu items when the button is clicked', () => {
  renderWithTheme(<HamburgerMenu menuItems={menuItems} />);
  fireEvent.click(screen.getByLabelText('Menu'));
  expect(screen.getByText('Continent')).toBeInTheDocument();
});
