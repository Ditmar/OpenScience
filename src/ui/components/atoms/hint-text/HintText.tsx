import type { IProps } from './types/IProps';
import styles from './HintText.module.scss';
import { Icon } from '../../../utils/svg-icons/icons';
import infoRaw from '../../../../assets/icons/fi-rr-info.svg?raw';

export default function HintText({ text, size = 'medium', className = '' }: IProps): JSX.Element {
  const sizeClass = styles[`hint-text--${size}`];

  return (
    <div data-testid="hint-text" className={`${styles['hint-text']} ${sizeClass} ${className}`}>
      <Icon
        data-testid="hint-icon-left"
        src={infoRaw}
        className={`${styles['hint-text__icon']} ${sizeClass}`}
      />
      <span className={styles['hint-text__text']}>{text}</span>
      <Icon
        data-testid="hint-icon-right"
        src={infoRaw}
        className={`${styles['hint-text__icon']} ${styles['hint-text__icon--right']} ${sizeClass}`}
      />
    </div>
  );
}
