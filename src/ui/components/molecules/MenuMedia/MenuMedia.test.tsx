import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { ThemeProvider } from '@mui/material/styles';
import { MenuMedia } from './MenuMedia';
import { lightTheme } from '../../../../style-library/themes/default';

const descriptions = [
  'The recent 2022 international outbreak has caused an unprecedented transmission of the virus mainly in men ' +
    'that have sex with men. The extent of the outbreak has decreased dramatically after a few months, with 13 to ' +
    '37 daily cases worldwide in February 2023. We still do not understand the reasons why the MPXV clade circulating ' +
    'in 2022 was so transmissible in humans.',
  'Table data is not currently available. Further information will be updated once studies are concluded.',
  'Additional data and analysis are ongoing. This section will include graphical interpretations, sources, and visual context.',
];

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);
}

describe('MenuMedia', () => {
  it('renders and switches tabs', () => {
    renderWithTheme(
      <MenuMedia imageSrc="image.jpg" imageAlt="Alt text" descriptions={descriptions} />,
    );

    expect(screen.getByText('Figura')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Tabla'));
    expect(screen.getByText(/Table data/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText('Otros'));
    expect(screen.getByText(/Additional data/i)).toBeInTheDocument();
  });

  it('calls onOpenImage when button is clicked', () => {
    const mockFn = vi.fn();
    renderWithTheme(
      <MenuMedia
        imageSrc="image.jpg"
        imageAlt="Alt text"
        onOpenImage={mockFn}
        descriptions={descriptions}
      />,
    );

    fireEvent.click(screen.getByText('ABRIR IMAGEN'));
    expect(mockFn).toHaveBeenCalled();
  });

  it('renders correctly with imageSrc as object', () => {
    const mockImageSrc = { src: 'image.jpg' };
    renderWithTheme(
      <MenuMedia imageSrc={mockImageSrc} imageAlt="Alt text" descriptions={descriptions} />,
    );

    expect(screen.getByText('Figura')).toBeInTheDocument();
  });
});
