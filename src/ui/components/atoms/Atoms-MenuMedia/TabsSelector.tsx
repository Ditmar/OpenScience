import React from 'react';
import { Tabs, Tab } from '@mui/material';

interface TabsSelectorProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export function TabsSelector({ value, onChange }: TabsSelectorProps) {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      centered
      variant="fullWidth"
      TabIndicatorProps={{ style: { display: 'none' } }}
      sx={{
        backgroundColor: '#fff',
        overflow: 'hidden',
        minHeight: '32px',
        boxShadow: '0px 0px 2px rgba(0,0,0,0.15)',
        '& .MuiTabs-flexContainer': {
          minHeight: '32px',
        },
        '& .MuiTab-root': {
          fontWeight: 'bold',
          fontSize: '1rem',
          textTransform: 'none',
          minHeight: '32px',
          paddingTop: 0.5,
          paddingBottom: 0.5,
          lineHeight: 1,
          borderRight: '2.5px solid #02322C',
          color: '#02322C',
        },
        '& .MuiTab-root:last-of-type': {
          borderRight: 'none',
        },
        '& .Mui-selected': {
          backgroundColor: '#fff',
          color: '#02322C',
        },
        '& .Mui-selected .MuiTab-wrapper': {
          color: '#02322C',
        },
      }}
    >
      <Tab label="Figura" />
      <Tab label="Tabla" />
      <Tab label="Otros" />
    </Tabs>
  );
}
