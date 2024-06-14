import { render, screen } from '@testing-library/react';
import Variables from './Variables';

describe('Variables component', () => {
  it('Should render the default text', () => {
    render(<Variables />);
    expect(screen.getByText('ARTICULOS')).toBeInTheDocument();
  });

  it('Should render the custom text.', () => {
    render(<Variables text="Custom text Variables" />);
    expect(screen.getByText('Custom text Variables')).toBeInTheDocument();
  });

  it('Should adjust text size responsively.', () => {
    render(<Variables />);
    const labelElement = screen.getByText('ARTICULOS');
    const initialFontSize = window.getComputedStyle(labelElement).getPropertyValue('font-size');
    labelElement.style.fontSize = '20px';
    const updatedFontSize = window.getComputedStyle(labelElement).getPropertyValue('font-size');
    expect(updatedFontSize).not.toEqual(initialFontSize);
  });
});
