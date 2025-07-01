import React, { useState, useRef } from 'react';
import { Box, Collapse, ClickAwayListener } from '@mui/material';
import InputPhone from '../../molecules/input-phone/InputPhone';
import { CountryList } from '../../molecules/country-list/CountryList';
import type { PhoneDropdownProps } from './types/IProps';
import type { CountryFlagProps } from '../../atoms/icon-flag/types/IProps';
import { allCountries } from '../../atoms/icon-flag/countryMock';

export default function PhoneDropdown({
  iconText = 'Phone Number',
  hintText = '',
  size = 'medium',
  disabled = false,
  borderRadius = 'rounded',
  state = 'default',
  initialValue = '',
  onClose,
  onCountrySelect,
  onChange,
  countryListProps = {},
}: PhoneDropdownProps) {
  const [phoneValue, setPhoneValue] = useState<string>(initialValue);
  const [isCountryListOpen, setIsCountryListOpen] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryFlagProps>(
    allCountries.find((c) => c.code === 'AR') ?? allCountries[0],
  );

  const containerRef = useRef<HTMLDivElement>(null);

  const handlePhoneChange = (value: string) => {
    setPhoneValue(value);
    onChange?.(value);
  };

  const handleCountrySelect = (country: CountryFlagProps) => {
    setSelectedCountry(country);
    onCountrySelect?.(country);
  };

  const toggleCountryList = () => {
    if (!disabled) {
      setIsCountryListOpen(!isCountryListOpen);
    }
  };

  const handleClickAway = () => {
    setIsCountryListOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        ref={containerRef}
        data-testid="phone-dropdown"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: '100%',
          maxWidth: '371px',
          position: 'relative',
        }}
      >
        <InputPhone
          iconText={iconText}
          hintText={isCountryListOpen ? '' : hintText}
          size={size}
          disabled={disabled}
          borderRadius={borderRadius}
          state={state}
          initialValue={phoneValue}
          onChange={handlePhoneChange}
          onClose={onClose}
          onCountryButtonClick={toggleCountryList}
          selectedCountry={selectedCountry}
          isOpen={isCountryListOpen}
        />

        <Collapse in={isCountryListOpen}>
          <Box sx={{ mt: 1 }}>
            <CountryList
              countries={countryListProps.countries ?? allCountries}
              size={size}
              flagVariant="circular"
              containerVariant={borderRadius}
              onCountrySelect={handleCountrySelect}
              showTitle
              title="Select Country"
              titleSize={size}
            />
          </Box>
        </Collapse>
      </Box>
    </ClickAwayListener>
  );
}
