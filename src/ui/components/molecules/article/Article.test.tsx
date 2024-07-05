import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from './Article';
import { Default } from './Article.stories';

describe('Article Component', () => {
  const renderArticle = () => {
    render(<Article>{Default.args?.children}</Article>);
  };

  it('renders the title', () => {
    renderArticle();
    const title = screen.getByText(
      'CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION',
    );
    expect(title).toBeInTheDocument();
  });

  it('renders the publication date', () => {
    renderArticle();
    const date = screen.getByText(/April 16, 2023/);
    expect(date).toBeInTheDocument();
  });

  it('renders the author', () => {
    renderArticle();
    const author = screen.getByText('Marco Antonio Lopez');
    expect(author).toBeInTheDocument();
  });

  it('renders the description', () => {
    renderArticle();
    const descriptions = screen.getAllByText(
      /The inner workings of these networks are largely opaque/i,
    );
    expect(descriptions.length).toBeGreaterThan(0);
    expect(descriptions[0]).toBeInTheDocument();
  });

  it('renders the thumbnail images', () => {
    renderArticle();
    const image = screen.getByAltText('image');
    expect(image).toBeInTheDocument();
  });

  it('renders the menu', () => {
    renderArticle();
    const optionMenu = screen.getAllByRole('button');
    expect(optionMenu.length).toBeGreaterThan(0);
  });
});
