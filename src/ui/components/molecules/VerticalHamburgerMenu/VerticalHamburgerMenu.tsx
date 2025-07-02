import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Collapse, List, ListItemButton, styled } from '@mui/material';
import type { VerticalHamburgerMenuProps } from './types/IProps';
import IconImage from '../../atoms/IconImage/IconImage';
import IconLink from '../../atoms/IconLink/IconLink';
import IconPdf from '../../atoms/IconPdf/IconPdf';
import IconReference from '../../atoms/IconReference/IconReference';

const MenuContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(2),
  zIndex: theme.zIndex.appBar,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
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

function VerticalHamburgerMenu({
  position = 'left',
  size = 'medium',
  color = 'primary',
  variant = 'filled',
  sx = {},
}: VerticalHamburgerMenuProps) {
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
      <StyledListItemButton onClick={handleToggle} aria-label="Toggle menu">
        <MenuIcon fontSize={size} color={color} />
      </StyledListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* PDF Icon */}
          <StyledListItemButton
            onClick={() => {
              handleIconClick('PDF');
            }}
            aria-label="PDF"
          >
            <IconPdf size={size} color={color} variant={variant} />
          </StyledListItemButton>

          {/* Link Icon */}
          <StyledListItemButton
            onClick={() => {
              handleIconClick('Link');
            }}
            aria-label="Link"
          >
            <IconLink size={size} color={color} variant={variant} />
          </StyledListItemButton>

          {/* Image Icon */}
          <StyledListItemButton
            onClick={() => {
              handleIconClick('Image');
            }}
            aria-label="Image"
          >
            <IconImage size={size} color={color} variant={variant} />
          </StyledListItemButton>

          {/* Reference Icon */}
          <StyledListItemButton
            onClick={() => {
              handleIconClick('Reference');
            }}
            aria-label="Reference"
          >
            <IconReference size={size} color={color} />
          </StyledListItemButton>
        </List>
      </Collapse>
    </MenuContainer>
  );
}

export default VerticalHamburgerMenu;
