import { render, screen } from '@testing-library/react';
import RecentArticlesSection from './RecentArticlesSection.tsx';
import { mockVolumes } from './__mocks__/mockVolumes.ts';

describe('RecentArticlesSection', () => {
  it('renders the active volume and its articles', () => {
    render(<RecentArticlesSection volumes={mockVolumes} />);
    expect(screen.getByText(/Vol\./)).toBeInTheDocument();
    expect(screen.getByText(/ARTÍCULOS MÁS RECIENTES/i)).toBeInTheDocument();
    expect(screen.getByText(/Featured Article Volume 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Featured Article Volume 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Featured Article Volume 3/i)).toBeInTheDocument();
  });

  it('displays the date and volume number correctly', () => {
    render(<RecentArticlesSection volumes={mockVolumes} />);
    expect(screen.getAllByText(/Abril 16/).length).toBeGreaterThan(0);
    expect(screen.getByText((content) => content.includes('Vol.'))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('Nu.'))).toBeInTheDocument();
  });

  it('renders the PDF download buttons', () => {
    render(<RecentArticlesSection volumes={mockVolumes} />);
    const pdfLinks = screen.getAllByRole('button', { name: /Abrir/i });
    expect(pdfLinks.length).toBeGreaterThan(0);
  });
});
