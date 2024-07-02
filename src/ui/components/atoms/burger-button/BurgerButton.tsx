import styles from './BurgerButton.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function BurgerButton({ icon, color, onClick }: IProps) {
  const colorClass = color ? styles[color as keyof typeof styles] : '';

  return (
    <button
      className={`${styles['button-burger']} ${colorClass}`}
      aria-label="Menu"
      onClick={onClick}
    >
      {icon && <Icon data-testid="button-icon" src={icon} className={styles['button-icon']} />}
    </button>
  );
}

export default BurgerButton;
