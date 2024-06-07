import './styles.scss';
import type { IProps } from './types/IProps';

function LabelArtDestacados({ text = 'ARTICULOS DESTACADOS', colorVariant = 'main' }: IProps) {
  let labelColorClass = '';
  let backgroundColorClass = '';

  if (colorVariant === 'main') {
    labelColorClass = 'LabelArticulosDestacadosMain';
    backgroundColorClass = 'LabelArticulosDestacadosMainBg';
  } else if (colorVariant === 'primary') {
    labelColorClass = 'LabelArticulosDestacadosPrimary';
  } else {
    labelColorClass = 'LabelArticulosDestacadosSecondary';
  }

  return (
    <div className={`label-articulos-destacados ${labelColorClass} ${backgroundColorClass}`}>
      <span className="label-articulos-destacados__text">{text}</span>
    </div>
  );
}

export default LabelArtDestacados;
