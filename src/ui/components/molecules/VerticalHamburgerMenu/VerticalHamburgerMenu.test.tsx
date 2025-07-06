import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../../../style-library/themes/default';
import VerticalHamburgerMenu from './VerticalHamburgerMenu';

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);
}

describe('VerticalHamburgerMenu', () => {
  it('renders without crashing', () => {
    renderWithTheme(<VerticalHamburgerMenu />);
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument();
  });

  it('toggles menu when clicked', async () => {
    renderWithTheme(<VerticalHamburgerMenu />);
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
    renderWithTheme(<VerticalHamburgerMenu />);
    fireEvent.click(screen.getByLabelText('Toggle menu'));

    expect(await screen.findByLabelText('PDF')).toBeInTheDocument();
    expect(await screen.findByLabelText('Link')).toBeInTheDocument();
    expect(await screen.findByLabelText('Image')).toBeInTheDocument();
    expect(await screen.findByLabelText('Reference')).toBeInTheDocument();
  });

  it('applies position correctly', () => {
    const { container } = renderWithTheme(<VerticalHamburgerMenu position="right" />);
    expect(container.firstChild).toHaveStyle('right: 16px');
  });

  it('has correct background colors', async () => {
    const { container } = renderWithTheme(<VerticalHamburgerMenu />);

    const menuContainer = container.firstChild as HTMLElement;
    expect(menuContainer).toHaveStyle(`background-color: ${lightTheme.palette.text.primary}`);

    fireEvent.click(screen.getByLabelText('Toggle menu'));

    const expandedList = await screen.findByRole('list');
    expect(expandedList).toHaveStyle(`background-color: ${lightTheme.palette.customBlue.main}`);
  });
});
