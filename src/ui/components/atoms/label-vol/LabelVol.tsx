import React from 'react';
import style from './LabelVol.module.scss';
import type { IProps } from './types/IProps';

function Volumen({ volumen, id }: IProps) {
  return (
    <p className={style.volumen}>
      {volumen} {id}
    </p>
  );
}
export default Volumen;
