import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DotsNavigation from './DotsNavigation';

test('renders correct number of dots and handles click', () => {
  const handleClick = jest.fn();
  const { getAllByRole } = render(
    <DotsNavigation count={3} activeIndex={1} onDotClick={handleClick} />
  );
  const dots = getAllByRole('button');
  expect(dots).toHaveLength(3);
  fireEvent.click(dots[2]);
  expect(handleClick).toHaveBeenCalledWith(2);
});