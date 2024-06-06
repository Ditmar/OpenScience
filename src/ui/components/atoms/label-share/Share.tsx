import './styles.scss';
import type { IProps } from './types/IProps';

function Share({ text = 'Compartir', colorVariant = 'primary', icon }: IProps) {
  const getColorClassName = () => {
    return colorVariant === 'main' ? 'label-share--main' : 'label-share--primary';
  };

  return (
    <div className={`label-share ${getColorClassName()}`}>
      <span
        className="label-share__icon"
        data-testid="share-icon"
        dangerouslySetInnerHTML={{ __html: icon || '<div></div>' }}
      />
      <span className="label-share__text">{text}</span>
    </div>
  );
}

export default Share;
