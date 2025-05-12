import React, { useEffect, useRef } from 'react';
import './dropdown-stats.scss';

export interface DropdownStatsOption {
  label: string;
  value: string;
  code: string;
  stat: number;
}

export interface DropdownStatsProps {
  options: DropdownStatsOption[];
  selectedValue?: string;
  onChange: (value: string) => void;
  maxValue?: number;
  barColor?: string;
  showPercentage?: boolean;
  className?: string;
  disabled?: boolean;
  isOpen: boolean;
  onToggle: () => void;
  displayFormat?: 'percentage' | 'value' | 'both';
}

function DropdownStats({
  options,
  selectedValue,
  onChange,
  maxValue,
  barColor = '#8a2be2',
  showPercentage = true,
  className = '',
  disabled = false,
  isOpen,
  onToggle,
  displayFormat = 'both',
}: DropdownStatsProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === selectedValue) ?? options[0];
  const calculatedMaxValue = maxValue ?? Math.max(...options.map((option) => option.stat), 1);

  useEffect(
    function setupClickOutsideListener() {
      function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          onToggle();
        }
      }

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return function cleanupClickOutsideListener() {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    },
    [isOpen, onToggle],
  );

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
    return ((stat / calculatedMaxValue) * 100).toString();
  }

  return (
    <div className={`dropdown-stats ${className} ${disabled ? 'disabled' : ''}`} ref={dropdownRef}>
      <button
        type="button"
        className="dropdown-stats__toggle"
        onClick={onToggle}
        disabled={disabled}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <div className="dropdown-stats__selected">
          <span className="dropdown-stats__label">{selectedOption.label}</span>
          <span className="dropdown-stats__code">({selectedOption.code})</span>
          {showPercentage && (
            <span className="dropdown-stats__stat">{renderStatDisplay(selectedOption.stat)}</span>
          )}
        </div>
      </button>

      {isOpen && (
        <ul className="dropdown-stats__menu" role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              className={`dropdown-stats__item ${selectedValue === option.value ? 'selected' : ''}`}
              onClick={() => {
                onChange(option.value);
                onToggle();
              }}
              onKeyDown={(e) => {
                handleKeyDown(e, option.value);
              }}
              role="option"
              aria-selected={selectedValue === option.value}
              tabIndex={0}
            >
              <div className="dropdown-stats__item-content">
                <span className="dropdown-stats__label">{option.label}</span>
                <span className="dropdown-stats__code">({option.code})</span>
                {showPercentage && (
                  <span className="dropdown-stats__stat">{renderStatDisplay(option.stat)}</span>
                )}
              </div>
              <div className="dropdown-stats__progress-container">
                <div
                  className="dropdown-stats__progress-bar"
                  style={{
                    width: `${calculateWidthPercentage(option.stat)}%`,
                    backgroundColor: barColor,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownStats;
