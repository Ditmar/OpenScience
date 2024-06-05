import { render, screen } from '@testing-library/react';
import ButtonInit from './ButtonInit.tsx';

describe('ButtonInit component', () => {
  test('renders with default props', () => {
    render(<ButtonInit />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('');
    expect(buttonElement).toHaveClass('button__init');
    expect(buttonElement).toHaveClass('button__init--primary');
  });

  
  test('renders with custom props - primary variant', () => {
    render(<ButtonInit varianButton="primary">INICIAR</ButtonInit>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('INICIAR');
    expect(buttonElement).toHaveClass('button__init');
    expect(buttonElement).toHaveClass('button__init--primary');
  });

  test('renders with custom props - secondary variant', () => {
    render(<ButtonInit varianButton="secondary">INICIAR</ButtonInit>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('INICIAR');
    expect(buttonElement).toHaveClass('button__init');
    expect(buttonElement).toHaveClass('button__init--secondary');
  });
});
