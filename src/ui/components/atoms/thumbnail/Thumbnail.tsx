import React from 'react';
import styles from './Thumbnail.module.scss';
import type { IProps } from './types/IProps';

function Thumbnail(props: IProps) {
  const { pathImage, alt } = props;

  return (
    <div className={styles.thumbnail}>
      <img src={pathImage} alt={alt} />
      <div className={styles.overlay} aria-label="overlay">
        {' '}
        {/* Contenido del overlay */}
      </div>
    </div>
  );
}

export default Thumbnail;
