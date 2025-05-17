import React, { useState, useEffect } from 'react';
import styles from './CountryList.module.scss';

export interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

export const allCountries: Country[] = [
  { code: 'AF', name: 'Afghanistan', flag: 'https://flagcdn.com/w320/af.png', dialCode: '+93' },
  { code: 'AL', name: 'Albania', flag: 'https://flagcdn.com/w320/al.png', dialCode: '+355' },
  { code: 'DZ', name: 'Algeria', flag: 'https://flagcdn.com/w320/dz.png', dialCode: '+213' },
  { code: 'AD', name: 'Andorra', flag: 'https://flagcdn.com/w320/ad.png', dialCode: '+376' },
  { code: 'AO', name: 'Angola', flag: 'https://flagcdn.com/w320/ao.png', dialCode: '+244' },
  { code: 'AR', name: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png', dialCode: '+54' },
  { code: 'AM', name: 'Armenia', flag: 'https://flagcdn.com/w320/am.png', dialCode: '+374' },
  { code: 'AU', name: 'Australia', flag: 'https://flagcdn.com/w320/au.png', dialCode: '+61' },
  { code: 'AT', name: 'Austria', flag: 'https://flagcdn.com/w320/at.png', dialCode: '+43' },
  { code: 'AZ', name: 'Azerbaijan', flag: 'https://flagcdn.com/w320/az.png', dialCode: '+994' },
  { code: 'BD', name: 'Bangladesh', flag: 'https://flagcdn.com/w320/bd.png', dialCode: '+880' },
  { code: 'BE', name: 'Belgium', flag: 'https://flagcdn.com/w320/be.png', dialCode: '+32' },
  { code: 'BO', name: 'Bolivia', flag: 'https://flagcdn.com/w320/bo.png', dialCode: '+591' },
  { code: 'BR', name: 'Brazil', flag: 'https://flagcdn.com/w320/br.png', dialCode: '+55' },
  { code: 'CA', name: 'Canada', flag: 'https://flagcdn.com/w320/ca.png', dialCode: '+1' },
  { code: 'CL', name: 'Chile', flag: 'https://flagcdn.com/w320/cl.png', dialCode: '+56' },
  { code: 'CN', name: 'China', flag: 'https://flagcdn.com/w320/cn.png', dialCode: '+86' },
  { code: 'CO', name: 'Colombia', flag: 'https://flagcdn.com/w320/co.png', dialCode: '+57' },
  { code: 'CR', name: 'Costa Rica', flag: 'https://flagcdn.com/w320/cr.png', dialCode: '+506' },
  { code: 'CU', name: 'Cuba', flag: 'https://flagcdn.com/w320/cu.png', dialCode: '+53' },
  { code: 'DE', name: 'Germany', flag: 'https://flagcdn.com/w320/de.png', dialCode: '+49' },
  { code: 'DK', name: 'Denmark', flag: 'https://flagcdn.com/w320/dk.png', dialCode: '+45' },
  {
    code: 'DO',
    name: 'Dominican Republic',
    flag: 'https://flagcdn.com/w320/do.png',
    dialCode: '+1',
  },
  { code: 'EC', name: 'Ecuador', flag: 'https://flagcdn.com/w320/ec.png', dialCode: '+593' },
  { code: 'EG', name: 'Egypt', flag: 'https://flagcdn.com/w320/eg.png', dialCode: '+20' },
  { code: 'ES', name: 'Spain', flag: 'https://flagcdn.com/w320/es.png', dialCode: '+34' },
  { code: 'FR', name: 'France', flag: 'https://flagcdn.com/w320/fr.png', dialCode: '+33' },
  { code: 'GB', name: 'United Kingdom', flag: 'https://flagcdn.com/w320/gb.png', dialCode: '+44' },
  { code: 'IN', name: 'India', flag: 'https://flagcdn.com/w320/in.png', dialCode: '+91' },
  { code: 'IT', name: 'Italy', flag: 'https://flagcdn.com/w320/it.png', dialCode: '+39' },
  { code: 'JP', name: 'Japan', flag: 'https://flagcdn.com/w320/jp.png', dialCode: '+81' },
  { code: 'MX', name: 'Mexico', flag: 'https://flagcdn.com/w320/mx.png', dialCode: '+52' },
  { code: 'PE', name: 'Peru', flag: 'https://flagcdn.com/w320/pe.png', dialCode: '+51' },
  { code: 'PT', name: 'Portugal', flag: 'https://flagcdn.com/w320/pt.png', dialCode: '+351' },
  { code: 'US', name: 'United States', flag: 'https://flagcdn.com/w320/us.png', dialCode: '+1' },
  { code: 'VE', name: 'Venezuela', flag: 'https://flagcdn.com/w320/ve.png', dialCode: '+58' },
];

export function CountryListDropdown({
  countries,
  selectedCountry,
  onSelectCountry,
  isOpen,
  onClose,
}: {
  countries: Country[];
  selectedCountry?: string;
  onSelectCountry: (countryCode: string) => void;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [highlightIndex, setHighlightIndex] = useState(-1);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === 'ArrowDown') {
        setHighlightIndex((prevIndex) => Math.min(prevIndex + 1, countries.length - 1));
      } else if (event.key === 'ArrowUp') {
        setHighlightIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (event.key === 'Enter' && highlightIndex !== -1) {
        onSelectCountry(countries[highlightIndex].code);
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, highlightIndex, countries, onSelectCountry, onClose]);

  return (
    <div className={styles['country-list__container']}>
      <button onClick={onClose} className={styles['country-list__select-button']}>
        {selectedCountry?.trim() ? selectedCountry : 'Select Country'}
      </button>

      {isOpen && (
        <div className={`${styles['country-list__dropdown']} ${styles.scrollbar}`}>
          <ul className={styles['country-list__list']}>
            {countries.map((country, index) => (
              <li
                key={country.code}
                role="menuitem"
                tabIndex={0}
                onClick={() => {
                  onSelectCountry(country.code);
                  onClose();
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onSelectCountry(country.code);
                    onClose();
                  }
                }}
                className={`${styles['country-list__item']} ${
                  highlightIndex === index ? styles.highlighted : ''
                }`}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className={styles['country-list__flag']}
                />
                <span className={styles['country-list__name']}>{country.name}</span>
                <span className={styles['country-list__dial-code']}>({country.dialCode})</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
