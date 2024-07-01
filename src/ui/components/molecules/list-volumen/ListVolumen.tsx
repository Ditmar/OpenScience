import React from 'react';
import type { IProps } from './types/IProps';
import './ListVolumen.scss';

function VolumeList(props: IProps) {
  const { children } = props;

  return (
    <div className="volume__container">
      <div className="volume__item">{children}</div>
    </div>
  );
}

export default VolumeList;
