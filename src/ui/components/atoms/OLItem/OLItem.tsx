import React from 'react';
import styles from './OLItem.module.scss';
import type { OLItemProps } from './types/IProps';

function OLItem({
  value,
  shape = 'square',
  size = 'sm',
  styleType = 'default',
  active = false,
}: OLItemProps) {
  const baseClass = styles['ol-item'];
  const shapeClass = styles[`ol-item--${shape}`] || '';
  const sizeClass = styles[`ol-item--${size}`] || '';
  const styleClass = styleType === 'stroked' ? styles['ol-item--stroked'] : '';
  const activeClass = active ? styles['ol-item--active'] : '';

  return (
    <div
      className={`${baseClass} ${shapeClass} ${sizeClass} ${styleClass} ${activeClass}`}
      role="listitem"
    >
      {value}
    </div>
  );
}

export default OLItem;
