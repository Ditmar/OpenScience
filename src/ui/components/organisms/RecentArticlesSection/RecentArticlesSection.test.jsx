import { render, screen, fireEvent } from '@testing-library/react';
import RecentArticlesSection from './RecentArticlesSection.tsx';
import { mockVolumes } from './__mocks__/mockVolumes.ts';

describe('RecentArticlesSection', () => {
  it('renderiza el volumen activo y sus artículos', () => {
    render(<RecentArticlesSection volumes={mockVolumes} />);
    expect(screen.getByText(/Vol\./)).toBeInTheDocument();
    expect(screen.getByText(/ARTÍCULOS MÁS RECIENTES/i)).toBeInTheDocument();
    expect(screen.getByText('Artículo 1')).toBeInTheDocument();
    expect(screen.getByText('Artículo 2')).toBeInTheDocument();
    expect(screen.queryByText('Artículo 3')).not.toBeInTheDocument();
  });

  it('cambia de volumen al hacer click en un dot', () => {
    render(<RecentArticlesSection volumes={mockVolumes} />);
    const dots = screen.getAllByRole('button');
    fireEvent.click(dots[1]);
    expect(screen.getByText('Artículo 3')).toBeInTheDocument();
    expect(screen.queryByText('Artículo 1')).not.toBeInTheDocument();
  });
});
