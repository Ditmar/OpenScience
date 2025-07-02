import React from 'react';
import { render } from '@testing-library/react';
import RecentArticleCard from './RecentArticleCard';

test('renders article card with all props', () => {
  const { getByText } = render(
    <RecentArticleCard
      date={new Date('2023-04-16')}
      title="Test Title"
      description="Test Description"
      author="Test Author"
      pdfUrl="https://example.com/test.pdf"
    />
  );
  expect(getByText('Test Title')).toBeInTheDocument();
  expect(getByText('Test Description')).toBeInTheDocument();
  expect(getByText('Test Author')).toBeInTheDocument();
});