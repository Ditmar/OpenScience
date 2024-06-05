import { render, screen } from '@testing-library/react';
import AuthorLabel from './AuthorLabel';

describe('Testing Button React Component', () => {
  test('should be rendere Marco antonio lopez', () => {
    render(<AuthorLabel variant="Marco antonio lopez"></AuthorLabel>);
    const lavelElement = screen.getByText('Marco antonio lopez');
    expect(lavelElement).toBeInTheDocument();
  });

  test('should be rendere jk Rolling', () => {
    render(<AuthorLabel variant="jk Rolling"></AuthorLabel>);
    const lavelElement = screen.getByText('jk Rolling');
    expect(lavelElement).toBeInTheDocument();
  });
});
