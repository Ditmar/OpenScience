import React, { useState } from 'react';
import './styles.scss';
import type { IProps } from './types/IProps';

const Search: React.FC<IProps> = ({ isOpen = false, query = '', onClick }) => {
  const [isOpenState, setIsOpenState] = useState<boolean>(isOpen);
  const [queryState, setQueryState] = useState<string>(query);

  const toggleSearch = () => {
    setIsOpenState(!isOpenState);
    if (onClick) onClick();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryState(e.target.value);
  };

  const handleSearch = () => {
  };

  return (
    <div className="search-container">
      <button className="search-icon" onClick={toggleSearch}>
        🔍
      </button>
      {isOpenState && (
        <div className="search-bar">
          <input
            type="text"
            value={queryState}
            onChange={handleInputChange}
            placeholder="Buscar..."
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
      )}
    </div>
  );
};

export default Search;

