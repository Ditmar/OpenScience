import { render, screen } from '@testing-library/react';
import React from 'react';
import LabelDate from './LabelDate.tsx';

describe('Testing React LabelDate Component', () => {
  test('Must render correctly with a specific date', () => {
    render(<LabelDate month="January" day={5} year={2022} />);
    const labelElement = screen.getByText('January 5 | 2022');
    expect(labelElement).toBeInTheDocument();
  });

  test('Must render correctly with another specific date', () => {
    render(<LabelDate month="April" day={15} year={2023} />);
    const labelElement = screen.getByText('April 15 | 2023');
    expect(labelElement).toBeInTheDocument();
  });

  test('Should throw an error with an invalid month', () => {
    const renderWithInvalidMonth = () =>
      render(<LabelDate month="InvalidMonth" day={1} year={2022} />);
    expect(renderWithInvalidMonth).toThrow('Invalid month');
  });
});
