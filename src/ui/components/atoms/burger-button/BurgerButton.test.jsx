import { render, screen } from '@testing-library/react';
import BurgerButton from './BurgerButton.tsx';
import IconBurger from '../../../../assets/icons/button-burguer.svg?raw';

describe('Testing BurgerButton React Component', () => {
  test('should be rendere burger', () => {
    render(<BurgerButton icon={IconBurger} />);
    const buttonElement = screen.getByTestId('button-icon');
    expect(buttonElement).toBeInTheDocument();
  });
});
