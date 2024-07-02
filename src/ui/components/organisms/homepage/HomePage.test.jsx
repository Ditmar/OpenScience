// HomePage.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage.tsx';

describe('HomePage Component', () => {
  test('renders featured articles correctly', () => {
    render(<HomePage />);

    // Verificar que el texto "ARTÍCULOS DESTACADOS" esté presente
    const featuredArticlesLabels = screen.getAllByText(/ARTÍCULOS DESTACADOS/i);
    expect(featuredArticlesLabels.length).toBeGreaterThan(0);

    // Verificar que los títulos de los artículos estén presentes
    const articleTitles = screen.getAllByText(
      /Spectral study the visual ecology of pelagic sharks with secondarily expanded habitats./i,
    );
    expect(articleTitles.length).toBeGreaterThan(0);

    // Verificar que las descripciones de los artículos estén presentes
    const articleDescriptions = screen.getAllByText(
      /Spectral study the visual ecology of pelagic sharks with secondarily expanded habitats./i,
    );
    expect(articleDescriptions.length).toBeGreaterThan(0);

    // Verificar que las fechas estén presentes
    const articleDates = screen.getAllByText(/abril 15 | 2023/i);
    expect(articleDates.length).toBeGreaterThan(0);

    // Verificar que los nombres de los autores estén presentes
    const authorNames = screen.getAllByText(/Marco Antonio Lopez/i);
    expect(authorNames.length).toBeGreaterThan(0);

    // Verificar que los botones y otros elementos estén presentes y sean accesibles
    expect(screen.getByRole('button', { name: /publicar articulo/i })).toBeInTheDocument();
    expect(screen.getByAltText(/Thumbnail for/i)).toBeInTheDocument();
  });
});
