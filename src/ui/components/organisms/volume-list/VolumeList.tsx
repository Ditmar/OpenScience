import React from 'react';
import Box from '@mui/material/Box';

import LabelVolumes from '../../atoms/label-volumes/LabelVolumes';
import Volume from '../../molecules/volume/Volume';
import type { IProps } from './types/IProps';

function VolumeList({ title, volumes = [] }: IProps) {
  return (
    <Box>
      <Box
        sx={{
          p: '10px',
          textAlign: 'center',
        }}
      >
        <LabelVolumes text={title} color="tertiary" />
      </Box>

      {volumes.length > 0 && (
        <Box
          sx={{
            display: 'grid',
            gap: '20px',

            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },

            '& .volume': {
              height: 'auto !important',
            },
          }}
        >
          {volumes.map(({ uuid, pathImage, alt, date, volumen, id }) => (
            <Volume
              key={uuid}
              pathImage={pathImage}
              alt={alt}
              date={date}
              volumen={volumen}
              id={id}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default VolumeList;
