import { render, screen } from '@testing-library/react';
import LabelDate from './LabelDate.tsx';
import { dateOne, dateTwo, dateThree, months } from './__mook__/dates.tsx';

describe('Testing React LabelDate Component', () => {
  test('Must Render test 1', () => {
    render(
      <LabelDate
        month={months[new Date(dateOne).getMonth()]}
        day={new Date(dateOne).getDate()}
        year={new Date(dateOne).getFullYear()}
      />,
    );
    const LabelDateElement = screen.getByText('Enero 30 | 2018');
    expect(LabelDateElement).toBeInTheDocument();
  });

  test('Must Render test 2', () => {
    render(
      <LabelDate
        month={months[new Date(dateTwo).getMonth()]}
        day={new Date(dateTwo).getDate()}
        year={new Date(dateTwo).getFullYear()}
      />,
    );
    const LabelDateElement = screen.getByText('Mayo 12 | 2024');
    expect(LabelDateElement).toBeInTheDocument();
  });

  test('Must Render test 3', () => {
    render(
      <LabelDate
        month={months[new Date(dateThree).getMonth()]}
        day={new Date(dateThree).getDate()}
        year={new Date(dateThree).getFullYear()}
      />,
    );
    const LabelDateElement = screen.getByText('Junio 15 | 2010');
    expect(LabelDateElement).toBeInTheDocument();
  });

  test('Should apply the correct CSS class', () => {
    const { container } = render(
      <LabelDate
        month={months[new Date(dateOne).getMonth()]}
        day={new Date(dateOne).getDate()}
        year={new Date(dateOne).getFullYear()}
      />,
    );
    const LabelDateElement = container.querySelector('.label-date');
    expect(LabelDateElement).toBeInTheDocument();
  });
});
