import './LabelDate.scss';
import React from 'react';
import type { IProps } from './types/IProps';

function LabelDate({ date, overflow = false }: IProps) {
  const month = date.toLocaleString('es-ES', { month: 'long' });
  const dayString = date.getDate().toString();
  const yearString = date.getFullYear().toString();

  const className = `labeldate${overflow ? ' labeldate--overflow' : ''}`;

  return <p className={className}>{`${month} ${dayString} | ${yearString}`}</p>;
}
export default LabelDate;
