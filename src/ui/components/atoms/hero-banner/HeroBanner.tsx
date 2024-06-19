import React from 'react';
import './styles.scss';
import type { IProps } from './types/IProps';

function HeroBanner(props: IProps) {
  const { backgroundImage, alt } = props;

  return (
    <div className="heroBanner">
      <img src={backgroundImage} alt={alt} />
      <div className="overlay" aria-label="overlay">
        {' '}
      </div>
    </div>
  );
}

export default HeroBanner;
