import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Collapse, List, ListItemButton, styled } from '@mui/material';
import type { VerticalHamburgerMenuProps } from './types/IProps';
import IconPdf from '../../atoms/IconPdf/IconPdf';
import IconLink from '../../atoms/IconLink/IconLink';
import IconImage from '../../atoms/IconImage/IconImage';
import IconReference from '../../atoms/IconReference/IconReference';

const MenuContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(2),
  zIndex: theme.zIndex.appBar,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#02322C',
  borderRadius: 0,
  boxShadow: theme.shadows[2],
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  width: 56,
  height: 56,
  padding: theme.spacing(1),
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    transform: 'scale(1.1)',
    transition: 'transform 0.2s ease',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
}));

function VerticalHamburgerMenu({ position = 'left', sx = {} }: VerticalHamburgerMenuProps) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleIconClick = (iconName: string) => {
    // eslint-disable-next-line no-console
    console.log(`${iconName} icon clicked`);
  };

  return (
    <MenuContainer
      sx={{
        [position]: 16,
        ...sx,
      }}
    >
      <StyledListItemButton
        onClick={handleToggle}
        aria-label="Toggle menu"
        sx={{ backgroundColor: '#02322C' }}
      >
        <MenuIcon style={{ color: '#FFFFFF', fontSize: '50px' }} />
      </StyledListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List role="list" component="div" disablePadding sx={{ backgroundColor: '#0793BF' }}>
          <StyledListItemButton
            onClick={() => {
              handleIconClick('PDF');
            }}
            aria-label="PDF"
          >
            <IconPdf background="transparent" />
          </StyledListItemButton>

          <StyledListItemButton
            onClick={() => {
              handleIconClick('Link');
            }}
            aria-label="Link"
          >
            <IconLink background="transparent" />
          </StyledListItemButton>

          <StyledListItemButton
            onClick={() => {
              handleIconClick('Image');
            }}
            aria-label="Image"
          >
            <IconImage background="transparent" />
          </StyledListItemButton>

          <StyledListItemButton
            onClick={() => {
              handleIconClick('Reference');
            }}
            aria-label="Reference"
          >
            <IconReference background="transparent" />
          </StyledListItemButton>
        </List>
      </Collapse>
    </MenuContainer>
  );
}

export default VerticalHamburgerMenu;
