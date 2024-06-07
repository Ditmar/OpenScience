import './styles.scss';
import type { IProps } from './types/IProps';

function LabelFeaturedArticles({ text = 'artículos destacados', ColorVariant = 'main' }: IProps) {
  let LabelColorClass = '';
  let BackgroundColorClass = '';

  if (ColorVariant === 'main') {
    LabelColorClass = 'label-featured-articles--main';
    BackgroundColorClass = 'label-featured-articles--main-bg';
  } else if (ColorVariant === 'primary') {
    LabelColorClass = 'label-featured-articles--primary';
  } else {
    LabelColorClass = 'label-featured-articles--secondary';
  }

  return (
    <div className={`label-featured-articles ${LabelColorClass} ${BackgroundColorClass}`}>
      <span className="label-featured-articles__text">{text}</span>
    </div>
  );
}

export default LabelFeaturedArticles;
