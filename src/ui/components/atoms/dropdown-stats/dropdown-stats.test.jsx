import { render, fireEvent, screen } from '@testing-library/react';
import DropdownStats from './dropdown-stats.tsx';

describe('DropdownStats', () => {
  const options = [
    { label: 'Argentina', value: 'arg', code: '+54', stat: 45 },
    { label: 'Brazil', value: 'bra', code: '+55', stat: 78 },
    { label: 'Chile', value: 'chi', code: '+56', stat: 32 },
  ];

  const mockOnChange = jest.fn();
  const mockOnToggle = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('representa la opción seleccionada', () => {
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

  it('abre el menú desplegable al hacer clic', () => {
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

  it('llama a onChange cuando se selecciona una opción', () => {
    render(
      <DropdownStats options={options} onChange={mockOnChange} isOpen onToggle={mockOnToggle} />,
    );

    fireEvent.click(screen.getByText('Brazil'));
    expect(mockOnChange).toHaveBeenCalledWith('bra');
  });

  it('muestra las barras de progreso correctamente', () => {
    render(
      <DropdownStats options={options} onChange={mockOnChange} isOpen onToggle={mockOnToggle} />,
    );

    const progressBars = screen.getAllByRole('progressbar');
    expect(progressBars.length).toBe(3);
  });

  it('muestra el estado deshabilitado correctamente', () => {
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

  it('maneja la navegación del teclado', () => {
    render(
      <DropdownStats options={options} onChange={mockOnChange} isOpen onToggle={mockOnToggle} />,
    );

    const brazilOption = screen.getByText('Brazil').closest('li');
    fireEvent.keyDown(brazilOption, { key: 'Enter' });
    expect(mockOnChange).toHaveBeenCalledWith('bra');
  });
});
