import './LabelDate.scss';
import React from 'react';
import type { IProps } from './types/IProps';

function LavelDate({ month, day, year }: IProps) {
  return <p className="labeldate">{`${month} ${day.toString()} | ${year.toString()}`}</p>;
}
export default LavelDate;
