// src/ui/components/atoms/SubTitleAndParagraph/SubTitleAndParagraph.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SubTitleAndParagraph from './SubTitleAndParagraph';

const theme = createTheme();

describe('SubTitleAndParagraph', () => {
  test('renders title and subtitle with default props', () => {
    render(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph title="My Title" subtitle="My Subtitle" />
      </ThemeProvider>,
    );

    expect(screen.getByText('My Title')).toBeInTheDocument();
    expect(screen.getByText('My Subtitle')).toBeInTheDocument();
    // Verifica que el título es un h3 por defecto (de acuerdo a nuestro getTitleVariant('md'))
    expect(screen.getByText('My Title').tagName).toBe('H3');
    // Verifica que el subtítulo es un p por defecto (de acuerdo a nuestro getSubtitleVariant('md'))
    expect(screen.getByText('My Subtitle').tagName).toBe('P');
  });

  // Prueba 2: Renderiza solo el título cuando el subtítulo es opcional
  test('renders only title when subtitle is not provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph title="Title Only" />
      </ThemeProvider>,
    );

    expect(screen.getByText('Title Only')).toBeInTheDocument();
    expect(screen.queryByText('My Subtitle')).not.toBeInTheDocument(); // Asegura que el subtítulo no esté
  });

  // Prueba 3: Aplica diferentes tamaños correctamente
  test('applies different sizes (sm, lg) correctly', () => {
    // Small size
    const { rerender } = render(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph title="Small Title" subtitle="Small Subtitle" size="sm" />
      </ThemeProvider>,
    );
    expect(screen.getByText('Small Title')).toBeInTheDocument();
    expect(screen.getByText('Small Subtitle')).toBeInTheDocument();
    // Puedes añadir aserciones para el estilo si se exponen directamente o para la etiqueta HTML si cambia
    // expect(screen.getByText('Small Title').tagName).toBe('H4'); // H4 para sm

    // Large size
    rerender(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph title="Large Title" subtitle="Large Subtitle" size="lg" />
      </ThemeProvider>,
    );
    expect(screen.getByText('Large Title')).toBeInTheDocument();
    expect(screen.getByText('Large Subtitle')).toBeInTheDocument();
    // expect(screen.getByText('Large Title').tagName).toBe('H2'); // H2 para lg
  });

  // Prueba 4: Aplica alineaciones correctamente
  test('applies alignment correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph title="Centered Title" alignment="center" />
      </ThemeProvider>,
    );
    const titleElement = screen.getByText('Centered Title').closest('div'); // Obtén el contenedor
    expect(titleElement).toHaveStyle('text-align: center');
  });

  // Prueba 5: Aplica variantes correctamente (verificación de color o fontWeight)
  test('applies emphasized variant correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph title="Emphasized Title" variant="emphasized" />
      </ThemeProvider>,
    );
    const titleElement = screen.getByText('Emphasized Title');
    // Para verificar colores, puedes necesitar configuraciones específicas de Jest para Styled Components
    // o verificar el fontWeight si es más directo.
    expect(titleElement).toHaveStyle('font-weight: 700'); // Asume fontWeightBold = 700
  });

  // Prueba 6: Usa las etiquetas HTML semánticas correctas
  test('uses correct semantic HTML tags', () => {
    render(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph
          title="My Title"
          subtitle="My Subtitle"
          titleTag="h1"
          subtitleTag="h6"
        />
      </ThemeProvider>,
    );
    expect(screen.getByText('My Title').tagName).toBe('H1');
    expect(screen.getByText('My Subtitle').tagName).toBe('H6');
  });

  // Prueba 7: Permite pasar un className adicional
  test('applies additional className', () => {
    render(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph title="Test" className="custom-class" />
      </ThemeProvider>,
    );
    expect(screen.getByText('Test').closest('div')).toHaveClass('custom-class');
  });
});
