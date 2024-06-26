import type { Meta, StoryObj } from '@storybook/react';
import FeaturedArticle from './FeaturedArticle';
import ArticleTitle from '../../atoms/article-title/ArticleTitle';
import ArticleDescription from '../../atoms/article-description/ArticleDescription';
import VariableButton from '../../atoms/variable-button/VariableButton';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import LinkIcon from '../../../../assets/icons/share.svg?raw';
import LabelFeaturedArticles from '../../atoms/label-featured-articles/LabelFeaturedArticles';
import PointsDivider from '../../atoms/points-divider/PointsDivider';
import LabelDate from '../../atoms/label-date/LabelDate';
import AuthorLabel from '../../atoms/Author-Label/AuthorLabel';

const meta: Meta<typeof FeaturedArticle> = {
  component: FeaturedArticle,
  title: 'ui/components/molecules/featured-article',
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Featured: Story = {
  args: {
    children: (
      <>
        <div className="featured__item">
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
        </div>
        <div className="divider">
          <AuthorLabel variant="Marco Antonio Lopez" />
          <div className="buttons">
            <VariableButton icon={PdfIcon}>PDF </VariableButton>
            <VariableButton icon={LinkIcon}>Link</VariableButton>
          </div>
        </div>
        <PointsDivider color="tertiary" size="medium" variant="solid-line" />
        <PointsDivider color="primary" size="small" variant="points" />
      </>
    ),
  },
};
