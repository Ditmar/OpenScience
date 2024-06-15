import './styles.scss';
import React from 'react';
import type { IProps } from './types/IProps';

function Volumen({ volumen, id }: IProps) {
  return (
    <p className="volumen">
      {volumen} {id}
    </p>
  );
}
export default Volumen;
