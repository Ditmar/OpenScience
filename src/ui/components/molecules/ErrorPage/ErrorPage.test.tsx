import { render, screen } from '@testing-library/react';
import { ErrorPage } from './ErrorPage';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../../../style-library/themes/default'; 

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);
}

describe('ErrorPage Component', () => {
  it('renders error code, title, and message', () => {
    renderWithTheme(<ErrorPage code={404} title="Page not found" message="This page does not exist." />);

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

  it('applies correct styles for code', () => {
    renderWithTheme(<ErrorPage code={403} title="Forbidden" message="You don\'t have access." />);
    const codeElement = screen.getByText('403');

    const computedColor = lightTheme.palette.errorPalette.errorPrimary;
    expect(codeElement).toHaveStyle(`color: ${computedColor}`);
    expect(codeElement).toHaveStyle(`font-weight: ${lightTheme.typography.fontWeightBold}`);
  });
});
