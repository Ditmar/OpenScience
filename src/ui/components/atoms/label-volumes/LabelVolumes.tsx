import React from 'react';
import styles from './LabelVolumes.module.scss';
import type { IProps } from './types/IProps';

function LabelVolumes({ text, color = 'primary' }: IProps) {
  const colorText = styles[`label-volumes__text--${color}`];

  return (
    <div
      className={`${styles['label-volumes__text']} ${colorText}`}
      data-testid="label-volumes-text"
    >
      <span>{text}</span>
    </div>
  );
}

export default LabelVolumes;
