import { render, screen } from '@testing-library/react';
import LabelDate from './LabelDate.tsx';

describe('Testing React LabelDate Component', () => {
  test('Must Render test 1', () => {
    render(<LabelDate month="april" day="12" year="2000" />);
    const LabelDateElement = screen.getByText('april 12 | 2000');
    expect(LabelDateElement).toBeInTheDocument();
  });

  test('Must Render test 2', () => {
    render(<LabelDate month="may" day="20" year="2005" />);
    const LabelDateElement = screen.getByText('may 20 | 2005');
    expect(LabelDateElement).toBeInTheDocument();
  });

  test('Should apply the correct CSS class', () => {
    const { container } = render(<LabelDate month="may" day="20" year="2005" />);
    const LabelDateElement = container.querySelector('.label-date');
    expect(LabelDateElement).toBeInTheDocument();
  });
});
