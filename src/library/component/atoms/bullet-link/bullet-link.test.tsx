import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../../../style-library/themes/default';
import BulletLink from './bullet-link';

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);

describe('BulletLink', () => {
  it('should display the text correctly', () => {
    renderWithTheme(<BulletLink text="Home" />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = vi.fn();
    renderWithTheme(<BulletLink text="Services" onClick={handleClick} />);
    const link = screen.getByTestId('bullet-link');
    link.click();
    expect(handleClick).toHaveBeenCalled();
  });

  it('should have correct href if provided', () => {
    renderWithTheme(<BulletLink text="Home" href="/home" />);
    const link = screen.getByTestId('bullet-link');
    expect(link).toHaveAttribute('href', '/home');
  });
});
