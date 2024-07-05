import { render } from '@testing-library/react';
import PointsDivider from './PointsDivider.tsx'; // Agregar la extensión .tsx
import styles from './PointsDivider.module.scss';
import '@testing-library/jest-dom';

describe('Testing Points Divider React Component', () => {
  test('should render with primary color, medium size, and solid-line variant', () => {
    const { container } = render(
      <PointsDivider color="primary" size="medium" variant="solid-line" />,
    );
    const dividerElement = container.firstChild;
    expect(dividerElement).toHaveClass(styles.divider);
    expect(dividerElement).toHaveClass(styles['divider--primary']);
    expect(dividerElement).toHaveClass(styles['divider--medium']);
    expect(dividerElement).toHaveClass(styles['divider--solid-line']);
  });

  test('should render with secondary color, large size, and segmented-line variant', () => {
    const { container } = render(
      <PointsDivider color="secondary" size="large" variant="segmented-line" />,
    );
    const dividerElement = container.firstChild;
    expect(dividerElement).toHaveClass(styles.divider);
    expect(dividerElement).toHaveClass(styles['divider--secondary']);
    expect(dividerElement).toHaveClass(styles['divider--large']);
    expect(dividerElement).toHaveClass(styles['divider--segmented-line']);
  });

  test('should render with tertiary color, small size, and points variant', () => {
    const { container } = render(<PointsDivider color="tertiary" size="small" variant="points" />);
    const dividerElement = container.firstChild;
    expect(dividerElement).toHaveClass(styles.divider);
    expect(dividerElement).toHaveClass(styles['divider--tertiary']);
    expect(dividerElement).toHaveClass(styles['divider--small']);
    expect(dividerElement).toHaveClass(styles['divider--points']);
    expect(dividerElement.querySelectorAll(`.${styles.divider__dot}`).length).toBe(3);
  });
});
