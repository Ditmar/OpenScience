import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import OLBullet from './OLBullet';
import styles from './OLBullet.module.scss';

describe('OLBullet component', () => {
  test('renders with default props', () => {
    const { container } = render(<OLBullet />);
    const bullet = container.firstChild;
    expect(bullet).toHaveClass(styles['ol-bullet']);
    expect(bullet).toHaveClass(styles['ol-bullet--square']);
    expect(bullet).toHaveClass(styles['ol-bullet--md']);
  });

  test('applies active state', () => {
    const { container } = render(<OLBullet active />);
    const bullet = container.firstChild;
    expect(bullet).toHaveClass(styles['ol-bullet--active']);
  });

  test('applies shape and size correctly', () => {
    const { container } = render(<OLBullet shape="circle" size="lg" />);
    const bullet = container.firstChild;
    expect(bullet).toHaveClass(styles['ol-bullet--circle']);
    expect(bullet).toHaveClass(styles['ol-bullet--lg']);
  });

  test('has presentation role', () => {
    const { container } = render(<OLBullet />);
    const bullet = container.firstChild;
    expect(bullet).toHaveAttribute('role', 'presentation');
  });
});
