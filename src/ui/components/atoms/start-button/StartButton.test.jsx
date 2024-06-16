import { render, screen } from '@testing-library/react';
import StartButton from './StartButton.tsx';

describe('ButtonInit component', () => {
  test('renders with default props', () => {
    render(<StartButton />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('');
    expect(buttonElement).toHaveClass('button__init');
    expect(buttonElement).toHaveClass('button__init--primary');
  });

  test('renders with custom props - primary variant', () => {
    render(<StartButton varianButton="primary">INICIAR</StartButton>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('INICIAR');
    expect(buttonElement).toHaveClass('button__init');
    expect(buttonElement).toHaveClass('button__init--primary');
  });

  test('renders with custom props - secondary variant', () => {
    render(<StartButton varianButton="secondary">INICIAR</StartButton>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('INICIAR');
    expect(buttonElement).toHaveClass('button__init');
    expect(buttonElement).toHaveClass('button__init--secondary');
  });

  test('renders with custom props - tertiary variant', () => {
    render(<StartButton varianButton="tertiary ">INICIAR</StartButton>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('INICIAR');
    expect(buttonElement).toHaveClass('button__init');
    expect(buttonElement).toHaveClass('button__init--tertiary ');
  });
});
