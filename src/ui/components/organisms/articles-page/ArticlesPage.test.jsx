import { render, screen } from '@testing-library/react';
import ArticlesPage from './ArticlesPage.tsx';

describe('ArticlesPage', () => {
  beforeEach(() => {
    render(<ArticlesPage />);
  });

  test('renders the "ARTÍCULOS" label', () => {
    const articlesLabel = screen.getByText('ARTÍCULOS');
    expect(articlesLabel).toBeInTheDocument();
  });

  test('renders the "VOLÚMENES" label', () => {
    const volumesLabel = screen.getByText('VOLÚMENES');
    expect(volumesLabel).toBeInTheDocument();
  });

  test('renders volume labels in the carousel', () => {
    const volumes = screen.getAllByText(/Vol\./);
    expect(volumes.length).toBe(4);
  });
});
