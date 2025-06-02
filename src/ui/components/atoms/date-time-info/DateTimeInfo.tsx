import React, { useState } from 'react';
import type { IProps } from './types/IProps';
import styles from './DateTimeInfo.module.scss';
import { Icon } from '../../../utils/vite-svgr/Icon';

function formatRelativeTime(timestamp: string | Date): string {
  const now = new Date();
  const time = new Date(timestamp);
  if (Number.isNaN(time.getTime())) return 'Invalid date';

  const diff = Math.floor((now.getTime() - time.getTime()) / 1000);

  if (diff < 60) {
    return `${String(diff)} second${diff === 1 ? '' : 's'} ago`;
  }
  const minutes = Math.floor(diff / 60);
  if (minutes < 60) {
    return `${String(minutes)} minute${minutes === 1 ? '' : 's'} ago`;
  }
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${String(hours)} hour${hours === 1 ? '' : 's'} ago`;
  }
  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `${String(days)} day${days === 1 ? '' : 's'} ago`;
  }
  const months = Math.floor(days / 30);
  if (months < 12) {
    return `${String(months)} month${months === 1 ? '' : 's'} ago`;
  }
  const years = Math.floor(months / 12);
  return `${String(years)} year${years === 1 ? '' : 's'} ago`;
}

function formatISOWithoutTZ(date: Date): string {
  const pad = (n: number) => n.toString().padStart(2, '0');

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${String(year)}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function DateTimeInfo({
  timestamp,
  showIcon = true,
  iconPosition = 'left',
  size = 'large',
  format,
}: IProps) {
  const [showExact, setShowExact] = useState(false);

  const containerClass = [
    styles.container,
    styles[`size--${size}`],
    iconPosition === 'right' ? styles['icon-right'] : '',
  ]
    .filter(Boolean)
    .join(' ');

  const getDisplayTime = (inputTimestamp: IProps['timestamp']): string => {
    if (format) return format(inputTimestamp);
    if (typeof inputTimestamp === 'string' || inputTimestamp instanceof Date) {
      if (showExact) {
        const dateObj = new Date(inputTimestamp);
        if (Number.isNaN(dateObj.getTime())) return 'Invalid date';
        return formatISOWithoutTZ(dateObj);
      }
      return formatRelativeTime(inputTimestamp);
    }
    return String(inputTimestamp);
  };

  const displayTime = getDisplayTime(timestamp);

  return (
    <div className={containerClass}>
      {showIcon && iconPosition === 'left' && (
        <Icon
          iconName="fi-rr-calendar"
          className={styles.icon}
          data-testid="date-icon"
          aria-hidden="true"
        />
      )}
      <button
        type="button"
        className={styles.text}
        onClick={() => {
          setShowExact((prev) => !prev);
        }}
        title="Click to toggle relative/exact date"
      >
        {displayTime}
      </button>
      {showIcon && iconPosition === 'right' && (
        <Icon
          iconName="fi-rr-clock-five"
          className={styles.icon}
          data-testid="date-icon"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
