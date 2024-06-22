import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedArticle from './FeaturedArticle';
import LabelFeaturedArticles from '../../atoms/label-featured-articles/LabelFeaturedArticles';
import ArticleTitle from '../../atoms/article-title/ArticleTitle';
import ArticleDescription from '../../atoms/article-description/ArticleDescription';
import VariableButton from '../../atoms/variable-button/VariableButton';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import LinkIcon from '../../../../assets/icons/share.svg?raw';
import PointsDivider from '../../atoms/points-divider/PointsDivider';
import LabelDate from '../../atoms/label-date/LabelDate';

describe('FeaturedArticle Component', () => {
  test('should render LabelFeaturedArticles, ArticleTitle, ArticleDescription, LabelDate, and VariableButtons', () => {
    render(
      <FeaturedArticle variant="default" article="Test Article" date={new Date(2023, 3, 15)}>
        <LabelFeaturedArticles text="ARTÍCULOS DESTACADOS" ColorVariant="main" />
        <LabelDate date={new Date(2023, 3, 15)} overflow={false} />
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
        <div className="buttons">
          <VariableButton icon={PdfIcon}>PDF</VariableButton>
          <VariableButton icon={LinkIcon}>Link</VariableButton>
        </div>
        <PointsDivider color="secondary" size="medium" variant="solid-line" />
        <PointsDivider color="tertiary" size="small" variant="points" />
      </FeaturedArticle>,
    );

    const labelFeaturedArticles = screen.getByText(/ARTÍCULOS DESTACADOS/i);
    const articleTitle = screen.getByText(
      /CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION/i,
    );
    const articleDescription = screen.getByText(
      /Spectral tuning of visual pigments often facilitates adaptation to new environments/i,
    );
    const labelDate = screen.getByText(/abril 15 | 2023/i);
    const pdfButton = screen.getByText(/PDF/i);
    const linkButton = screen.getByText(/Link/i);

    expect(labelFeaturedArticles).toBeInTheDocument();
    expect(articleTitle).toBeInTheDocument();
    expect(articleDescription).toBeInTheDocument();
    expect(labelDate).toBeInTheDocument();
    expect(pdfButton).toBeInTheDocument();
    expect(linkButton).toBeInTheDocument();
  });
});
