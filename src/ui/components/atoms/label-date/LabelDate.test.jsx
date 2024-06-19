import { render, screen } from '@testing-library/react';
import React from 'react';
import LabelDate from './LabelDate.tsx';

describe('Testing React LabelDate Component', () => {
  test('Must render Label Date 1', () => {
    render(<LabelDate date={new Date(2022, 0, 5)} />);
    const labelElement = screen.getByText('enero 5 | 2022');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass('labeldate');
    expect(labelElement).not.toHaveClass('labeldate--overflow');
  });

  test('Must render Label Date 2', () => {
    render(<LabelDate date={new Date(2018, 3, 20)} />);
    const labelElement = screen.getByText('abril 20 | 2018');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass('labeldate');
    expect(labelElement).not.toHaveClass('labeldate--overflow');
  });

  test('Must render Label Date 3', () => {
    render(<LabelDate date={new Date(2022, 11, 1)} />);
    const labelElement = screen.getByText('diciembre 1 | 2022');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass('labeldate');
    expect(labelElement).not.toHaveClass('labeldate--overflow');
  });
});
