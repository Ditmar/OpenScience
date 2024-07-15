import LabelDate from '../../atoms/label-date/LabelDate';
import ArticleTitle from '../../atoms/article-title/ArticleTitle';
import ArticleDescription from '../../atoms/article-description/ArticleDescription';
import AuthorLabel from '../../atoms/Author-Label/AuthorLabel';
import PointsDivider from '../../atoms/points-divider/PointsDivider';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import LinkIcon from '../../../../assets/icons/share.svg?raw';
import VariableButton from '../../atoms/variable-button/VariableButton';
import './styles.scss';

function Article() {
  return (
    <div className="article">
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
      <div className="divider">
        <div className="autor">
          <AuthorLabel variant="Marco Antonio Lopez" />
        </div>
        <div className="buttons">
          <VariableButton icon={PdfIcon} />
          <VariableButton icon={LinkIcon} />
        </div>
      </div>
      <div>
        <PointsDivider color="tertiary" size="medium" variant="solid-line" />
      </div>
    </div>
  );
}

export default Article;
