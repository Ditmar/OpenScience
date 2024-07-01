import { render, screen } from '@testing-library/react';
import ArticleTitle from './ArticleTitle';
import styles from './ArticleTitle.module.scss';

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
    expect(titleElement).toHaveClass(styles.titleText);
    expect(titleElement).toHaveClass(styles.primaryText);
  });

  test('title three of an article', () => {
    const mockTitle = 'New title of an article';
    render(<ArticleTitle title={mockTitle} variant="secondary" />);

    const titleElement = screen.getByText(mockTitle);
    expect(titleElement).toHaveClass(styles.titleText);
    expect(titleElement).toHaveClass(styles.secondaryText);
  });
});
