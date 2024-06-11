import { render, screen } from '@testing-library/react';
import ArticleTitle from './ArticleTitle';

describe('ArticleTitle', () => {
  test('title of an article', () => {
    const mockTitle = 'New title of an article';
    render(<ArticleTitle title={mockTitle} />);
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });
  test('title two of an article', () => {
    const mockTitle = 'New title of an article';
    render(<ArticleTitle title={mockTitle} variant="primary" />);

    const titleElement = screen.getByText(mockTitle);
    expect(titleElement).toHaveClass('title-text');
    expect(titleElement).toHaveClass('primary-text');
  });

  test('title three of an article', () => {
    const mockTitle = 'New totle of an article.';
    render(<ArticleTitle title={mockTitle} variant="secondary" />);

    const titleElement = screen.getByText(mockTitle);
    expect(titleElement).toHaveClass('title-text');
    expect(titleElement).toHaveClass('secondary-text');
  });
});
