import React from 'react';

export interface Props {
  children: React.ReactNode;
  type: string;
  active: string;
  iconBefore?: string;
  iconAfter?: string;
}
