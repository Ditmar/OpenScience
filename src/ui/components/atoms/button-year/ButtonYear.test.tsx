import { render, screen } from '@testing-library/react';
import ButtonYear from './ButtonYear';

describe('Testing ButtonWithVariants React Component', () => {
  test('should render test 1', () => {
    render(<ButtonYear>año</ButtonYear>);
    const buttonElement = screen.getByText('año');
    expect(buttonElement).toBeInTheDocument();
  });
});
