import React from 'react';
import './VolumeComponent.scss';
import type { IProps } from './types/IProps';

function VolumeComponent({ children, variant, article, date }: IProps): JSX.Element {
  return (
    <div className={`volume-component ${variant}`}>
      <div className="header">
        <h2>{article}</h2>
        <span>{date.toDateString()}</span>
      </div>
      <div className="body">{children}</div>
    </div>
  );
}

export default VolumeComponent;
