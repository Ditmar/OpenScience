import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import HamburgerButton from '../../atoms/hamburger-button/hamburger-button';
import HamburgerMenuList from '../../molecules/hamburger-menu-list/menu';
import type { HamburgerMenuProps } from './types/IProps';
import logo from '../../../../assets/icons/logo.svg?url';
import { MenuContainer, LogoWrapper, DrawerContent } from './hamburger-menu.style';

export default function HombregerMenu({ menuItems }: HamburgerMenuProps) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <HamburgerButton onClick={toggleMenu} ariaLabel="Menu" />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <MenuContainer>
          <LogoWrapper>
            <img src={logo} alt="Logo" style={{ width: 53, height: 28 }} />
          </LogoWrapper>
          <DrawerContent>
            <HamburgerMenuList items={menuItems} onItemClick={closeMenu} />
          </DrawerContent>
        </MenuContainer>
      </Collapse>
    </Box>
  );
}
