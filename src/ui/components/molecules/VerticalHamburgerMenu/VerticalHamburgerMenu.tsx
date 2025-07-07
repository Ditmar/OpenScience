import React, { useState } from 'react';
import { Collapse } from '@mui/material';
import type { VerticalHamburgerMenuProps } from './types/IProps';
import Icon from '../../atoms/icons/Icons';
import media from '../../../../assets/icons/media.svg?raw';
import pdf from '../../../../assets/icons/pdf.svg?raw';
import link from '../../../../assets/icons/share.svg?raw';
import reference from '../../../../assets/icons/reference1.svg?raw';
import {
  MenuContainer,
  StyledListItemButton,
  StyledList,
  StyledMenuIcon,
} from './VerticalHamburgerMenu.styles';

const icons = [
  {
    name: 'PDF',
    icon: pdf,
    alt: 'PDF icon',
    iconWidth: 32,
    iconHeight: 35,
  },
  {
    name: 'Link',
    icon: link,
    alt: 'Link icon',
    iconWidth: 32,
    iconHeight: 33,
  },
  {
    name: 'Image',
    icon: media,
    alt: 'Media icon',
    iconWidth: 40,
    iconHeight: 24,
  },
  {
    name: 'Reference',
    icon: reference,
    alt: 'Reference icon',
    iconWidth: 32,
    iconHeight: 35,
  },
];

function VerticalHamburgerMenu({ position = 'left' }: VerticalHamburgerMenuProps) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleIconClick = (iconName: string) => {
    // eslint-disable-next-line no-console
    console.log(`${iconName} icon clicked`);
  };

  return (
    <MenuContainer side={position}>
      <StyledListItemButton onClick={handleToggle} aria-label="Toggle menu">
        <StyledMenuIcon />
      </StyledListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <StyledList role="list" as="div" disablePadding>
          {icons.map(({ name, icon, alt, iconWidth, iconHeight }) => {
            return (
              <StyledListItemButton
                key={name}
                onClick={() => {
                  handleIconClick(name);
                }}
                aria-label={name}
              >
                <Icon
                  icon={icon}
                  background="transparent"
                  containerSize={56}
                  iconWidth={iconWidth}
                  iconHeight={iconHeight}
                  alt={alt}
                />
              </StyledListItemButton>
            );
          })}
        </StyledList>
      </Collapse>
    </MenuContainer>
  );
}

export default VerticalHamburgerMenu;
