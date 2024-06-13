import { render, screen } from '@testing-library/react';
import ButtonBurger from './ButtonBurger';

describe('Testing ButtonBurger React Component', () => {
  test('should render the ButtonBurger component', () => {
    render(<ButtonBurger />);
    const buttonElement = screen.getByTestId('button-icon');
    expect(buttonElement).toBeInTheDocument();
  });
});
