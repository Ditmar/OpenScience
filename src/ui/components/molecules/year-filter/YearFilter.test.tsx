import { render, screen, fireEvent } from '@testing-library/react';
import YearFilter from './YearFilter';
import { years } from './__mock__/mockData';

test('renders YearFilter component', () => {
  render(<YearFilter years={years} onYearSelect={() => {}} />);
  const heading = screen.getByText(/año/i);
  expect(heading).toBeInTheDocument();
});

test('displays a list of years', () => {
  render(<YearFilter years={years} onYearSelect={() => {}} />);
  years.forEach((year) => {
    expect(screen.getByText(year)).toBeInTheDocument();
  });
});

test('highlights selected year', () => {
  render(<YearFilter years={years} onYearSelect={() => {}} />);
  const yearElement = screen.getByText(years[0].toString());
  fireEvent.click(yearElement);
  expect(yearElement).toHaveClass('selected');
});

test('verifies the existence of the button in the DOM', () => {
  render(<YearFilter years={years} onYearSelect={() => {}} />);
  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(years.length);
});
