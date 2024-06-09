import { render, fireEvent } from '@testing-library/react';
import BurgerButton from './BurgerButton.tsx';

test('BurgerButton toggles active class on click', () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<BurgerButton active={false} onClick={handleClick} />);
  const button = getByRole('button');

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalled();
});
