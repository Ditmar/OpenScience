import React, { useState, useRef, useEffect } from 'react';
import styles from './PhoneDropdown.module.scss';
import type { IProps, ICountry } from './types/IProps';

const defaultCountries: ICountry[] = [
  { code: 'AR', name: 'Argentina', flag: '🇦🇷', dialCode: '+54' },
  { code: 'AL', name: 'Albania', flag: '🇦🇱', dialCode: '+355' },
  { code: 'DZ', name: 'Algeria', flag: '🇩🇿', dialCode: '+213' },
  { code: 'AD', name: 'Andorra', flag: '🇦🇩', dialCode: '+376' },
];

export function PhoneDropdown({
  label = 'Phone Number',
  value = '',
  onChange,
  countries = defaultCountries,
  placeholder = 'Phone Number',
  error = false,
  helperText = '',
  disabled = false,
  className = '',
  defaultCountry = 'AR',
  size = 'medium',
  border = 'rounded',
}: IProps) {
  const [selectedCountry, setSelectedCountry] = useState<ICountry>(
    countries.find((c) => c.code === defaultCountry) ?? countries[0],
  );
  const [phoneNumber, setPhoneNumber] = useState(value);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleSelect = (country: ICountry) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
    onChange?.(country.dialCode, phoneNumber);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value;
    setPhoneNumber(number);
    onChange?.(selectedCountry.dialCode, number);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const wrapperClass = [
    styles.wrapper,
    styles[size],
    styles[border],
    error ? styles.error : '',
    disabled ? styles.disabled : '',
    className,
  ].join(' ');

  return (
    <div className={wrapperClass} ref={wrapperRef}>
      {label && (
        <label className={styles.label} htmlFor="phone-input">
          {label}
        </label>
      )}

      <div className={styles.container}>
        <div
          role="button"
          tabIndex={0}
          className={[
            styles['dropdown-button'],
            disabled ? styles.disabled : '',
            error ? styles.error : '',
          ].join(' ')}
          onClick={() => {
            if (!disabled) {
              setDropdownOpen((prev) => !prev);
            }
          }}
          onKeyDown={(e) => {
            if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
              setDropdownOpen((prev) => !prev);
            }
          }}
        >
          <span>{selectedCountry.flag}</span>
          <span className={styles.code}>({selectedCountry.dialCode})</span>
          <span className={styles['dropdown-arrow']}>▼</span>
        </div>

        <input
          id="phone-input"
          className={styles.input}
          type="tel"
          value={phoneNumber}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>

      {helperText && <small className={styles['helper-text']}>{helperText}</small>}

      {dropdownOpen && (
        <div className={styles.dropdown}>
          <div className={styles['dropdown-title']}>Select Country</div>
          {countries.map((country) => (
            <div
              key={country.code}
              className={styles['dropdown-item']}
              role="button"
              tabIndex={0}
              onClick={() => {
                handleSelect(country);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSelect(country);
                }
              }}
            >
              <span className={styles.flag}>{country.flag}</span>
              <span>
                {country.name} ({country.dialCode})
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PhoneDropdown;
