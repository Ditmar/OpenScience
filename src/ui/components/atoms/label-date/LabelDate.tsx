import './LabelDate.scss';
import React from 'react';
import type { IProps } from './types/Iprops';

const validMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function LavelDate({ month, day, year }: IProps) {
  if (!validMonths.includes(month)) {
    throw new Error('Invalid month ');
  }
  return <p className="labeldate">{`${month} ${day.toString()} | ${year.toString()}`}</p>;
}
export default LavelDate;
