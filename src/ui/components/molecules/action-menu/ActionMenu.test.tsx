import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ActionMenu from './ActionMenu';
import '@testing-library/jest-dom';

describe('ActionMenu', () => {
  beforeEach(() => {
    render(<ActionMenu />);
  });

  it('muestra los botones PDF, Link e Imagen', () => {
    expect(screen.getByRole('button', { name: /picture as pdf/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /link/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /image/i })).toBeInTheDocument();
  });

  it('muestra el menú de opciones al hacer clic en PDF', () => {
    const pdfButton = screen.getByRole('button', { name: /picture as pdf/i });
    fireEvent.click(pdfButton);

    expect(screen.getByText(/descargar/i)).toBeInTheDocument();
  });

  it('muestra el menú de opciones al hacer clic en Link', () => {
    const linkButton = screen.getByRole('button', { name: /link/i });
    fireEvent.click(linkButton);

    expect(screen.getByTestId('link-icons')).toBeInTheDocument();
  });

  it('muestra el menú de opciones al hacer clic en Imagen', () => {
    const imageButton = screen.getByRole('button', { name: /image/i });
    fireEvent.click(imageButton);

    expect(screen.getByText(/media/i)).toBeInTheDocument();
  });

  it('cierra el menú si se hace clic en el mismo botón dos veces', () => {
    const imageButton = screen.getByRole('button', { name: /image/i });
    fireEvent.click(imageButton);
    expect(screen.getByText(/media/i)).toBeInTheDocument();

    fireEvent.click(imageButton);
    expect(screen.queryByText(/media/i)).not.toBeInTheDocument();
  });
});
