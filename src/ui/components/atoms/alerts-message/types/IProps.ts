import React from 'react';

export interface IProps {
  children?: React.ReactNode;
  variant?: 'Primary' | 'Secondary' | 'Success' | 'Danger' | 'Warning' | 'Info' | 'Light' | 'Dark';
}
