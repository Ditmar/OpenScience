import { render, screen } from '@testing-library/react';
import ButtonBurger from './ButtonBurger';
import burger from '../../../../assets/icons/burger-menu.svg?raw';

describe('Testing ButtonBurger React Component', () => {
  test('should be rendere burger', () => {
    render(<ButtonBurger icon={burger} />);
    const buttonElement = screen.getByTestId('button-icon');
    expect(buttonElement).toBeInTheDocument();
  });
});
