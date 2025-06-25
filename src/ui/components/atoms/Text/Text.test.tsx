import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
  it('renderiza el texto', () => {
    render(<Text text="Hola mundo" />);
    expect(screen.getByText('Hola mundo')).toBeInTheDocument();
  });

  it('aplica estilo normal cuando se indica regular', () => {
    render(<Text text="Texto regular" bold="regular" />);
    const element = screen.getByText('Texto regular');
    expect(element).toHaveStyle('font-weight: normal');
  });
});
