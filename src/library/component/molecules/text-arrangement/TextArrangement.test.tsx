import { render, screen } from '@testing-library/react';
import TextArrangement from './TextArrangement';
import styles from './TextArrangement.module.scss';

describe('TextArrangement Component Tests', () => {
  describe('Unit tests - Rendering according to props', () => {
    test('Apply layout columns class', () => {
      render(<TextArrangement layout="columns" data-testid="container" />);
      const container = screen.getByTestId('container');
      expect(container).toHaveClass(styles.container);
      expect(container).toHaveClass(styles['layout-columns']);
    });

    test('Apply mobile responsive class', () => {
      render(<TextArrangement responsive="mobile" data-testid="container" />);
      const container = screen.getByTestId('container');
      expect(container).toHaveClass(styles['responsive-mobile']);
    });
  });

  describe('Accessibility basic tests', () => {
    test('It has a title with the correct text', () => {
      const { container } = render(
        <TextArrangement title="Accessible Title" description="Description" />,
      );
      const title = container.querySelector('div');
      const children = title?.children ? Array.from(title.children) : [];
      const found = children.some((child) => child.textContent?.includes('Accessible Title'));
      expect(found).toBe(true);
    });

    test('Renders the accessible title correctly', () => {
      const { container } = render(
        <TextArrangement title="Accessible Title" description="Description" />,
      );
      const title = container.querySelector('div');
      const children = title?.children ? Array.from(title.children) : [];
      const found = children.some((child) => child.textContent?.includes('Accessible Title'));
      expect(found).toBe(true);
    });

    test('The main container exists', () => {
      render(<TextArrangement data-testid="container" />);
      const container = screen.getByTestId('container');
      expect(container).toBeInTheDocument();
    });
  });

  describe('Responsiveness tests', () => {
    test('Apply responsive class for mobile', () => {
      render(<TextArrangement responsive="mobile" data-testid="container" />);
      const container = screen.getByTestId('container');
      expect(container).toHaveClass(styles['responsive-mobile']);
    });

    test('aplica clase responsive para tablet', () => {
      render(<TextArrangement responsive="tablet" data-testid="container" />);
      const container = screen.getByTestId('container');
      expect(container).toHaveClass(styles['responsive-tablet']);
    });

    test('aplica clase responsive para desktop', () => {
      render(<TextArrangement responsive="desktop" data-testid="container" />);
      const container = screen.getByTestId('container');
      expect(container).toHaveClass(styles['responsive-desktop']);
    });
  });
});
