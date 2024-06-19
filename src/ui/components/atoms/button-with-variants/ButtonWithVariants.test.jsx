import { render, screen } from '@testing-library/react';
import ButtonVariant from './ButtonWithVariants.tsx';

describe('Testing Button React Component', () => {
  test('should render the button with text ABRIR IMAGEN', () => {
    render(<ButtonVariant color="primary">ABRIR IMAGEN</ButtonVariant>);
    const buttonElement = screen.getByText(/ABRIR IMAGEN/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
