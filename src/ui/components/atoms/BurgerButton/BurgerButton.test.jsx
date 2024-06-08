import { render, screen } from '@testing-library/react';
import BurgerButton from './BurgerButton'; 

describe('Testing BurgerButton React Component', () => {
  test('renders BurgerButton component', () => {
    render(<BurgerButton />);
    const burgerButton = screen.getByRole('button', { name: 'burger-button' });
    expect(burgerButton).toBeInTheDocument();
  });

  test('clicking BurgerButton toggles open class', () => {
    render(<BurgerButton />);
    const burgerButton = screen.getByRole('button', { name: 'burger-button' });
    expect(burgerButton).toHaveClass('burger-button');
    expect(burgerButton).not.toHaveClass('open');
    fireEvent.click(burgerButton);
    expect(burgerButton).toHaveClass('open');
  });
});