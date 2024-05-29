import React, { useState, useEffect } from 'react';
import './styles.scss';
import type { IProps } from './types/IProps';

function LabelReferences({
  text = 'Referencias',
  sizeVariant = 'small',
  colorVariant = 'primary',
}: IProps) {
  const [width, setWidth] = useState(120);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth < 500 ? window.innerWidth : 120;
      setWidth(newWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getSizeClassName = () => {
    switch (sizeVariant) {
      case 'small':
        return 'label-references-small';
      case 'medium':
        return 'label-references-medium';
      case 'large':
        return 'label-references-large';
      default:
        return 'label-references-medium';
    }
  };

  const getColorClassName = () => {
    if (colorVariant === 'primary') {
      return 'label-references-primary';
    }
    return 'label-references-main';
  };

  const getBackgroundClassName = () => {
    return colorVariant === 'main' ? 'label-references-main-bg' : '';
  };

  return (
    <span
      className={`label-references ${getSizeClassName()} ${getColorClassName()} ${getBackgroundClassName()}`}
      style={{ width: `${width.toString()}px` }}
    >
      {text}
    </span>
  );
}

export default LabelReferences;
