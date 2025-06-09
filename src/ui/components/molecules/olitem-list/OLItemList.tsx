import styles from './OLItemList.module.scss';
import OLItem from '../../atoms/ol-item/OLItem';
import type { OLItemListProps } from './types/IProps';

function OLItemList({ items, direction = 'row' }: OLItemListProps) {
  return (
    <ol className={`${styles['ol-item-list']} ${styles[`ol-item-list--${direction}`]}`}>
      {items.map((item) => (
        <OLItem
          key={item.value}
          value={item.value}
          shape={item.shape}
          size={item.size}
          active={item.active}
        />
      ))}
    </ol>
  );
}

export default OLItemList;
