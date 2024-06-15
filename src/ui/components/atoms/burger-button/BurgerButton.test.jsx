import { render, screen } from '@testing-library/react';
import BurgerButton from './BurgerButton.tsx';

describe('Testing BurguerButton React Component', () => {
  test('should render ButtonBurger', () => {
    render(<BurgerButton icon={BurgerButton} />);
    const buttonElement = screen.getByText('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
