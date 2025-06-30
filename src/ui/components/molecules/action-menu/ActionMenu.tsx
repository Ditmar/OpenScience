import { useState } from 'react';
import { Box } from '@mui/material';
import {
  PictureAsPdf,
  Link as LinkIcon,
  Image,
  WhatsApp,
  Telegram,
  Facebook,
} from '@mui/icons-material';
import { Container, MenuButton, OptionsBox, IconBox } from './ActionMenu.styles';

function ActionMenu() {
  const [selectedMenu, setSelectedMenu] = useState<null | 'pdf' | 'link' | 'image'>(null);

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
          <PictureAsPdf />
        </MenuButton>

        <MenuButton
          onClick={() => {
            toggleMenu('link');
          }}
          active={selectedMenu === 'link'}
          aria-label="Link"
        >
          <LinkIcon />
        </MenuButton>

        <MenuButton
          onClick={() => {
            toggleMenu('image');
          }}
          active={selectedMenu === 'image'}
          aria-label="Image"
        >
          <Image />
        </MenuButton>
      </Container>

      {selectedMenu && (
        <OptionsBox>
          {selectedMenu === 'pdf' && (
            <IconBox>
              <PictureAsPdf sx={{ color: '#fff' }} />
              DESCARGAR
            </IconBox>
          )}

          {selectedMenu === 'link' && (
            <Box display="flex" gap={2}>
              <LinkIcon />
              <WhatsApp sx={{ color: '#fff', cursor: 'pointer' }} />
              <Telegram sx={{ color: '#fff', cursor: 'pointer' }} />
              <Facebook sx={{ color: '#fff', cursor: 'pointer' }} />
            </Box>
          )}

          {selectedMenu === 'image' && (
            <IconBox>
              <Image sx={{ color: '#fff' }} />
              MEDIA
            </IconBox>
          )}
        </OptionsBox>
      )}
    </Box>
  );
}

export default ActionMenu;
