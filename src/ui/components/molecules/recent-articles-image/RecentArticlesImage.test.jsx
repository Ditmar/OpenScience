import React from 'react';
import { render, screen } from '@testing-library/react';
import RecentArticlesImage from './RecentArticlesImage.tsx';
import LabelRecentArticles from '../../atoms/label-recent-articles/LabelRecentsArticles.tsx';
import ArticleTitle from '../../atoms/article-title/ArticleTitle.tsx';
import ArticleDescription from '../../atoms/article-description/ArticleDescription.tsx';
import PointsDivider from '../../atoms/points-divider/PointsDivider.tsx';
import LabelDate from '../../atoms/label-date/LabelDate.tsx';
import AuthorLabel from '../../atoms/Author-Label/AuthorLabel.tsx';

describe('RecentArticlesImage Component', () => {
  test('should render FeaturedArticle', () => {
    render(
      <RecentArticlesImage variant="default" article="Test Article" date={new Date(2023, 3, 15)}>
        <LabelRecentArticles text="ARTICULOS MAS RECIENTES" ColorVariant="main" />
        <LabelDate date={new Date(2023, 3, 15)} />
        <ArticleTitle
          title="CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION"
          variant="default"
        />
        <ArticleDescription
          article="Spectral tuning of visual pigments often facilitates adaptation to new environments, 
          and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded 
          habitats.The"
          variant="default"
        />
        <AuthorLabel variant="Marco antonio lopez" />
        <PointsDivider color="tertiary" size="medium" variant="solid-line" />
        <PointsDivider color="primary" size="small" variant="points" />
      </RecentArticlesImage>,
    );

    const LabelRecentsArticles = screen.getByText(/ARTICULOS MAS RECIENTES/i);
    const articleTitle = screen.getByText(
      /CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION/i,
    );
    const articleDescription = screen.getByText(
      /Spectral tuning of visual pigments often facilitates adaptation to new environments/i,
    );
    const labelDate = screen.getByText(/abril 15 | 2023/i);
    const lavelElement = screen.getByText('Marco antonio lopez');

    expect(LabelRecentsArticles).toBeInTheDocument();
    expect(articleTitle).toBeInTheDocument();
    expect(articleDescription).toBeInTheDocument();
    expect(labelDate).toBeInTheDocument();
    expect(lavelElement).toBeInTheDocument();
  });
});
