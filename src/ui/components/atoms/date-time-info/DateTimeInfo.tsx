import React from 'react';
import { Box, Typography } from '@mui/material';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/vite-svgr/Icon';
import { formatRelativeTime } from '../../../utils/date';
import styles from './DateTimeInfo.module.scss';

export function DateTimeInfo({
  timestamp,
  showIcon = true,
  iconPosition = 'left',
  size = 'large',
  format,
}: IProps) {
  const getDisplayTime = (inputTimestamp: IProps['timestamp']): string => {
    if (format) return format(inputTimestamp);
    const dateObj = new Date(inputTimestamp);
    return Number.isNaN(dateObj.getTime()) ? 'Invalid date' : formatRelativeTime(dateObj);
  };

  const displayTime = getDisplayTime(timestamp);

  const containerClass = [
    styles.container,
    styles[`size--${size}`],
    iconPosition === 'right' ? styles['icon-right'] : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Box className={containerClass}>
      {showIcon && iconPosition === 'left' && (
        <Box className={styles.icon} component="span" aria-hidden="true">
          <Icon iconName="fi-rr-calendar" />
        </Box>
      )}
      <Typography className={styles.text} component="span">
        {displayTime}
      </Typography>
      {showIcon && iconPosition === 'right' && (
        <Box className={styles.icon} component="span" aria-hidden="true">
          <Icon iconName="fi-rr-clock-five" />
        </Box>
      )}
    </Box>
  );
}
