import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage.tsx';

describe('HomePage Component', () => {
  test('renders featured articles correctly', () => {
    render(<HomePage />);
    const featuredArticlesLabels = screen.getAllByText(/ARTÍCULOS DESTACADOS/i);
    expect(featuredArticlesLabels.length).toBeGreaterThan(0);
    const articleTitles = screen.getAllByText(
      /Spectral study the visual ecology of pelagic sharks with secondarily expanded habitats./i,
    );
    expect(articleTitles.length).toBeGreaterThan(0);
    const articleDescriptions = screen.getAllByText(
      /Spectral study the visual ecology of pelagic sharks with secondarily expanded habitats./i,
    );
    expect(articleDescriptions.length).toBeGreaterThan(0);
    const articleDates = screen.getAllByText(/abril 15 | 2023/i);
    expect(articleDates.length).toBeGreaterThan(0);
    const authorNames = screen.getAllByText(/Marco Antonio Lopez/i);
    expect(authorNames.length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: /publicar articulo/i })).toBeInTheDocument();
    expect(screen.getByAltText(/Thumbnail for/i)).toBeInTheDocument();
  });
});
