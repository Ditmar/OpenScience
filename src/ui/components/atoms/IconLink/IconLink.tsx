import React from 'react';
import { Box } from '@mui/material';
import share from '../../../../assets/icons/share.svg?raw';
import type { IconLinkProps } from './types/IProps';

function IconLink({ background = 'transparent', className }: IconLinkProps) {
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
        src={`data:image/svg+xml;utf8,${encodeURIComponent(share)}`}
        alt="Share icon"
        sx={{
          width: 32,
          height: 33,
        }}
      />
    </Box>
  );
}

export default IconLink;
