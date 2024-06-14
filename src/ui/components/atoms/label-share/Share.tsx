import './Share.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function Share({ text = 'Compartir', colorVariant = 'primary', icon }: IProps) {
  const colorFont = `label-share--${colorVariant as string}`;

  return (
    <div className={`label-share ${colorFont}`}>
      {icon && <Icon data-testid="share-icon" src={icon} className="label-share__icon" />}
      <span className="label-share__text">{text}</span>
    </div>
  );
}

export default Share;
