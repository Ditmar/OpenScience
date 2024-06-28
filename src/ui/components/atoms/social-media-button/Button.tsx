import styles from './Button.module.scss';
import { Icon } from '../../../utils/svg-icons/icons';
import type { IProps } from './types/IProps';

function SMButton(props: IProps) {
  const { children, icon, color } = props;
  const colorFont = styles[`button--${color as string}`];
  return (
    <button className={styles.button__label}>
      <div className={`${styles.button} ${colorFont}`}>
        {icon && <Icon src={icon} className={styles.button__icon} />}
      </div>
      <span className={styles.button__text}>{children}</span>
    </button>
  );
}
export default SMButton;
