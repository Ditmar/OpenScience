import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'; // Mantener Vitest imports
import '@testing-library/jest-dom';

// Importa tu ThemeProvider. Asegúrate de que esta ruta sea correcta y tenga la extensión .tsx
import ThemeProvider from '../../../../style-library/core/ThemeProvider.tsx';

// Importa tu componente Badge. Asegúrate de que esta ruta sea correcta
import Badge from './badge.tsx';

// Helper para renderizar componentes dentro del ThemeProvider
const renderWithTheme = (component) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Badge Component', () => {
  it('renders with default props', () => {
    // Usar renderWithTheme para envolver el componente Badge
    renderWithTheme(
      <Badge variant="filled" color="neutral" shape="default" size="md">
        Badge Text
      </Badge>,
    );
    expect(screen.getByText('Badge Text')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    // Usar renderWithTheme para envolver el componente Badge
    renderWithTheme(
      <Badge
        variant="filled"
        color="neutral"
        shape="default"
        size="md"
        icon={
          <svg
            data-testid="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        }
      >
        Badge Text
      </Badge>,
    );
    expect(screen.getByText('Badge Text')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders with image', () => {
    // Usar renderWithTheme para envolver el componente Badge
    renderWithTheme(
      <Badge
        variant="filled"
        color="neutral"
        shape="default"
        size="md"
        image="https://via.placeholder.com/24"
      >
        Badge Text
      </Badge>,
    );
    expect(screen.getByAltText(/avatar/i)).toBeInTheDocument();
  });

  it('renders with rounded shape', () => {
    // Usar renderWithTheme para envolver el componente Badge
    renderWithTheme(
      <Badge variant="filled" color="neutral" shape="rounded" size="md">
        Badge Text
      </Badge>,
    );
    const badge = screen.getByText('Badge Text').parentElement;
    // Esto asume que 'badge--rounded' es una clase CSS que se aplica
    expect(badge?.classList.contains('badge--rounded')).toBe(true);
  });

  it('renders with left and right counters', () => {
    // Usar renderWithTheme para envolver el componente Badge
    renderWithTheme(
      <Badge
        variant="filled"
        color="neutral"
        shape="default"
        size="md"
        leftCount={7}
        rightCount={3}
      >
        Badge Text
      </Badge>,
    );
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
