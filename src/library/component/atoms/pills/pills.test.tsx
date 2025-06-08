import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../../../style-library/themes/default';
import Pill from './pills';

const testTheme = lightTheme;

const MockIcon = <svg data-testid="mock-icon" />;

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={testTheme}>{ui}</ThemeProvider>);
};

describe('Pill Component', () => {
  it('renders with text and default props', () => {
    renderWithTheme(<Pill text="Default Pill" />);
    expect(screen.getByText('Default Pill')).toBeInTheDocument();
  });

  it('renders with variant filled and color brand-primary', () => {
    renderWithTheme(<Pill text="Filled Primary" variant="filled" color="brand-primary" />);
    expect(screen.getByText('Filled Primary')).toBeInTheDocument();
  });

  it('renders with icon on the left', () => {
    renderWithTheme(<Pill text="Icon Left" icon={MockIcon} iconPosition="left" />);
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    expect(screen.getByText('Icon Left')).toBeInTheDocument();
  });

  it('renders with icon on the right', () => {
    renderWithTheme(<Pill text="Icon Right" icon={MockIcon} iconPosition="right" />);
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    expect(screen.getByText('Icon Right')).toBeInTheDocument();
  });
});
