import styles from './OLBullet.module.scss';
import type { IProps } from './types/IProps';

function OLBullet(props: IProps) {
  const { shape = 'square', size = 'md', active = false } = props;

  const bulletClass = `
    ${styles['ol-bullet']}
    ${styles[`ol-bullet--${shape}`]}
    ${styles[`ol-bullet--${size}`]}
    ${active ? styles['ol-bullet--active'] : ''}
  `.trim();

  return <span className={bulletClass} role="presentation" />;
}

export default OLBullet;
