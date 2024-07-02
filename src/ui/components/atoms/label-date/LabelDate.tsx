import React from 'react';
import type { IProps } from './types/IProps';
import { formatDate } from './utils/dateFormatter';
import styles from './LabelDate.module.scss';

function LabelDate({ date, overflow = false }: IProps) {
  if (!(date instanceof Date)) {
    return null;
  }
  const formattedDate = formatDate(date);
  const isoDate = date.toISOString().split('T')[0];
  const className = `${styles.labeldate}${overflow ? ` ${styles['labeldate--overflow']}` : ''}`;
  return (
    <p className={className} data-iso={isoDate}>
      {formattedDate}
    </p>
  );
}

export default LabelDate;
