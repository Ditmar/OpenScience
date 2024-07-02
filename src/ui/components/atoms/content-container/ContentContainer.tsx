import React from 'react';
import styles from './ContentContainer.module.scss';
import type { IProps } from './types/IProps';

function ContentContainer(props: IProps) {
  const { pathImage, alt } = props;

  return (
    <div className={styles.container}>
      <img src={pathImage} alt={alt} />
      <div className={styles.overlay} aria-label="overlay">
        {' '}
        {/* Contenido del overlay */}
      </div>
    </div>
  );
}

export default ContentContainer;
