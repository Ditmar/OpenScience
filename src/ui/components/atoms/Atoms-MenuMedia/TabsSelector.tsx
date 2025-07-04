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
      sx={(theme) => ({
        backgroundColor: theme.palette.common.white,
        overflow: 'hidden',
        minHeight: 32,
        boxShadow: theme.shadows[1],
        '& .MuiTabs-flexContainer': {
          minHeight: 32,
        },
        '& .MuiTab-root': {
          fontWeight: 'bold',
          fontSize: '1rem',
          textTransform: 'none',
          minHeight: 32,
          paddingTop: 0.5,
          paddingBottom: 0.5,
          lineHeight: 1,
          borderRight: `2.5px solid ${theme.palette.primary.dark}`,
          color: theme.palette.primary.dark,
        },
        '& .MuiTab-root:last-of-type': {
          borderRight: 'none',
        },
        '& .Mui-selected': {
          backgroundColor: theme.palette.common.white,
          color: theme.palette.primary.dark,
        },
        '& .Mui-selected .MuiTab-wrapper': {
          color: theme.palette.primary.dark,
        },
      })}
    >
      <Tab label="Figura" />
      <Tab label="Tabla" />
      <Tab label="Otros" />
    </Tabs>
  );
}
