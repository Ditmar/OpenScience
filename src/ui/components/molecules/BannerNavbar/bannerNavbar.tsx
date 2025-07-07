import React, { useState, useCallback } from 'react';
import { Dialog, Slide } from '@mui/material';
import { type SlideProps } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {
  AppBarStyled,
  ToolbarStyled,
  LogoContainer,
  LogoImage,
  Spacer,
  SearchIconButton,
  SearchFormContainer,
  CloseIconButton,
  SearchInput,
  SubmitButton,
} from './bannerNavbar.style';
import type { IProps } from './types/IProps';

function BannerNavbar({ textSearch, logo, onSearchSubmit }: IProps) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchToggle = useCallback(() => {
    setShowSearch((prev) => !prev);
  }, []);
  const handleCloseSearch = useCallback(() => {
    setShowSearch(false);
    setSearchValue('');
  }, []);

  const handleSearchSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSearchSubmit?.(searchValue);
      handleCloseSearch();
    },
    [searchValue, onSearchSubmit, handleCloseSearch],
  );

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  return (
    <AppBarStyled position="static">
      <ToolbarStyled disableGutters>
        <LogoContainer>
          <LogoImage src={logo} alt="Logotipo" />
        </LogoContainer>

        <Spacer />

        <SearchIconButton color="inherit" aria-label="Abrir búsqueda" onClick={handleSearchToggle}>
          <SearchIcon fontSize="medium" />
        </SearchIconButton>
      </ToolbarStyled>

      <Dialog
        fullScreen
        open={showSearch}
        onClose={handleCloseSearch}
        TransitionComponent={Slide}
        TransitionProps={{ direction: 'down' } as Partial<SlideProps>}
      >
        <SearchFormContainer onSubmit={handleSearchSubmit} data-testid="search-form">
          <CloseIconButton
            edge="end"
            color="inherit"
            onClick={handleCloseSearch}
            aria-label="Cerrar búsqueda"
          >
            <CloseIcon />
          </CloseIconButton>

          <SearchInput
            autoFocus
            fullWidth
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Buscar..."
          />
          <SubmitButton type="submit" variant="contained">
            {textSearch}
          </SubmitButton>
        </SearchFormContainer>
      </Dialog>
    </AppBarStyled>
  );
}

export default BannerNavbar;
