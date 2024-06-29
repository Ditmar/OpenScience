import React, { useState } from 'react';
import './VolumeList.scss';
import LabelDate from '../../atoms/label-date/LabelDate';
import Volumen from '../../atoms/label-vol/LabelVol';
import Thumbnail from '../../atoms/thumbnail/Thumbnail';
import dataMock from './__mock__/datamock.json';
import type { IProps } from './types/IProps';

function VolumeList() {
  const [volumes] = useState<IProps[]>(dataMock.data);

  return (
    <div className="volume-list__container">
      <h1 className="volume-list__title">volumenes</h1>
      <div className="volume-list">
        {volumes.map(({ id, attributes }) => {
          const {
            date,
            portrait: {
              data: {
                attributes: { url: portraitUrl },
              },
            },
            year_volume: {
              data: {
                attributes: { Volumes },
              },
            },
          } = attributes;

          return (
            <div key={id} className="volume-list__item">
              <div className="volume-list-thumbnail">
                <Thumbnail pathImage={portraitUrl} alt={`Volume ${Volumes}`} />
              </div>
              <LabelDate date={new Date(date)} />
              <Volumen volumen="Vol." id={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VolumeList;
