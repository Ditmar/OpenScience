import { render, screen } from '@testing-library/react';
import Article from './Article.tsx';

describe('Article', () => {
  beforeEach(() => {
    render(<Article />);
  });

  test('renders the date', () => {
    const dateElement = screen.getByText(/2023/);
    expect(dateElement).toBeInTheDocument();
  });

  test('renders the article title', () => {
    const titleElement = screen.getByText(
      /CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION/i,
    );
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the article description', () => {
    const descriptionElement = screen.getByText(/Spectral tuning of visual pigments/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders the author label', () => {
    const authorElement = screen.getByText('Marco Antonio Lopez');
    expect(authorElement).toBeInTheDocument();
  });
});
