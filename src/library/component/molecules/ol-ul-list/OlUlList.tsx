import OLItem from '../../../../ui/components/atoms/ol-item/OLItem';
import OLBullet from '../../../../ui/components/atoms/ol-bullet/OLBullet';
import styles from './OlUlList.module.scss';
import type { IProps } from './types/IProps';

function OlUlList({ type, style = 'circle', size = 'medium', items = [], count = 1 }: IProps) {
  const listType = type === 'ordered' ? styles.ordered : styles.unordered;
  const listStyle = styles[`${style}List`] ?? styles.circleList;
  const olItemStyle = style;
  const validSizes = ['extra-small', 'small', 'medium', 'large'];
  const validSize = validSizes.includes(size) ? size : 'medium';
  const sizeList = styles[validSize];

  const sizeMap: Record<NonNullable<IProps['size']>, 'sm' | 'md' | 'lg'> = {
    'extra-small': 'sm',
    small: 'sm',
    medium: 'md',
    large: 'lg',
  };
  const olItemSize = sizeMap[validSize];

  const renderListItems = () => {
    const listData =
      items.length > 0
        ? items
        : Array.from({ length: count }, (_, i) => ({
            subtitle: `Subtítulo ${String(i + 1)}`,
            paragraph: `Este es el párrafo del elemento ${String(i + 1)} de la lista.`,
          }));

    return listData.map((item, index) => (
      <div key={item.subtitle ?? index} className={styles['ol-ul-list__item']}>
        {type === 'ordered' ? (
          <OLItem value={String(index + 1)} active shape={olItemStyle} size={olItemSize} />
        ) : (
          <OLBullet active shape={olItemStyle} size={olItemSize} />
        )}
        <div className={styles['ol-ul-list__item-content']}>
          {item.subtitle && <h3 className={sizeList}>{item.subtitle}</h3>}
          {item.paragraph && <p className={sizeList}>{item.paragraph}</p>}
        </div>
      </div>
    ));
  };

  return (
    <div className={`${styles['ol-ul-list']} ${listType} ${listStyle} ${sizeList}`}>
      {renderListItems()}
    </div>
  );
}

export default OlUlList;
