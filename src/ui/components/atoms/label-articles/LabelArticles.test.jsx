import { render, screen } from '@testing-library/react';
import LabelArticles from './LabelArticles.tsx';

describe('Testing LabelArticles React Component', () => {
  test('should render with default props', () => {
    render(<LabelArticles>ARTÍCULOS</LabelArticles>);
    const labelElement = screen.getByText(/Artículos/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('should render with a different child', () => {
    render(<LabelArticles variant="primary">Different Child</LabelArticles>);
    const labelElement = screen.getByText(/Different Child/i);
    expect(labelElement).toBeInTheDocument();
  });
});
