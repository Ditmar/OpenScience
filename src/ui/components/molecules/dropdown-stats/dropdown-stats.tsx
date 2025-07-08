import React from 'react';
import styles from './dropdown-stats.module.scss';
import type { DropdownStatsProps } from './types/IProps';
import { useDropdownToggle } from '../../../utils/hooks/useDropdownToggle';

function DropdownStats({
  options,
  selectedValue,
  onChange,
  maxValue,
  barColor,
  showPercentage = true,
  className = '',
  disabled = false,
  isOpen,
  onToggle,
  displayFormat = 'both',
}: DropdownStatsProps) {
  const dropdownRef = useDropdownToggle(isOpen, onToggle);
  const selectedOption = options.find((option) => option.value === selectedValue) ?? options[0];
  const calculatedMaxValue = maxValue ?? Math.max(...options.map((option) => option.stat), 1);

  function handleKeyDown(e: React.KeyboardEvent, value: string) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onChange(value);
      onToggle();
    }
  }

  function renderStatDisplay(stat: number) {
    const percentage = Math.round((stat / calculatedMaxValue) * 100);
    switch (displayFormat) {
      case 'percentage':
        return `${percentage.toString()}%`;
      case 'value':
        return stat.toString();
      case 'both':
      default:
        return `${stat.toString()} (${percentage.toString()}%)`;
    }
  }

  function calculateWidthPercentage(stat: number): string {
    return `${(stat / calculatedMaxValue) * 100}%`;
  }

  return (
    <div
      className={`${styles['dropdown-stats']} ${className} ${disabled ? styles.disabled : ''}`}
      ref={dropdownRef}
    >
      <button
        type="button"
        className={styles['dropdown-stats__toggle']}
        onClick={onToggle}
        disabled={disabled}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <div className={styles['dropdown-stats__selected']}>
          <span className={styles['dropdown-stats__label']}>{selectedOption.label}</span>
          <span className={styles['dropdown-stats__code']}>({selectedOption.code})</span>
          {showPercentage && (
            <span className={styles['dropdown-stats__stat']}>
              {renderStatDisplay(selectedOption.stat)}
            </span>
          )}
        </div>
      </button>

      {isOpen && (
        <ul className={styles['dropdown-stats__menu']} role="listbox">
          {options.map((option) => {
            const isSelected = selectedValue === option.value;
            return (
              <li
                key={option.value}
                className={`${styles['dropdown-stats__item']} ${isSelected ? styles.selected : ''}`}
                onClick={() => {
                  onChange(option.value);
                  onToggle();
                }}
                onKeyDown={(e) => {
                  handleKeyDown(e, option.value);
                }}
                role="option"
                aria-selected={isSelected}
                tabIndex={0}
              >
                <div className={styles['dropdown-stats__item-content']}>
                  <span className={styles['dropdown-stats__label']}>{option.label}</span>
                  <span className={styles['dropdown-stats__code']}>({option.code})</span>
                  {showPercentage && (
                    <span className={styles['dropdown-stats__stat']}>
                      {renderStatDisplay(option.stat)}
                    </span>
                  )}
                </div>
                <div className={styles['dropdown-stats__progress-container']}>
                  <div
                    className={styles['dropdown-stats__progress-bar']}
                    style={{
                      width: calculateWidthPercentage(option.stat),
                      backgroundColor: barColor ?? 'var(--ads-primary-main)',
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default DropdownStats;
