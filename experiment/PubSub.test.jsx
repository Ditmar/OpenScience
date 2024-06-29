import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ArticlePublish from '../src/ui/components/molecules/article-publish/ArticlePublish.tsx';
import VolumenCarousel from '../src/ui/components/molecules/volume-carousel/VolumeCarousel.tsx';
import { PubSubProvider } from './PubSubexperiment';

test('ArticlePublish can send message to VolumenCarousel via pub-sub', () => {
  render(
    <PubSubProvider>
      <ArticlePublish />
      <VolumenCarousel />
    </PubSubProvider>,
  );

  fireEvent.click(screen.getByText('Publish Article'));

  expect(screen.getByText('New article published!')).toBeInTheDocument();
});
