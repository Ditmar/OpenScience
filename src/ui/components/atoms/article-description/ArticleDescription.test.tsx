import { render, screen } from '@testing-library/react';
import ArticleDescription from './ArticleDescription';
import styles from './ArticleDescription.module.scss';

describe('ArticleDescription', () => {
  const mockArticleContent = 'This is a test article content';

  test('renders the article content correctly', () => {
    render(<ArticleDescription article={mockArticleContent} />);
    const articleElement = screen.getByText(mockArticleContent);
    expect(articleElement).toBeInTheDocument();
  });

  test('applies bold style when variant is bold', () => {
    render(<ArticleDescription article={mockArticleContent} variant="bold" />);
    const articleElement = screen.getByText(mockArticleContent);
    expect(articleElement).toHaveClass(styles['bold-text']);
  });

  test('applies italic style when variant is italic', () => {
    render(<ArticleDescription article={mockArticleContent} variant="italic" />);
    const articleElement = screen.getByText(mockArticleContent);
    expect(articleElement).toHaveClass(styles['italic-text']);
  });

  test('applies underline style when variant is underline', () => {
    render(<ArticleDescription article={mockArticleContent} variant="underline" />);
    const articleElement = screen.getByText(mockArticleContent);
    expect(articleElement).toHaveClass(styles['underline-text']);
  });

  test('applies highlight style when variant is highlight', () => {
    render(<ArticleDescription article={mockArticleContent} variant="highlight" />);
    const articleElement = screen.getByText(mockArticleContent);
    expect(articleElement).toHaveClass(styles['highlight-text']);
  });

  test('applies default style when no variant is provided', () => {
    render(<ArticleDescription article={mockArticleContent} />);
    const articleElement = screen.getByText(mockArticleContent);
    expect(articleElement).toHaveClass(styles['default-text']);
  });
});
