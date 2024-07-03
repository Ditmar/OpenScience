import { render, screen } from '@testing-library/react';
import Year from './Year';

describe('Testing ButtonWithVariants React Component', () => {
  test('should render test 1', () => {
    render(<Year>2023</Year>);
    const buttonElement = screen.getByText('2023');
    expect(buttonElement).toBeInTheDocument();
  });
});
