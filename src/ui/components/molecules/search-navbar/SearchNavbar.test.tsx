import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import SearchNavbar from './SearchNavbar';

describe('SearchNavbar component', () => {
  it('debe renderizar el botón de búsqueda', () => {
    render(<SearchNavbar />);
    expect(screen.getByLabelText(/buscar/i)).toBeInTheDocument();
  });

  it('debe mostrar el input al hacer clic en el botón', () => {
    render(<SearchNavbar />);
    const button = screen.getByLabelText(/buscar/i);
    fireEvent.click(button);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('debe ejecutar la función onSearch al enviar', () => {
    const mockOnSearch = vi.fn();
    render(<SearchNavbar onSearch={mockOnSearch} />);
    fireEvent.click(screen.getByLabelText(/buscar/i));
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(input);
    expect(mockOnSearch).toHaveBeenCalledWith('test');
  });
});

it('debe mostrar el placeholder personalizado', () => {
  render(<SearchNavbar placeholder="Buscar artículos..." />);
  fireEvent.click(screen.getByLabelText(/buscar/i));
  expect(screen.getByPlaceholderText(/Buscar artículos.../i)).toBeInTheDocument();
});

it('debe mostrar el input si showInputDefault es true', () => {
  render(<SearchNavbar showInputDefault />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

it('debe enfocar el input automáticamente al mostrarse', () => {
  render(<SearchNavbar />);
  fireEvent.click(screen.getByLabelText(/buscar/i));
  expect(screen.getByRole('textbox')).toHaveFocus();
});
