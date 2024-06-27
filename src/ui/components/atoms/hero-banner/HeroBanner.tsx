import styles from './HeroBanner.module.scss';
import type { IProps } from './types/IProps';

function HeroBanner({ backgroundImage, alt, children, className }: IProps) {
  return (
    <div className={`${styles['hero-banner']} ${className || ''}`}>
      <img src={backgroundImage} alt={alt} className={styles['hero-banner__img']} />
      <div className={styles.overlay}>
        <div className={styles['hero-banner__content']}>{children}</div>
      </div>
    </div>
  );
}

export default HeroBanner;
