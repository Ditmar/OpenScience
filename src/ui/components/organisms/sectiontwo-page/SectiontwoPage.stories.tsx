import type { Meta, StoryObj } from '@storybook/react';
import SectiontwoPage from './SectiontwoPage';
import secctiontwo from './__mock__/secctiontwo.svg';
import secctiontwoone from './__mock__/secctiontwoone.svg';

import ArticleDescription from '../../atoms/article-description/ArticleDescription';
import ArticleTitle from '../../atoms/article-title/ArticleTitle';
import LabelRecentsArticles from '../../atoms/label-recent-articles/LabelRecentsArticles';
import PointsDivider from '../../atoms/points-divider/PointsDivider';
import VariableButton from '../../atoms/variable-button/VariableButton';
import AuthorLabel from '../../atoms/Author-Label/AuthorLabel';
import LabelDate from '../../atoms/label-date/LabelDate';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import LinkIcon from '../../../../assets/icons/share.svg?raw';

import './SectiontwoPage.scss';

import data from './__mock__/section.json';

const meta: Meta<typeof SectiontwoPage> = {
  component: SectiontwoPage,
  title: 'ui/components/organisms/sectiontwo-page',
  argTypes: {
    backgroundImageDesktop: {
      control: 'select',
      options: [secctiontwo, secctiontwoone],
    },
    backgroundImageMobile: {
      control: 'select',
      options: [secctiontwo, secctiontwoone],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SectionTwo: Story = {
  args: {
    backgroundImageDesktop: String(secctiontwo),
    backgroundImageMobile: String(secctiontwoone),
    children: (
      <>
        {data.featuredItems.map((item) => (
          <div key={item.id} className="section-two__item">
            <div className="featured__item">
              <LabelRecentsArticles text={item.recentArticlesText} color="primary" />
              <LabelDate date={new Date(item.date)} />
              <ArticleTitle title={item.title} variant="default" />
              <ArticleDescription article={item.description} variant="default" />
            </div>
            <div className="divider-author">
              <div className="divider">
                <AuthorLabel variant={item.author} />
                <div className="buttons">
                  <VariableButton icon={PdfIcon} />
                  <VariableButton icon={LinkIcon} />
                </div>
              </div>
            </div>
            <PointsDivider color="tertiary" size="medium" variant="solid-line" />
            <div className="points-divider">
              <PointsDivider color="tertiary" size="small" variant="points" />
            </div>
          </div>
        ))}
      </>
    ),
  },
};
