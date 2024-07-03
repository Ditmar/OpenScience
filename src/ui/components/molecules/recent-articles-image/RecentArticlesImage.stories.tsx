import type { Meta, StoryObj } from '@storybook/react';
import RecentArticlesImage from './RecentArticlesImage';
import ArticleDescription from '../../atoms/article-description/ArticleDescription';
import ArticleTitle from '../../atoms/article-title/ArticleTitle';
import LabelRecentsArticles from '../../atoms/label-recent-articles/LabelRecentsArticles';
import PointsDivider from '../../atoms/points-divider/PointsDivider';
import VariableButton from '../../atoms/variable-button/VariableButton';
import AuthorLabel from '../../atoms/Author-Label/AuthorLabel';
import LabelDate from '../../atoms/label-date/LabelDate';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import LinkIcon from '../../../../assets/icons/share.svg?raw';

import './styles.scss';

const meta: Meta<typeof RecentArticlesImage> = {
  component: RecentArticlesImage,
  title: 'ui/components/molecules/recent-articles-image',
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Articles: Story = {
  args: {
    children: (
      <>
        <div className="featured__item">
          <LabelRecentsArticles text="ARTICULOS MAS RECIENTES" color="primary" />
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
        </div>
        <div className="divider">
          <AuthorLabel variant="Marco Antonio Lopez" />
          <div className="buttons">
            <VariableButton icon={PdfIcon} />
            <VariableButton icon={LinkIcon} />
          </div>
        </div>
        <PointsDivider color="tertiary" size="medium" variant="solid-line" />
        <div className="points-divider">
          <PointsDivider color="tertiary" size="small" variant="points" />
        </div>
      </>
    ),
  },
};
