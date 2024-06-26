import styles from './ButtonWithVariants.module.scss';
import type { IProps } from './types/IProps';

function ButtonWithVariants({ children, variant = 'primary', onClick }: IProps) {
  const variantClass = styles[`button-variant--${variant}`];
  return (
    <button className={`${styles['button-variant']} ${variantClass}`} onClick={onClick}>
      <span className={styles['button-variant-label']}>{children}</span>
    </button>
  );
}

export default ButtonWithVariants;
