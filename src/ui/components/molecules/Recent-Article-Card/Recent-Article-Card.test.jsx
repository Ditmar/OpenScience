import { render, screen } from '@testing-library/react';
import RecentArticleCard from './Recent-Article-Card.tsx';

const mockProps = {
  date: new Date('2023-04-16'),
  title: 'CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION',
  description: 'Spectral tuning of visual pigments in vertebrates.',
  author: 'Marco Antonio Lopez',
  pdfUrl: 'https://example.com/article.pdf',
  shareUrl: 'https://example.com/share',
};

describe('Recent-Article-Card', () => {
  beforeEach(() => {
    render(
      <RecentArticleCard
        date={mockProps.date}
        title={mockProps.title}
        description={mockProps.description}
        author={mockProps.author}
        pdfUrl={mockProps.pdfUrl}
        shareUrl={mockProps.shareUrl}
      />,
    );
  });

  test('renders the date', () => {
    expect(screen.getByText(/2023/)).toBeInTheDocument();
  });

  test('renders the article title', () => {
    expect(
      screen.getByText(
        /CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION/i,
      ),
    ).toBeInTheDocument();
  });

  test('renders the article description', () => {
    expect(screen.getByText(/Spectral tuning of visual pigments/i)).toBeInTheDocument();
  });

  test('renders the author label', () => {
    expect(screen.getByText('Marco Antonio Lopez')).toBeInTheDocument();
  });
});
