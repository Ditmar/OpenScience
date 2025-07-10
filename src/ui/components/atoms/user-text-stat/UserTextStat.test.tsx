import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import UserTextStat from './UserTextStat';

describe('UserTextStat Component', () => {
  it('renders title and mainValue correctly', () => {
    render(<UserTextStat title="Usuarios" mainValue="1234" />);
    expect(screen.getByText('Usuarios')).toBeInTheDocument();
    expect(screen.getByText('1234')).toBeInTheDocument();
  });

  it('renders subValue if provided', () => {
    render(<UserTextStat title="Usuarios" mainValue="1234" subValue="última semana" />);
    expect(screen.getByText('última semana')).toBeInTheDocument();
  });

  it('renders description if provided', () => {
    render(
      <UserTextStat
        title="Suscripciones"
        mainValue="100"
        description="Incluye renovaciones automáticas"
      />,
    );
    expect(screen.getByText('Incluye renovaciones automáticas')).toBeInTheDocument();
  });

  it('triggers onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<UserTextStat title="Click Test" mainValue="99" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Test'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

