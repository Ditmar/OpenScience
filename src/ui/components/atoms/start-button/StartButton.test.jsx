import { render, screen } from '@testing-library/react';
import StartButton from './StartButton.tsx';
import './StartButton.scss';

describe('ButtonInit component', () => {

  test('renders with custom props - primary variant', () => {
    render(<StartButton varianButton="primary">INICIAR</StartButton>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('INICIAR');
  });

  test('renders with custom props - secondary variant', () => {
    render(<StartButton variant="secondary">INICIAR</StartButton>);
    expect(screen.getByText('INICIAR')).toBeInTheDocument();
    expect(screen.getByText('INICIAR')).toHaveTextContent('INICIAR');
  });

  test('renders with custom props - tertiary variant', () => {
    render(<StartButton varianButton="tertiary ">INICIAR</StartButton>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('INICIAR');
  });
});
