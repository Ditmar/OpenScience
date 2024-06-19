import { render, screen } from '@testing-library/react';
import React from 'react';
import LabelDate from './LabelDate.tsx';

describe('Testing React LabelDate Component', () => {
  test('Must render Label Date 1', () => {
    render(<LabelDate month="January" day={5} year={2022} />);
    const labelElement = screen.getByText('January 5 | 2022');
    expect(labelElement).toBeInTheDocument();
  });
  test('Must render Label Date 2', () => {
    render(<LabelDate month="April" day={20} year={2018} />);
    const labelElement = screen.getByText('April 20 | 2018');
    expect(labelElement).toBeInTheDocument();
  });
  test('Must render Label Date 3', () => {
    render(<LabelDate month="December" day={1} year={2022} />);
    const labelElement = screen.getByText('December 1 | 2022');
    expect(labelElement).toBeInTheDocument();
  });
});
