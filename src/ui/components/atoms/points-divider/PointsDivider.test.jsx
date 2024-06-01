import { render } from '@testing-library/react';
import PointsDivider from './PointsDivider';
import '@testing-library/jest-dom';

describe('Testing Points Divider React Component', () => {
  /* test('should render with primary color, medium size, and solid variant', () => {
    const { container } = render(<PointsDivider color="primary" size="medium" variant="solid" />);
    const dividerElement = container.firstChild;
    expect(dividerElement).toHaveClass('divider--primary');
    expect(dividerElement).toHaveClass('divider--medium');
    expect(dividerElement).toHaveClass('divider--solid');
  });

  test('should render with secondary color, large size, and dotted variant', () => {
    const { container } = render(<PointsDivider color="secondary" size="large" variant="dotted" />);
    const dividerElement = container.firstChild;
    expect(dividerElement).toHaveClass('divider--secondary');
    expect(dividerElement).toHaveClass('divider--large');
    expect(dividerElement).toHaveClass('divider--dotted');
  });

  test('should render with tertiary color, small size, and double variant', () => {
    const { container } = render(<PointsDivider color="tertiary" size="small" variant="double" />);
    const dividerElement = container.firstChild;
    expect(dividerElement).toHaveClass('divider--tertiary');
    expect(dividerElement).toHaveClass('divider--small');
    expect(dividerElement).toHaveClass('divider--double');
  }); */

  test('should render with primary color, medium size, and solid-line variant', () => {
    const { container } = render(<PointsDivider color="primary" size="medium" variant="solid-line" />);
    const dividerElement = container.firstChild;
    expect(dividerElement).toHaveClass('divider--primary');
    expect(dividerElement).toHaveClass('divider--medium');
    expect(dividerElement).toHaveClass('divider--solid-line');
  });

  test('should render with secondary color, large size, and segmented-line variant', () => {
    const { container } = render(<PointsDivider color="secondary" size="large" variant="segmented-line" />);
    const dividerElement = container.firstChild;
    expect(dividerElement).toHaveClass('divider--secondary');
    expect(dividerElement).toHaveClass('divider--large');
    expect(dividerElement).toHaveClass('divider--segmented-line');
  });

  test('should render with tertiary color, small size, and points variant', () => {
    const { container } = render(<PointsDivider color="tertiary" size="small" variant="points" />);
    const dividerElement = container.firstChild;
    expect(dividerElement).toHaveClass('divider--tertiary');
    expect(dividerElement).toHaveClass('divider--small');
    expect(dividerElement).toHaveClass('divider--points');
    expect(dividerElement.querySelectorAll('.divider__dot').length).toBe(3);
  });
});
