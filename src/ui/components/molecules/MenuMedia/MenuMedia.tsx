import React, { useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import type { MenuMediaProps } from './types/MenuMedia.props';
import { TabsSelector } from '../../atoms/Atoms-MenuMedia/TabsSelector';
import { OpenImageButton } from '../../atoms/Atoms-MenuMedia/OpenImageButton';
import { ImageDescriptionText } from '../../atoms/Atoms-MenuMedia/ImageDescriptionText';

const sizeMap = {
  small: 320,
  medium: 450,
  large: 600,
};

const heightMap = {
  small: 160,
  medium: 235,
  large: 320,
};

export function MenuMedia({
  imageSrc,
  imageAlt,
  onOpenImage,
  size = 'medium',
  descriptions,
}: MenuMediaProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const resolvedImageSrc = typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const effectiveSize = isMobile ? 'small' : size;
  const maxWidth = sizeMap[effectiveSize] || sizeMap.medium;
  const imgHeight = heightMap[effectiveSize] || heightMap.medium;

  return (
    <Box sx={{ width: '100%', maxWidth, pb: 4 }}>
      <TabsSelector
        value={tabIndex}
        onChange={(_, val) => setTabIndex(val)}
      />
      <Box
        sx={{
          backgroundColor: '#02322C',
          pt: 2,
          pb: 4,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth,
            height: imgHeight,
            mb: 1.5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={resolvedImageSrc}
            alt={imageAlt}
            style={{
              width: '80%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Box>
        <Box sx={{ mb: 0.5 }}>
          <OpenImageButton onClick={onOpenImage} />
        </Box>
        <Box sx={{ width: '100%' }}>
          <ImageDescriptionText text={descriptions[tabIndex]} />
        </Box>
      </Box>
    </Box>
  );
}