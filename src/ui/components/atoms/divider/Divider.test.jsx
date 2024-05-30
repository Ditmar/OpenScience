import { render, screen } from '@testing-library/react';
import Divider from './Divider.tsx';

describe('Testing Divider React Component', () => {
  test('should render with solid style', () => {
    render(<Divider variant="solid" />);
    const dividerElement = screen.getByRole('separator');
    expect(dividerElement).toHaveClass('divider--solid');
  });

  test('should render with dotted style', () => {
    render(<Divider variant="dotted" />);
    const dividerElement = screen.getByRole('separator');
    expect(dividerElement).toHaveClass('divider--dotted');
  });

  test('should render with dashed style', () => {
    render(<Divider variant="dashed" />);
    const dividerElement = screen.getByRole('separator');
    expect(dividerElement).toHaveClass('divider--dashed');
  });
});
