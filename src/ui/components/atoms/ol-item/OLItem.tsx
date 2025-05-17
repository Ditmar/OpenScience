import styles from './OLItem.module.scss';
import type { OLItemProps } from './types/IProps';

function OLItem({ value, shape = 'square', size = 'md', active = false }: OLItemProps) {
  const olItemClass = `
    ${styles['ol-item']}
    ${styles[`ol-item--${shape}`]}
    ${styles[`ol-item--${size}`]}
    ${active ? styles['ol-item--active'] : ''}
  `.trim();

  return (
    <div className={olItemClass} role="listitem">
      {value}
    </div>
  );
}

export default OLItem;
