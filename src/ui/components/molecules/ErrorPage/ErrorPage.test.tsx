import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ErrorPage } from './ErrorPage';
import { lightTheme } from '../../../../style-library/themes/default';

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);

describe('ErrorPage Component', () => {
  it('renders error code, title, and message', () => {
    renderWithTheme(
      <ErrorPage code={404} title="Page not found" message="This page does not exist." />,
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(screen.getByText('This page does not exist.')).toBeInTheDocument();
  });

  it('renders without message', () => {
    renderWithTheme(<ErrorPage code={500} title="Internal Server Error" />);

    expect(screen.getByText('500')).toBeInTheDocument();
    expect(screen.getByText('Internal Server Error')).toBeInTheDocument();
    expect(screen.queryByText(/does not exist/i)).not.toBeInTheDocument();
  });
});
