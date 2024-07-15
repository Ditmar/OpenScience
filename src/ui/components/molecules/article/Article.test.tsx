import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Article from './Article';
import { ArticleStory } from './Article.stories';

describe('Article Component', () => {
  const renderArticle = () => {
    return render(<Article>{ArticleStory.args?.children}</Article>);
  };

  it('renders the article title correctly', () => {
    renderArticle();
    const title = screen.getByText(
      'CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION',
    );
    expect(title).toBeInTheDocument();
  });

  it('renders the author label', () => {
    renderArticle();
    const author = screen.getByText('Marco Antonio Lopez');
    expect(author).toBeInTheDocument();
  });

  it('renders the correct publication date', () => {
    renderArticle();
    const date = screen.getByText(/Julio 19 \| 2020/);
    expect(date).toBeInTheDocument();
  });

  it('renders the article description', () => {
    renderArticle();
    const descriptions = screen.getAllByText(
      /Spectral tuning of visual pigments often facilitates adaptation to new environments/i,
    );
    expect(descriptions.length).toBeGreaterThan(0);
    expect(descriptions[0]).toBeInTheDocument();
  });

  it('renders the thumbnail image', () => {
    renderArticle();
    const image = screen.getByAltText('image');
    expect(image).toBeInTheDocument();
  });

  it('renders the option menu', () => {
    renderArticle();
    const optionMenu = screen.getAllByRole('button');
    expect(optionMenu.length).toBeGreaterThan(0);
  });
});
