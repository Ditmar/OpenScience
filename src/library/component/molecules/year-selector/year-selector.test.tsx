import { render, screen, fireEvent } from '@testing-library/react';
import YearSelector from './year-selector';
import type { IData } from './types/IProps';

const mockData: IData[] = [
  { id: 1, attributes: { Year: '2020', Volumes: '10' } },
  { id: 2, attributes: { Year: '2021', Volumes: '12' } },
  { id: 3, attributes: { Year: '2022', Volumes: '15' } },
];

const mockBackgroundImage = 'mock-background-image.png';

describe('YearSelector Component', () => {
  test('renders with initial year and button visible', () => {
    render(
      <YearSelector data={mockData} initialYear="AÑO" backgroundImage={mockBackgroundImage} />,
    );

    expect(screen.getByRole('button')).toHaveTextContent('AÑO');
  });

  test('Show and hide the list of years when clicking the button', () => {
    render(
      <YearSelector data={mockData} initialYear="AÑO" backgroundImage={mockBackgroundImage} />,
    );

    const button = screen.getByRole('button');

    expect(screen.queryByText('2020')).not.toBeVisible();

    fireEvent.click(button);

    expect(screen.getByText('2020')).toBeVisible();
    expect(screen.getByText('2021')).toBeVisible();
    expect(screen.getByText('2022')).toBeVisible();

    fireEvent.click(button);
    expect(screen.queryByText('2020')).not.toBeVisible();
  });

  test('Select a year and update the button, hide the list', () => {
    render(
      <YearSelector data={mockData} initialYear="AÑO" backgroundImage={mockBackgroundImage} />,
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const year2021 = screen.getByText('2021');
    fireEvent.click(year2021);

    expect(button).toHaveTextContent('2021');

    expect(screen.queryByText('2020')).not.toBeVisible();
  });
});
