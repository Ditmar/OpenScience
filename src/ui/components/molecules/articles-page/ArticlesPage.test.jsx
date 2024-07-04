import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import ArticlesPage from './ArticlesPage.tsx';
import LabelDate from '../../atoms/label-date/LabelDate.tsx';
import ArticleTitle from '../../atoms/article-title/ArticleTitle.tsx';
import ArticleDescription from '../../atoms/article-description/ArticleDescription.tsx';
import VariableButton from '../../atoms/variable-button/VariableButton.tsx';
import PointsDivider from '../../atoms/points-divider/PointsDivider.tsx';
import AuthorLabel from '../../atoms/Author-Label/AuthorLabel.tsx';
import LabelVolumes from '../../atoms/label-volumes/LabelVolumes.tsx';
import Volumen from '../../atoms/label-vol/LabelVol.tsx';
import Thumbnail from '../../atoms/thumbnail/Thumbnail.tsx';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import LinkIcon from '../../../../assets/icons/share.svg?raw';
import Rectangle27 from '../../atoms/thumbnail/__mock__/imgs/Rectangle27.png';
import Rectangle28 from '../../atoms/thumbnail/__mock__/imgs/Rectangle28.png';
import Rectangle29 from '../../atoms/thumbnail/__mock__/imgs/Rectangle29.png';
import Rectangle30 from '../../atoms/thumbnail/__mock__/imgs/Rectangle30.png';

describe('ArticlesPage', () => {
  test('renders children correctly', () => {
    render(
      <ArticlesPage>
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
                    habitats."
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
      </ArticlesPage>,
    );

    expect(
      screen.getByText(
        'CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Marco Antonio Lopez')).toBeInTheDocument();
    expect(screen.getAllByRole('img').length).toBe(4);
  });
});
