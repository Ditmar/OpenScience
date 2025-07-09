import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import BurgerIconButton from '../../atoms/burger-icon-button/BurgerIconButton';
import { FooterStripesWrapper, BlueStripe, GreenStripe, ButtonWrapper } from './BurgerMenu.style';
import type { BurgerMenuProps } from './types/iProps';

export default function BurgerMenu({ children }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ButtonWrapper>
        <BurgerIconButton onClick={toggleMenu} />
      </ButtonWrapper>

      <Box
        sx={{
          position: 'fixed',
          bottom: 70,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
        }}
      >
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box
            sx={(theme) => ({
              backgroundColor: theme.palette.burgerFloatingMenuPalette.popupBackground,
              borderRadius: theme.palette.burgerFloatingMenuPalette.popupBorderRadius,
              boxShadow: theme.palette.burgerFloatingMenuPalette.popupShadow,
              padding: 2,
              width: 200,
            })}
          >
            {children}
          </Box>
        </Collapse>
      </Box>

      <FooterStripesWrapper>
        <BlueStripe data-testid="blue-stripe" />
        <GreenStripe data-testid="green-stripe" />
      </FooterStripesWrapper>
    </>
  );
}
