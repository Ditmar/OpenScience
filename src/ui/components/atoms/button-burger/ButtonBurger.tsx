import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';
import styles from './ButtonBurger.module.scss';

function ButtonBurger({ icon, color, onClick }: IProps) {
  const colorClass = styles[color as keyof typeof styles] || '';
  return (
    <button className={`${styles.buttonBurger} ${colorClass}`} aria-label="Menu" onClick={onClick}>
      {icon && <Icon data-testid="button-icon" src={icon} className={styles.buttonIcon} />}
    </button>
  );
}

export default ButtonBurger;
