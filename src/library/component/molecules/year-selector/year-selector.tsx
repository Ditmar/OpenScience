import React, { useState } from 'react';
import ButtonYear from '../../../../ui/components/atoms/button-year/ButtonYear';
import Year from '../../../../ui/components/atoms/year/Year';
import HeroBanner from '../../../../ui/components/atoms/hero-banner/HeroBanner';
import type { IData, IProps } from './types/IProps';
import {
  YearSelectorContainer,
  YearSelectorWrapper,
  YearListContainer,
  FullScreenHero,
} from './year-selector.styles';

function YearSelector({ data, initialYear = 'AÑO', backgroundImage }: IProps) {
  const [years] = useState<IData[]>(data);
  const [isListHidden, setIsListHidden] = useState(true);
  const [selectedYear, setSelectedYear] = useState(initialYear);

  const handleYearClick = (year: string) => {
    setSelectedYear(year);
    setIsListHidden(true);
  };

  const toggleYearList = () => {
    setIsListHidden(!isListHidden);
  };

  return (
    <YearSelectorContainer>
      <HeroBanner backgroundImage={backgroundImage} alt="Background" className="hero-banner">
        <FullScreenHero style={{ backgroundImage: `url(${backgroundImage})` }} />
      </HeroBanner>
      <YearSelectorWrapper>
        <ButtonYear onClick={toggleYearList}>{selectedYear}</ButtonYear>
        <YearListContainer hidden={isListHidden}>
          {years.map(({ id, attributes }) => (
            <Year
              key={id}
              onClick={() => {
                handleYearClick(attributes.Year);
              }}
              aria-label={`Select year ${attributes.Year}`}
            >
              {attributes.Year}
            </Year>
          ))}
        </YearListContainer>
      </YearSelectorWrapper>
    </YearSelectorContainer>
  );
}

export default YearSelector;
