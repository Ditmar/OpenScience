import React, { useState } from 'react';
import './YearFilter.scss';

export interface YearFilterProps {
  years: number[];
  onYearSelect: (year: number) => void;
}

function YearFilter({ years, onYearSelect }: YearFilterProps) {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
    onYearSelect(year);
  };

  return (
    <div className="year-filter">
      <header className="header">
        <h2>Año</h2>
      </header>
      <div className="years-wrapper">
        <ul className="year-list">
          {years.map((year) => (
            <li key={year} className={`year-Item ${year === selectedYear ? 'selected' : ''}`}>
              <button
                type="button"
                onClick={() => {
                  handleYearClick(year);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') handleYearClick(year);
                }}
                className={`year-button ${year === selectedYear ? 'selected' : ''}`}
              >
                {year}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default YearFilter;
