import React from 'react';

import LabelVolumes from '../../atoms/label-volumes/LabelVolumes';
import Volume from '../../molecules/volume/Volume';
import styles from './VolumeList.module.scss';
import type { IProps } from './types/IProps';

function VolumeList({ title, volumes = [] }: IProps) {
  return (
    <>
      <div className={styles.header}>
        <LabelVolumes text={title} color="tertiary" />
      </div>

      {volumes.length > 0 && (
        <div className={styles.grid}>
          {volumes.map(({ uuid, pathImage, alt, date, volumen, id }) => (
            <Volume
              key={uuid}
              pathImage={pathImage}
              alt={alt}
              date={date}
              volumen={volumen}
              id={id}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default VolumeList;
