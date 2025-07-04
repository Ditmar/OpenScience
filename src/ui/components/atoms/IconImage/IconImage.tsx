import React from 'react';
import { Box } from '@mui/material';
import media from '../../../../assets/icons/media.svg?raw';
import type { IconImageProps } from './types/IProps';

function IconImage({ background = 'transparent', className }: IconImageProps) {
  return (
    <Box
      className={className}
      sx={{
        width: 56,
        height: 56,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: background === 'blue' ? '#0793BF' : 'transparent',
      }}
    >
      <Box
        component="img"
        src={`data:image/svg+xml;utf8,${encodeURIComponent(media)}`}
        alt="Media icon"
        sx={{
          width: 40,
          height: 23,
        }}
      />
    </Box>
  );
}

export default IconImage;
