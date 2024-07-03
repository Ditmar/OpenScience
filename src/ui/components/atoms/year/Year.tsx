import styles from './Year.module.scss';
import type { IProps } from './types/IProps';

function Year({ children, onClick }: IProps) {
  const variantClass = styles.year;
  return (
    <button className={`${styles.year} ${variantClass}`} onClick={onClick}>
      <span className={styles['year-label']}>{children}</span>
    </button>
  );
}

export default Year;
