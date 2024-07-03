import styles from './ButtonYear.module.scss';
import type { IProps } from './types/IProps';

function ButtonYear({ children, onClick }: IProps) {
  const variantClass = styles[`button-year`];
  return (
    <button className={`${styles['button-year']} ${variantClass}`} onClick={onClick}>
      <span className={styles['button-year-label']}>{children}</span>
    </button>
  );
}

export default ButtonYear;
