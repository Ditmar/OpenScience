import './styles.scss';
import type { IProps } from './types/IProps';

function LabelArtDestacados({ text = 'ARTICULOS DESTACADOS', colorVariant = 'main' }: IProps) {
  let labelColorClass = '';
  let backgroundColorClass = '';

  if (colorVariant === 'main') {
    labelColorClass = 'label-articulos-destacados--main';
    backgroundColorClass = 'label-articulos-destacados--main-bg';
  } else if (colorVariant === 'primary') {
    labelColorClass = 'label-articulos-destacados--primary';
  } else {
    labelColorClass = 'label-articulos-destacados--secondary';
  }

  return (
    <div className={`label-articulos-destacados ${labelColorClass} ${backgroundColorClass}`}>
      <span className="label-articulos-destacados__text">{text}</span>
    </div>
  );
}

export default LabelArtDestacados;
