import { render, screen } from '@testing-library/react';
import ArticleDescription from './ArticleDescription.tsx';

describe('ArticleDescription', () => {
  test('renders the article content correctly', () => {
    const mockArticleContent = 'This is a sample article.';
    render(<ArticleDescription article={mockArticleContent} />);
    expect(screen.getByText(mockArticleContent)).toBeInTheDocument();
  });

  test('applies bold style when variant is bold', () => {
    const mockArticleContent = 'This is a bold article.';
    render(<ArticleDescription article={mockArticleContent} variant="bold" />);

    const articleElement = screen.getByText(mockArticleContent);
    expect(articleElement).toHaveClass('bold-text');
  });

  test('applies italic style when variant is italic', () => {
    const mockArticleContent = 'This is an italic article.';
    render(<ArticleDescription article={mockArticleContent} variant="italic" />);

    const articleElement = screen.getByText(mockArticleContent);
    expect(articleElement).toHaveClass('italic-text');
  });
});
