import { render, fireEvent } from '@testing-library/react';
<<<<<<< HEAD
import BurgerButton from './BurgerButton.tsx';
=======
import BurgerButton from './BurgerButton';
>>>>>>> origin/feature/SEM-067

test('BurgerButton toggles active class on click', () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<BurgerButton active={false} onClick={handleClick} />);
  const button = getByRole('button');
<<<<<<< HEAD

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalled();
});
=======
  
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalled();
});

>>>>>>> origin/feature/SEM-067
