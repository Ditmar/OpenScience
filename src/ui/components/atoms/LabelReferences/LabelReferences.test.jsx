import { render, screen } from '@testing-library/react';
import LabelReferences from './LabelReferences.tsx';

describe('LabelReferences', () => {
  it('debe renderizar el texto por defecto', () => {
    render(<LabelReferences />);
    expect(screen.getByText('Referencias')).toBeInTheDocument();
  });

  it('debe renderizar texto personalizado', () => {
    render(<LabelReferences text="Custom text Referencias" />);
    expect(screen.getByText('Custom text Referencias')).toBeInTheDocument();
  });

  it('debe ajustarse al tamaño de la pantalla', () => {
    render(<LabelReferences />);
    const label = screen.getByText('Referencias');
    expect(label).toHaveStyle({ width: '120px' });

    window.innerWidth = 800;
    window.dispatchEvent(new Event('resize'));

    setTimeout(() => {
      expect(label).toHaveStyle({ width: 'auto' });
    }, 1000);
  });
});
