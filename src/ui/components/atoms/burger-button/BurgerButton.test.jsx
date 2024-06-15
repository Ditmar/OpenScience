import { render, screen } from '@testing-library/react';
import BurgerButton from './BurgerButton.tsx';

describe('Testing BurguerButton React Component', () => {
  test('should render ButtonBurger', () => {
    render(<Button icon={BurgerButton}></Button>);
    const buttonElement = screen.getByText('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
