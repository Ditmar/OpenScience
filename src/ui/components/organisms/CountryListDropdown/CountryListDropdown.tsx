import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import type { Country, CountryListDropdownProps } from './types/IProps';
import { CountrySelectList } from '../../molecules/CountrySelectList/CountrySelectList';

export function CountryListDropdown({
  countries = [],
  selectedCountry: selectedCountryCode,
  onSelectCountry,
  maxHeight = 314,
  width = 366,
  headerText = 'Select Country',
}: CountryListDropdownProps): JSX.Element {
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const listContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentIndex = selectedCountryCode
      ? countries.findIndex((c: Country) => c.code === selectedCountryCode)
      : -1;
    setHighlightIndex(currentIndex);
    if (listContainerRef.current && currentIndex !== -1) {
      const itemElement = listContainerRef.current.querySelector(
        `#country-item-${countries[currentIndex].code}`,
      );
      itemElement?.scrollIntoView({ block: 'nearest' });
    }
  }, [countries, selectedCountryCode]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (countries.length === 0) return;
      let newIndex = highlightIndex;
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          newIndex = highlightIndex >= countries.length - 1 ? 0 : highlightIndex + 1;
          break;
        case 'ArrowUp':
          event.preventDefault();
          newIndex = highlightIndex <= 0 ? countries.length - 1 : highlightIndex - 1;
          break;
        case 'Enter':
          if (newIndex !== -1 && countries[newIndex]) {
            event.preventDefault();
            onSelectCountry(countries[newIndex].code);
          }
          return;
        case 'Home':
          event.preventDefault();
          newIndex = 0;
          break;
        case 'End':
          event.preventDefault();
          newIndex = countries.length - 1;
          break;
        default:
          return;
      }
      setHighlightIndex(newIndex);
      if (listContainerRef.current && newIndex !== -1) {
        const itemElement = listContainerRef.current.querySelector(
          `#country-item-${countries[newIndex].code}`,
        );
        itemElement?.scrollIntoView({ block: 'nearest' });
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [highlightIndex, countries, onSelectCountry]);

  return (
    <Box
      sx={{ position: 'relative', width, boxSizing: 'border-box' }}
      role="listbox"
      aria-activedescendant={
        highlightIndex >= 0 ? `country-item-${countries[highlightIndex].code}` : undefined
      }
    >
      <CountrySelectList
        ref={listContainerRef}
        countries={countries}
        onSelectCountry={onSelectCountry}
        selectedCountryCode={selectedCountryCode}
        highlightIndex={highlightIndex}
        headerText={headerText}
        maxHeight={maxHeight}
      />
    </Box>
  );
}
