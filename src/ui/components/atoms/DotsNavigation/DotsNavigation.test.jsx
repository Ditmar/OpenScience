import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import DotsNavigation from './DotsNavigation.tsx';

test('renders correct number of dots and handles click', () => {
  const handleClick = vi.fn();
  const { getAllByRole } = render(
    <DotsNavigation count={3} activeIndex={1} onDotClick={handleClick} />,
  );
  const dots = getAllByRole('button');
  expect(dots).toHaveLength(3);
  fireEvent.click(dots[2]);
  expect(handleClick).toHaveBeenCalledWith(2);
});
