import React, { useState, useRef, useEffect } from 'react';
import {
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledIconButton,
  StyledSearchButton,
  StyledSearchIcon,
  StyledFormContainer,
  StyledArrowIcon,
} from './SearchNavbar.style';
import type { SearchNavbarProps } from './types/IProps';

function SearchNavbar({ placeholder = '', onSearch, showInputDefault = false }: SearchNavbarProps) {
  const [showInput, setShowInput] = useState(showInputDefault);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const trimmed = query.trim();

  const handleToggle = () => {
    setShowInput((prev) => !prev);
  };

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trimmed) return;
    if (onSearch) onSearch(trimmed);
  };

  return (
    <StyledWrapper>
      <StyledIconButton onClick={handleToggle} aria-label="buscar">
        <StyledSearchIcon />
      </StyledIconButton>

      {showInput && (
        <StyledFormContainer>
          <StyledForm onSubmit={handleSubmit}>
            <StyledInput
              placeholder={placeholder}
              inputProps={{ 'aria-label': 'campo de búsqueda' }}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              inputRef={inputRef}
            />
            <StyledSearchButton variant="contained" type="submit">
              BUSCAR <StyledArrowIcon />
            </StyledSearchButton>
          </StyledForm>
        </StyledFormContainer>
      )}
    </StyledWrapper>
  );
}

export default SearchNavbar;
