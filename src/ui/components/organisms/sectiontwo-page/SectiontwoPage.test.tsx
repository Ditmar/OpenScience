import { render, screen } from '@testing-library/react';
import LabelRecentArticles from '../../atoms/label-recent-articles/LabelRecentsArticles';
import ArticleTitle from '../../atoms/article-title/ArticleTitle';
import ArticleDescription from '../../atoms/article-description/ArticleDescription';
import PointsDivider from '../../atoms/points-divider/PointsDivider';
import LabelDate from '../../atoms/label-date/LabelDate';
import AuthorLabel from '../../atoms/Author-Label/AuthorLabel';
import SectiontwoPage from './SectiontwoPage';

describe('RecentArticlesImage Component', () => {
  test('should render FeaturedArticle', () => {
    render(
      <SectiontwoPage
        pathImage=""
        variant="default"
        article="Test Article"
        date={new Date(2023, 3, 15)}
      >
        <LabelRecentArticles text="ARTICULOS MAS RECIENTES" />
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
      </SectiontwoPage>,
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
