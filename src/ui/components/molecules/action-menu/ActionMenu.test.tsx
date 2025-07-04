import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import ActionMenu from './ActionMenu';
import { lightTheme } from '../../../../style-library/themes/default';

describe('ActionMenu component', () => {
  const renderWithTheme = () =>
    render(
      <ThemeProvider theme={lightTheme}>
        <ActionMenu />
      </ThemeProvider>
    );

  it('renders menu buttons', () => {
    renderWithTheme();
    expect(screen.getByLabelText('PDF')).toBeInTheDocument();
    expect(screen.getByLabelText('Link')).toBeInTheDocument();
    expect(screen.getByLabelText('Image')).toBeInTheDocument();
  });

  it('shows PDF options when PDF menu is clicked', () => {
    renderWithTheme();
    const pdfButton = screen.getByLabelText('PDF');
    fireEvent.click(pdfButton);
    expect(screen.getByText(/DESCARGAR/i)).toBeInTheDocument();
  });

  it('toggles PDF menu off when clicked twice', () => {
    renderWithTheme();
    const pdfButton = screen.getByLabelText('PDF');
    fireEvent.click(pdfButton);
    expect(screen.getByText(/DESCARGAR/i)).toBeInTheDocument();
    fireEvent.click(pdfButton);
    expect(screen.queryByText(/DESCARGAR/i)).not.toBeInTheDocument();
  });

  it('shows Image options when Image menu is clicked', () => {
    renderWithTheme();
    const imageButton = screen.getByLabelText('Image');
    fireEvent.click(imageButton);
    expect(screen.getByText(/MEDIA/i)).toBeInTheDocument();
  });

  it('switches from one menu to another', () => {
    renderWithTheme();
    fireEvent.click(screen.getByLabelText('PDF'));
    expect(screen.getByText(/DESCARGAR/i)).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Image'));
    expect(screen.queryByText(/DESCARGAR/i)).not.toBeInTheDocument();
    expect(screen.getByText(/MEDIA/i)).toBeInTheDocument();
  });
});
