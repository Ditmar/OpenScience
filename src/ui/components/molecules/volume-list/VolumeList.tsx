import React, { useState } from 'react';
import './VolumeList.scss';
import LabelDate from '../../atoms/label-date/LabelDate';
import Volumen from '../../atoms/label-vol/LabelVol';
import Thumbnail from '../../atoms/thumbnail/Thumbnail';
import dataMock from './__mock__/datamock.json';
import type { IProps } from './types/IProps';

function VolumeList() {
  const [volumes] = useState<IProps[]>(dataMock.volumes);

  return (
    <div className="volume-list__container">
      <h1 className="volume-list__title">volumenes</h1>
      <div className="volume-list">
        {volumes.map((volume) => (
          <div key={volume.id} className="volume-list__item">
            <div className="volume-list-thumbnail">
              {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
              <Thumbnail pathImage={String(volume.image)} alt={`Volume ${volume.id}`} />
            </div>
            <LabelDate date={new Date(volume.date)} />
            {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
            <Volumen volumen="Vol." id={volume.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default VolumeList;
