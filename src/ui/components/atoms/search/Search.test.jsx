import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Search from './Search.tsx';

describe('Componente Search', () => {
  it('renderiza el ícono de búsqueda', () => {
    render(<Search />);
    const searchIcon = screen.getByText('🔍');
    expect(searchIcon).toBeInTheDocument();
  });

  it('alterna la barra de búsqueda al hacer clic en el ícono', () => {
    render(<Search />);
    const searchIcon = screen.getByText('🔍');
    fireEvent.click(searchIcon);
    const searchBar = screen.getByPlaceholderText('Buscar...');
    expect(searchBar).toBeInTheDocument();
  });

  it('maneja el cambio de entrada', () => {
    render(<Search />);
    const searchIcon = screen.getByText('🔍');
    fireEvent.click(searchIcon);
    const searchBar = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(searchBar, { target: { value: 'Test' } });
    expect(searchBar).toHaveValue('Test');
  });

  it('ejecuta la búsqueda al hacer clic en el botón', () => {
    const mockSearchFunction = vi.fn();

    render(<Search onSearch={mockSearchFunction} />);

    const searchIcon = screen.getByText('🔍');
    fireEvent.click(searchIcon);
    const searchButton = screen.getByText('Buscar');
    fireEvent.click(searchButton);

    expect(mockSearchFunction).toHaveBeenCalledTimes(1);
  });
});
