import type { Meta, StoryObj } from '@storybook/react';

import LabelDate from '../../atoms/label-date/LabelDate';
import ArticleTitle from '../../atoms/article-title/ArticleTitle';
import AuthorLabel from '../../atoms/Author-Label/AuthorLabel';
import Divider from '../../atoms/divider/Divider';
import ArticleDescription from '../../atoms/article-description/ArticleDescription';
import Thumbnail from '../../atoms/thumbnail/Thumbnail';
import LabelVol from '../../atoms/label-vol/LabelVol';
import Imagen from './__mock__/Rectangle 86.png';
import Article from './Article';
import OptionMenu from '../option-menu/OptionMenu';
import './Article.scss';

const meta: Meta<typeof Article> = {
  component: Article,
  title: 'ui/components/molecules/article',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const ArticleStory: Story = {
  args: {
    children: (
      <>
        <div className="article-section">
          <LabelDate date={new Date(2020, 6, 19)} />
          <ArticleTitle title="CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION" />
          <AuthorLabel variant="Marco Antonio Lopez" />
          <div className="date-section">
            <LabelDate date={new Date(2023, 3, 16)} />
            <span className="separator">│</span>
            <LabelVol volumen="Vol." id={1} />
            <span className="separator">│</span>
            <LabelVol volumen="Nu." id={1} />
          </div>
          <div className="mobile-option">
            <OptionMenu />
          </div>
          <div className="desktop-divider">
            <Divider variant="solid" />
          </div>

          <ArticleDescription
            article="Spectral tuning of visual pigments often facilitates adaptation to new environments,
                        and it is intriguing to study the visual ecology of pelagic sharks with
                        secondarily expanded habitats. The`Spectral tuning of visual pigments often facilitates adaptation to new environments,
                        and it is intriguing to study the visual ecology of pelagic sharks with
                        secondarily expanded habitats. The`Spectral tuning of visual pigments often facilitates adaptation to new environments,
                        and it is intriguing to study the visual ecology of pelagic sharks with
                        secondarily expanded habitats. The`Spectral tuning of visual pigments often facilitates adaptation to new environments,
                        and it is intriguing to study the visual ecology of pelagic sharks with
                        secondarily expanded habitats. The`Spectral tuning of visual pigments often facilitates adaptation to new environments,
                        and it is intriguing to study the visual ecology of pelagic sharks with
                        secondarily expanded habitats. The`"
            variant="default"
          />
          <div className="image-section">
            <Thumbnail pathImage={String(Imagen)} alt="image" />
          </div>
          <ArticleDescription
            article="Spectral tuning of visual pigments often facilitates adaptation to new environments,
                            and it is intriguing to study the visual ecology of pelagic sharks with
                            secondarily expanded habitats. The`Spectral tuning of visual pigments often facilitates adaptation to new environments,
                            and it is intriguing to study the visual ecology of pelagic sharks with
                            secondarily expanded habitats. The`Spectral tuning of visual pigments often facilitates adaptation to new environments,
                            and it is intriguing to study the visual ecology of pelagic sharks with
                            secondarily expanded habitats. The`Spectral tuning of visual pigments often facilitates adaptation to new environments,
                            and it is intriguing to study the visual ecology of pelagic sharks with
                            secondarily expanded habitats. The`"
            variant="default"
          />
        </div>
        <div className="desktop-option">
          <OptionMenu />
        </div>
      </>
    ),
  },
};
