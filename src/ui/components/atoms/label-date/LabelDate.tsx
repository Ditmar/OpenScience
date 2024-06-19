import './LabelDate.scss';
import React from 'react';
import type { IProps } from './types/IProps';
import { formatDate } from './utils/dateFormatter';

function LabelDate({ date, overflow = false }: IProps) {
  const formattedDate = formatDate(date);
  const isoDate = date.toISOString().split('T')[0];
  const className = `labeldate${overflow ? ' labeldate--overflow' : ''}`;
  return (
    <p className={className} data-iso={isoDate}>
      {formattedDate}
    </p>
  );
}

export default LabelDate;
