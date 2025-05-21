import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import DropdownStats from './dropdown-stats.tsx';

describe('DropdownStats Component', () => {
  const options = [
    { label: 'Argentina', value: 'arg', code: '+54', stat: 45 },
    { label: 'Brazil', value: 'bra', code: '+55', stat: 78 },
    { label: 'Chile', value: 'chi', code: '+56', stat: 32 },
  ];

  const mockOnChange = vi.fn();
  const mockOnToggle = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('debe mostrar la opción seleccionada correctamente', () => {
    render(
      <DropdownStats
        options={options}
        selectedValue="arg"
        onChange={mockOnChange}
        isOpen={false}
        onToggle={mockOnToggle}
      />,
    );

    expect(screen.getByText('Argentina')).toBeInTheDocument();
    expect(screen.getByText('(+54)')).toBeInTheDocument();
  });

  it('debe abrir el menú al hacer clic en el botón', () => {
    render(
      <DropdownStats
        options={options}
        onChange={mockOnChange}
        isOpen={false}
        onToggle={mockOnToggle}
      />,
    );

    fireEvent.click(screen.getByRole('button'));
    expect(mockOnToggle).toHaveBeenCalled();
  });

  it('debe llamar a onChange cuando se selecciona una opción', () => {
    render(
      <DropdownStats options={options} onChange={mockOnChange} isOpen onToggle={mockOnToggle} />,
    );

    fireEvent.click(screen.getByText('Brazil'));
    expect(mockOnChange).toHaveBeenCalledWith('bra');
  });

  it('debe manejar el estado deshabilitado del dropdown', () => {
    render(
      <DropdownStats
        options={options}
        onChange={mockOnChange}
        isOpen={false}
        onToggle={mockOnToggle}
        disabled
      />,
    );

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('debe permitir seleccionar una opción con el teclado', () => {
    render(
      <DropdownStats options={options} onChange={mockOnChange} isOpen onToggle={mockOnToggle} />,
    );

    const option = screen.getByText('Brazil').closest('li');
    if (option) {
      fireEvent.keyDown(option, { key: 'Enter' });
      expect(mockOnChange).toHaveBeenCalledWith('bra');
    } else {
      throw new Error('No se encontró el elemento <li> para la opción Brazil');
    }
  });
});
