import { render } from '@testing-library/react';
import PointsDivider from './PointsDivider';
import '@testing-library/jest-dom';

describe('Testing Points Divider React Component', () => {
  test('should render with primary color, medium size, and solid variant', () => {
    const { container } = render(<PointsDivider color="primary" size="medium" variant="solid" />);
    const dividerElement = container.firstChild;
    expect(dividerElement).toHaveClass('primary');
    expect(dividerElement).toHaveClass('medium');
    expect(dividerElement).toHaveClass('solid');
  });

  test('should render with secondary color, large size, and dotted variant', () => {
    const { container } = render(<PointsDivider color="secondary" size="large" variant="dotted" />);
    const dividerElement = container.firstChild;
    expect(dividerElement).toHaveClass('secondary');
    expect(dividerElement).toHaveClass('large');
    expect(dividerElement).toHaveClass('dotted');
  });

  test('should render with tertiary color, small size, and double variant', () => {
    const { container } = render(<PointsDivider color="tertiary" size="small" variant="double" />);
    const dividerElement = container.firstChild;
    expect(dividerElement).toHaveClass('tertiary');
    expect(dividerElement).toHaveClass('small');
    expect(dividerElement).toHaveClass('double');
  });

});
