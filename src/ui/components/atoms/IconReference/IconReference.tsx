import React from 'react';
import { Box } from '@mui/material';
import reference from '../../../../assets/icons/reference1.svg?raw';
import type { IconReferenceProps } from './types/IProps';

function IconReference({ background = 'transparent', className }: IconReferenceProps) {
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
        src={`data:image/svg+xml;utf8,${encodeURIComponent(reference)}`}
        alt="Share icon"
        sx={{
          width: 32,
          height: 35,
        }}
      />
    </Box>
  );
}

export default IconReference;
