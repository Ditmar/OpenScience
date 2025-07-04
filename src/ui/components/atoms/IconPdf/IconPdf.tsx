import React from 'react';
import { Box } from '@mui/material';
import pdf from '../../../../assets/icons/pdf.svg?raw';
import type { IconPdfProps } from './types/IProps';

function IconPdf({ background = 'transparent', className }: IconPdfProps) {
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
        src={`data:image/svg+xml;utf8,${encodeURIComponent(pdf)}`}
        alt="Share icon"
        sx={{
          width: 32,
          height: 35,
        }}
      />
    </Box>
  );
}

export default IconPdf;
