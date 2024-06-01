import React from 'react';
import './styles.scss';
import type { IProps } from './types/IProps';

function LabelReferences({ text = 'Referencias', colorVariant = 'primary' }: IProps) {
  const getColorClassName = () => {
<<<<<<< HEAD
    return colorVariant === 'main' ? 'label-references--main' : 'label-references--primary';
  };

  const getBackgroundClassName = () => {
    return colorVariant === 'main' ? 'label-references--main-bg' : '';
  };

  return (
    <div className={`label-references ${getColorClassName()} ${getBackgroundClassName()}`}>
      <span className="label-references__text">{text}</span>
    </div>
=======
    return colorVariant === 'main' ? 'label-references-main' : 'label-references-primary';
  };

  const getBackgroundClassName = () => {
    return colorVariant === 'main' ? 'label-references-main-bg' : '';
  };

  return (
    <span className={`label-references ${getColorClassName()} ${getBackgroundClassName()}`}>
      {text}
    </span>
>>>>>>> 462ad1433154561492121f5d5b9f6b2ed8c86c53
  );
}

export default LabelReferences;
