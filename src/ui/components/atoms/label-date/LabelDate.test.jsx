import { render, screen } from '@testing-library/react';
import LabelDate from './LabelDate.tsx';

test('Must render Label Date 1', () => {
  render(<LabelDate date={new Date(2022, 0, 5)} />);
  const labelElement = screen.getByText(/Enero\s+\d+\.\s+2022/);
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveClass('labeldate');
});

test('Must render Label Date 2', () => {
  render(<LabelDate date={new Date(2018, 3, 20)} />);
  const labelElement = screen.getByText(/Abril\s+\d+\.\s+2018/);
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveClass('labeldate');
});

test('Must render Label Date 3', () => {
  render(<LabelDate date={new Date(2022, 11, 1)} />);
  const labelElement = screen.getByText(/Diciembre\s+\d+\.\s+2022/);
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveClass('labeldate');
});
