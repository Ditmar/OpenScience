import { render, screen } from '@testing-library/react';
import ButtonWithVariants from './ButtonWithVariants.tsx';

describe('Testing ButtonWithVariants React Component', () => {
  test('should render test 1', () => {
    render(<ButtonWithVariants variant="primary">ABRIR IMAGEN</ButtonWithVariants>);
    const buttonElement = screen.getByText('ABRIR IMAGEN');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should render test 2', () => {
    render(<ButtonWithVariants variant="secondary">ABRIR IMAGEN</ButtonWithVariants>);
    const buttonElement = screen.getByText('ABRIR IMAGEN');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should render test 3', () => {
    render(<ButtonWithVariants variant="tertiary">ABRIR IMAGEN</ButtonWithVariants>);
    const buttonElement = screen.getByText('ABRIR IMAGEN');
    expect(buttonElement).toBeInTheDocument();
  });
});
