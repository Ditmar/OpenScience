import React from 'react';
import type { IProps } from './types/IProps';
import styles from './DateTimeInfo.module.scss';
import { Icon } from '../../../utils/vite-svgr/Icon';
import { formatRelativeTime } from '../../../utils/date';

export function DateTimeInfo({
  timestamp,
  showIcon = true,
  iconPosition = 'left',
  size = 'large',
  format,
}: IProps) {
  const containerClass = [
    styles.container,
    styles[`size--${size}`],
    iconPosition === 'right' ? styles['icon-right'] : '',
  ]
    .filter(Boolean)
    .join(' ');

  const getDisplayTime = (inputTimestamp: IProps['timestamp']): string => {
    if (format) return format(inputTimestamp);
    const dateObj = new Date(inputTimestamp);
    return Number.isNaN(dateObj.getTime()) ? 'Invalid date' : formatRelativeTime(dateObj);
  };

  const displayTime = getDisplayTime(timestamp);

  return (
    <div className={containerClass}>
      {showIcon && iconPosition === 'left' && (
        <Icon iconName="fi-rr-calendar" className={styles.icon} aria-hidden="true" />
      )}
      <span className={styles.text}>{displayTime}</span>
      {showIcon && iconPosition === 'right' && (
        <Icon iconName="fi-rr-clock-five" className={styles.icon} aria-hidden="true" />
      )}
    </div>
  );
}
