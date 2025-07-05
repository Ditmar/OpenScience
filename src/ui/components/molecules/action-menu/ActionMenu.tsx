import { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

import { Container, MenuButton, OptionsBox, IconBox } from './ActionMenu.styles';
import { Icon } from '../../../utils/vite-svgr/Icon';

function ActionMenu() {
  const [selectedMenu, setSelectedMenu] = useState<null | 'pdf' | 'link' | 'image'>(null);
  const theme = useTheme();

  const toggleMenu = (menu: 'pdf' | 'link' | 'image') => {
    setSelectedMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <Box display="flex" position="relative">
      <Container>
        <MenuButton
          onClick={() => {
            toggleMenu('pdf');
          }}
          active={selectedMenu === 'pdf'}
          aria-label="PDF"
        >
          <Icon
            iconName="pdf"
            width={24}
            height={24}
            strokeWidth={1.5}
            stroke={theme.palette.info.main}
          />
        </MenuButton>

        <MenuButton
          onClick={() => {
            toggleMenu('link');
          }}
          active={selectedMenu === 'link'}
          aria-label="Link"
        >
          <Icon iconName="link" width={24} height={24} />
        </MenuButton>

        <MenuButton
          onClick={() => {
            toggleMenu('image');
          }}
          active={selectedMenu === 'image'}
          aria-label="Image"
        >
          <Icon
            iconName="media"
            width={24}
            height={24}
            stroke={theme.palette.info.main}
            strokeWidth={2}
          />
        </MenuButton>
      </Container>

      {selectedMenu && (
        <OptionsBox>
          {selectedMenu === 'pdf' && (
            <IconBox>
              <Icon iconName="pdf" width={24} height={24} />
              <Typography sx={{ color: theme.customColors.white }}>DESCARGAR</Typography>
            </IconBox>
          )}

          {selectedMenu === 'link' && (
            <Box display="flex" gap={2} alignItems="center" px={2}>
              <Icon iconName="share" width={24} height={24} />
              <Icon iconName="whatsapp" width={24} height={24} />
              <Icon iconName="telegram" width={24} height={24} />
              <Icon iconName="facebook1" width={24} height={24} />
            </Box>
          )}

          {selectedMenu === 'image' && (
            <IconBox>
              <Icon iconName="media" width={24} height={24} />
              <Typography sx={{ color: theme.customColors.white }}>MEDIA</Typography>
            </IconBox>
          )}
        </OptionsBox>
      )}
    </Box>
  );
}

export default ActionMenu;
