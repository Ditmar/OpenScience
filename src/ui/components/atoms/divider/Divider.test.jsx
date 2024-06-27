import { render, screen } from '@testing-library/react';
import Divider from './Divider.tsx';
import styles from './Divider.module.scss'; // Importa los estilos CSS Modules

describe('Testing Divider React Component', () => {
  test('Should be rendered with a solid style', () => {
    render(<Divider variant="solid" />);
    const dividerElement = screen.getByRole('separator');
    expect(dividerElement).toHaveClass(styles['divider--solid']); // Verifica la clase CSS Modules
  });

  test('Should be rendered with a dotted style', () => {
    render(<Divider variant="dotted" />);
    const dividerElement = screen.getByRole('separator');
    expect(dividerElement).toHaveClass(styles['divider--dotted']); // Verifica la clase CSS Modules
  });

  test('Should be rendered with a dashed style', () => {
    render(<Divider variant="dashed" />);
    const dividerElement = screen.getByRole('separator');
    expect(dividerElement).toHaveClass(styles['divider--dashed']); // Verifica la clase CSS Modules
  });
});
