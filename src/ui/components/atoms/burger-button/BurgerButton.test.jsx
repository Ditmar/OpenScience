import { render, screen } from '@testing-library/react';
import BurgerButton from './BurgerButton';
import IconBurger from '../../../../assets/icons/button-burguer.svg?raw';

describe('Testing BurgerButton React Component', () => {
  test('should render ButtonBurger', () => {
    render(<BurgerButton icon={IconBurger} variant="button" />);
    const buttonElement = screen.getByRole('button', { name: /button/i });
    expect(buttonElement).toBeInTheDocument();
  });
});