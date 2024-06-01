import React from 'react';
import './styles.scss';
import type { IProps } from './types/IProps';

function LabelReferences({ text = 'Referencias', colorVariant = 'primary' }: IProps) {
  const getColorClassName = () => {
    return colorVariant === 'main' ? 'label-references--main' : 'label-references--primary';
  };

  const getBackgroundClassName = () => {
    return colorVariant === 'main' ? 'label-references--main-bg' : '';
  };

  return (
    <div className={`label-references ${getColorClassName()} ${getBackgroundClassName()}`}>
      <span className="label-references__text">{text}</span>
    </div>
  );
}

export default LabelReferences;
