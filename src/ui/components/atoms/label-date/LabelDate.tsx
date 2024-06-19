import './LabelDate.scss';
import React from 'react';
import type { IProps } from './types/IProps';
import { formatDate } from './utils/dateFormatter';

function LabelDate({ date, overflow = false }: IProps) {
  const formattedDate = formatDate(date);
  const className = `labeldate${overflow ? ' labeldate--overflow' : ''}`;
  return <p className={className}>{formattedDate}</p>;
}
export default LabelDate;
