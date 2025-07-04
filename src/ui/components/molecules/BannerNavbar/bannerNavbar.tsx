import React, { useState, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Button,
  Dialog,
  Slide,
  type SlideProps,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { bannerNavbarStyles } from './bannerNavbar.style';
import type { IProps } from './types/IProps';

function BannerNavbar({ textSearch, logo, onSearchSubmit }: IProps) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const theme = useTheme();
  const styles = bannerNavbarStyles(theme);

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
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar disableGutters sx={styles.toolbar}>
        <Box sx={styles.logoContainer}>
          <img src={logo} alt="Logotipo" style={styles.logoImage} />
        </Box>

        <Box sx={styles.spacer} />

        <IconButton
          color="inherit"
          aria-label="Abrir búsqueda"
          onClick={handleSearchToggle}
          sx={styles.searchButton}
        >
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Toolbar>

      <Dialog
        fullScreen
        open={showSearch}
        onClose={handleCloseSearch}
        TransitionComponent={Slide}
        TransitionProps={{ direction: 'down' } as Partial<SlideProps>}
        PaperProps={{ sx: styles.dialogPaper }}
      >
        <Box
          component="form"
          onSubmit={handleSearchSubmit}
          data-testid="search-form"
          sx={styles.searchForm}
        >
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseSearch}
            aria-label="Cerrar búsqueda"
            sx={styles.closeButton}
          >
            <CloseIcon />
          </IconButton>

          <InputBase
            autoFocus
            fullWidth
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Buscar..."
            sx={styles.searchInput}
          />
          <Button type="submit" variant="contained" sx={styles.submitButton}>
            {textSearch}
          </Button>
        </Box>
      </Dialog>
    </AppBar>
  );
}

export default BannerNavbar;
