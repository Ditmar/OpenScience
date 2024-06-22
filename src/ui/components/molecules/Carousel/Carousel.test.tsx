import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';
import mockData from './mockData';

test('renders Carousel component', () => {
  render(<Carousel volumes={mockData} />);
  const volumeNames = mockData.map((volume) => volume.name);
  volumeNames.forEach((name) => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});

test('navigates to the next volume', () => {
  render(<Carousel volumes={mockData} />);
  fireEvent.click(screen.getByLabelText('Next'));
  const firstVolumeName = mockData[1].name;
  expect(screen.getByText(firstVolumeName)).toBeInTheDocument();
});

test('navigates to the previous volume', () => {
  render(<Carousel volumes={mockData} />);
  fireEvent.click(screen.getByLabelText('Previous'));
  const lastVolumeName = mockData[mockData.length - 1].name;
  expect(screen.getByText(lastVolumeName)).toBeInTheDocument();
});
