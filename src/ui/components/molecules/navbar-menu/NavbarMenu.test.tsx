import { render, screen, fireEvent } from '@testing-library/react';
import NavbarMenu from './NavbarMenu';

const clicks: string[] = [];

const mockItems = [
  { children: 'ARTÍCULOS', icon: 'articles', onClick: () => clicks.push('ARTÍCULOS') },
  { children: 'INICIO', icon: 'start', onClick: () => clicks.push('INICIO') },
  { children: 'VOLUMENES', icon: 'volumes', onClick: () => clicks.push('VOLUMENES') },
];

describe('NavbarMenu', () => {
  beforeEach(() => {
    clicks.length = 0;
  });

  test('renderiza los botones con texto e iconos', () => {
    render(
      <NavbarMenu items={mockItems} backgroundImage="" alt="Test alt" className="test-class" />,
    );

    expect(screen.getByText(/ARTÍCULOS/i)).toBeInTheDocument();
    expect(screen.getByText(/INICIO/i)).toBeInTheDocument();
    expect(screen.getByText(/VOLUMENES/i)).toBeInTheDocument();
  });

  test('dispara onClick al pulsar botón', () => {
    render(
      <NavbarMenu items={mockItems} backgroundImage="" alt="Test alt" className="test-class" />,
    );

    const button = screen.getByRole('button', { name: /ARTÍCULOS/i });
    fireEvent.click(button);

    expect(clicks.includes('ARTÍCULOS')).toBe(true);
  });

  test('los botones son accesibles', () => {
    render(
      <NavbarMenu items={mockItems} backgroundImage="" alt="Test alt" className="test-class" />,
    );
    const button = screen.getByRole('button', { name: /INICIO/i });
    button.focus();
    expect(button).toHaveFocus();
  });

  test('los botones tienen aria-labels accesibles', () => {
    render(
      <NavbarMenu items={mockItems} backgroundImage="" alt="Test alt" className="test-class" />,
    );
    const button = screen.getByLabelText(/artículos/i);
    expect(button).toBeInTheDocument();
  });
});
