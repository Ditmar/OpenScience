import clsx from 'clsx';
import OLItem from '../../../../ui/components/atoms/ol-item/OLItem';
import OLBullet from '../../../../ui/components/atoms/ol-bullet/OLBullet';
import styles from './OlUlList.module.scss';
import type { IProps } from './types/IProps';

function OlUlList({ type, style = 'circle', size = 'medium', items = [], count = 1 }: IProps) {
  const containerClasses = clsx(
    styles['ol-ul-list'],
    {
      [styles.ordered]: type === 'ordered',
      [styles.unordered]: type === 'unordered',
    },
    styles[`${style}List`] || styles.circleList,
    {
      [styles['extra-small']]: size === 'extra-small',
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium' || !['extra-small', 'small', 'large'].includes(size),
      [styles.large]: size === 'large',
    },
  );

  const contentSizeClass = clsx({
    [styles['extra-small']]: size === 'extra-small',
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium' || !['extra-small', 'small', 'large'].includes(size),
    [styles.large]: size === 'large',
  });

  const olItemSize = clsx({
    sm: size === 'extra-small' || size === 'small',
    md: size === 'medium' || !['extra-small', 'small', 'large'].includes(size),
    lg: size === 'large',
  }) as 'sm' | 'md' | 'lg';

  const olItemStyle = style;

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
          {item.subtitle && <h3 className={contentSizeClass}>{item.subtitle}</h3>}
          {item.paragraph && <p className={contentSizeClass}>{item.paragraph}</p>}
        </div>
      </div>
    ));
  };

  return <div className={containerClasses}>{renderListItems()}</div>;
}

export default OlUlList;
