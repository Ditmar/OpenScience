import styles from './Share.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function Share({ text = 'Compartir', colorVariant = 'primary', icon }: IProps) {
  const colorFont =
    colorVariant === 'main' ? styles['label-share--main'] : styles['label-share--primary'];

  return (
    <div className={`${styles['label-share']} ${colorFont}`}>
      {icon && <Icon data-testid="share-icon" src={icon} className={styles['label-share__icon']} />}
      <span className={styles['label-share__text']}>{text}</span>
    </div>
  );
}

export default Share;
