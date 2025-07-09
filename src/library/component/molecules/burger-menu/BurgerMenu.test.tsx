import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from '@mui/material/styles';
import BurgerMenu from './BurgerMenu';
import { lightTheme } from '../../../../style-library/themes/default';

describe('BurgerMenu', () => {
  const renderWithTheme = (ui: React.ReactElement) =>
    render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);

  it('debe mostrar las franjas del pie de página', () => {
    renderWithTheme(<BurgerMenu />);
    expect(screen.getByTestId('blue-stripe')).toBeDefined();
    expect(screen.getByTestId('green-stripe')).toBeDefined();
  });

  it('debe permitir abrir el menú al hacer clic en el botón', () => {
    renderWithTheme(
      <BurgerMenu>
        <div>Contenido del menú</div>
      </BurgerMenu>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByText('Contenido del menú')).toBeDefined();
  });

  it('debe ocultar el menú al volver a hacer clic en el botón', () => {
    renderWithTheme(
      <BurgerMenu>
        <div>Contenido</div>
      </BurgerMenu>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('Contenido')).toBeDefined();

    fireEvent.click(button);
  });
});
