//
import React, { useState } from 'react';
import styles from './phoneinput.module.scss';
import type { IProps } from './types/IProps';
import { countryCodes } from './types/countryCodes';

import PhoneIcon from '../../../../assets/icons/fi-sr-phone-call.svg?raw';
import CloseIcon from '../../../../assets/icons/Close-URL.svg?raw';
import CopyIcon from '../../../../assets/icons/fi-rr-copy.svg?raw';
import InfoIcon from '../../../../assets/icons/Info-Tooltip.svg?raw';

function Icon({ src, className }: { src: string; className?: string }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: src }} />;
}

function PhoneInput(props: IProps) {
  const {
    value,
    onChange,
    placeholder = '1234567890',
    variant = 'default',
    size = 'medium',
    borderRadius = 'small',
    label = 'Phone Number',
    showCloseIcon = true,
    onCloseClick,
    onCopyClick,
    showHintText = true,
    hintText = 'Hint Text',
    className = '',
    countryCode = '+591',
    onCountryChange,
  } = props;

  const [selectedCountryCode] = useState(countryCode);

  const wrapperClass = [
    styles.container,
    styles[`variant--${variant}`],
    styles[`size--${size}`],
    styles[`radius--${borderRadius}`],
    className,
  ].join(' ');

  return (
    <div className={wrapperClass}>
      <div className={styles.header}>
        <div className={styles['label-wrapper']}>
          <Icon src={PhoneIcon} className={styles['label-icon']} />
          <span className={styles['label-text']}>{label}</span>
        </div>
        {showCloseIcon && (
          <button
            aria-label="Cerrar"
            className={styles['close-button']}
            onClick={onCloseClick}
            type="button"
          >
            <Icon src={CloseIcon} className={styles['close-icon-url']} />
          </button>
        )}
      </div>

      <div className={styles['input-container']}>
        <div className={styles['input-wrapper']}>
          <Icon src={PhoneIcon} className={styles['planet-icon']} />
          <select
            value={selectedCountryCode}
            disabled={variant === 'disabled'}
            className={styles.protocol}
            onChange={(e) => onCountryChange?.(e.target.value)}
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code}
              </option>
            ))}
          </select>
          <span className={styles.divider}>|</span>
          <div className={styles['input-group']}>
            <Icon src={PhoneIcon} className={styles['input-icon']} />
            <input
              type="tel"
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
              }}
              placeholder={placeholder}
              disabled={variant === 'disabled'}
              className={styles.input}
            />
          </div>
          <button
            type="button"
            className={styles['copy-button']}
            onClick={onCopyClick}
            disabled={variant === 'disabled'}
            aria-label="Copy phone number"
          >
            <Icon src={CopyIcon} className={styles['copy-icon']} />
          </button>
        </div>
      </div>

      <div className={styles.footer}>
        {showHintText && hintText && (
          <div className={`${styles['hint-text']} ${variant === 'error' ? styles.error : ''}`}>
            <Icon src={InfoIcon} className={styles['info-icon']} />
            <span>{hintText}</span>
          </div>
        )}
        <Icon src={InfoIcon} className={styles['standalone-info-icon']} />
      </div>
    </div>
  );
}

export default PhoneInput;
