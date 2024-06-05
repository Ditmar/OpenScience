import { render, screen } from '@testing-library/react';
import LabelArtDestacados from './LabelArtDestacados';

describe('LabelArtDestacados component', () => {
  it('Should be rendered with the default text', () => {
    render(<LabelArtDestacados />);
    expect(screen.getByText('ARTICULOS DESTACADOS')).toBeInTheDocument();
  });

  it('Should render with custom text.', () => {
    render(<LabelArtDestacados text="Custom text Referencias" />);
    expect(screen.getByText('Custom text Referencias')).toBeInTheDocument();
  });

  it('Should adjust text size responsively.', () => {
    render(<LabelArtDestacados />);
    const labelElement = screen.getByText('ARTICULOS DESTACADOS');
    const initialFontSize = window.getComputedStyle(labelElement).getPropertyValue('font-size');
    labelElement.style.fontSize = '20px';
    const updatedFontSize = window.getComputedStyle(labelElement).getPropertyValue('font-size');
    expect(updatedFontSize).not.toEqual(initialFontSize);
  });
});
