import styles from './logo.module.scss';
import type { IProps } from './types/IProps';

function Logo(props: IProps) {
  const { src, alt, variant = 'primary' } = props;
  const colorClass = `logo-container--${variant}`;

  return (
    <header className={`${styles['logo-container']}  ${styles[colorClass]}`}>
      <div>
        <img src={src} alt={alt} className={styles['logo-image']} />
      </div>
      <div />
    </header>
  );
}

export default Logo;
