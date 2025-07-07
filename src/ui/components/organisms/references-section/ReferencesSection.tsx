import React from 'react';
import Box from '@mui/material/Box';

import LabelReferences from '../../atoms/label-references/LabelReferences';
import Reference from '../../atoms/reference-information/Reference';
import type { IProps } from './types/IProps';

function ReferencesSection({ references }: IProps) {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        p: 2,
        '& a': {
          color: 'text.primary',
          textDecoration: 'underline',
        },
      }}
    >
      <LabelReferences text="REFERENCIAS" />

      <Box
        component="ol"
        sx={{
          color: 'text.primary',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          listStyle: 'none',
          mt: 2,
          p: 0,
        }}
      >
        {references.map((item, index) => (
          <li key={`${item.text}-${index.toString()}`}>
            <Reference text={item.text} />
          </li>
        ))}
      </Box>
    </Box>
  );
}

export default ReferencesSection;
