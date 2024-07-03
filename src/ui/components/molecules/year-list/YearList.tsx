import React, { useState } from 'react';
import './YearList.scss';
import ButtonYear from '../../atoms/button-year/ButtonYear';
import Year from '../../atoms/year/Year';
import type { IProps, IData } from './types/IProps';

function YearList({ data, buttonText }: IProps) {
  const [years] = useState<IData[]>(data);
  const [hidden, setHidden] = useState(true);

  return (
    <div className="year-list__wrapper">
      <ButtonYear
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        {buttonText}
      </ButtonYear>
      <div className={hidden ? 'year-list__hidden' : 'year-list__container'}>
        {years.map(({ id, attributes }) => (
          <Year key={id}>{attributes.Year}</Year>
        ))}
      </div>
    </div>
  );
}

export default YearList;
