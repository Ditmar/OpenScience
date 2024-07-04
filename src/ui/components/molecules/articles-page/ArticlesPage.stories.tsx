import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import ArticleTitle from '../../atoms/article-title/ArticleTitle';
import ArticleDescription from '../../atoms/article-description/ArticleDescription';
import VariableButton from '../../atoms/variable-button/VariableButton';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import LinkIcon from '../../../../assets/icons/share.svg?raw';
import PointsDivider from '../../atoms/points-divider/PointsDivider';
import LabelDate from '../../atoms/label-date/LabelDate';
import AuthorLabel from '../../atoms/Author-Label/AuthorLabel';
import LabelVolumes from '../../atoms/label-volumes/LabelVolumes';
import Volumen from '../../atoms/label-vol/LabelVol';
import Thumbnail from '../../atoms/thumbnail/Thumbnail';
import Rectangle27 from '../../atoms/thumbnail/__mock__/imgs/Rectangle27.png';
import Rectangle28 from '../../atoms/thumbnail/__mock__/imgs/Rectangle28.png';
import Rectangle29 from '../../atoms/thumbnail/__mock__/imgs/Rectangle29.png';
import Rectangle30 from '../../atoms/thumbnail/__mock__/imgs/Rectangle30.png';

const meta: Meta<typeof ArticlesPage> = {
  component: ArticlesPage,
  title: 'ui/components/molecules/articles-page',
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Articulo: Story = {
  args: {
    children: (
      <>
        <div>
          <div className="date">
            <LabelDate date={new Date(2023, 3, 15)} />
          </div>
          <div className="article-title">
            <ArticleTitle
              title="CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION"
              variant="default"
            />
          </div>
          <div className="article-description">
            <ArticleDescription
              article="Spectral tuning of visual pigments often facilitates adaptation to new environments, 
                    and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded 
                    habitats.The"
              variant="default"
            />
          </div>
        </div>
        <div className="divider">
          <div className="autor">
            <AuthorLabel variant="Marco Antonio Lopez" />
          </div>
          <div className="buttons">
            <VariableButton icon={PdfIcon} />
            <VariableButton icon={LinkIcon} />
          </div>
        </div>
        <div className="point-divider">
          <PointsDivider color="tertiary" size="medium" variant="solid-line" />
        </div>

        <div>
          <div className="date">
            <LabelDate date={new Date(2023, 3, 15)} />
          </div>
          <div className="article-title">
            <ArticleTitle
              title="CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION"
              variant="default"
            />
          </div>
          <div className="article-description">
            <ArticleDescription
              article="Spectral tuning of visual pigments often facilitates adaptation to new environments, 
                        and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded 
                        habitats.The"
              variant="default"
            />
          </div>
        </div>
        <div className="divider">
          <div className="autor">
            <AuthorLabel variant="Marco Antonio Lopez" />
          </div>
          <div className="buttons">
            <VariableButton icon={PdfIcon} />
            <VariableButton icon={LinkIcon} />
          </div>
        </div>
        <div className="point-divider">
          <PointsDivider color="tertiary" size="medium" variant="solid-line" />
        </div>

        <div>
          <div className="date">
            <LabelDate date={new Date(2023, 3, 15)} />
          </div>
          <div className="article-title">
            <ArticleTitle
              title="CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION"
              variant="default"
            />
          </div>
          <div className="article-description">
            <ArticleDescription
              article="Spectral tuning of visual pigments often facilitates adaptation to new environments, 
                        and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded 
                        habitats.The"
              variant="default"
            />
          </div>
        </div>
        <div className="divider">
          <div className="autor">
            <AuthorLabel variant="Marco Antonio Lopez" />
          </div>
          <div className="buttons">
            <VariableButton icon={PdfIcon} />
            <VariableButton icon={LinkIcon} />
          </div>
        </div>
        <div className="point-divider">
          <PointsDivider color="tertiary" size="medium" variant="solid-line" />
        </div>

        <div className="volumes">
          <LabelVolumes text="VOLÚMENES" color="tertiary" />
        </div>

        <div className="carousel__item">
          <Thumbnail pathImage={String(Rectangle27)} alt="Rectangle27" />
          <LabelDate date={new Date(2023, 3, 15)} />
          <Volumen volumen="Vol." id={1} />
        </div>
        <div className="carousel__item">
          <Thumbnail pathImage={String(Rectangle28)} alt="Rectangle28" />
          <LabelDate date={new Date(2023, 6, 9)} />
          <Volumen volumen="Vol." id={2} />
        </div>
        <div className="carousel__item">
          <Thumbnail pathImage={String(Rectangle29)} alt="Rectangle29" />
          <LabelDate date={new Date(2024, 2, 7)} />
          <Volumen volumen="Vol." id={3} />
        </div>
        <div className="carousel__item">
          <Thumbnail pathImage={String(Rectangle30)} alt="Rectangle30" />
          <LabelDate date={new Date(2024, 5, 23)} />
          <Volumen volumen="Vol." id={4} />
        </div>
      </>
    ),
  },
};
