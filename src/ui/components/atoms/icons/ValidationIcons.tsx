import React from 'react';
import type { ValidationIconsProps } from './types/IProps';
import './ValidationIcons.scss';
import { Icon } from '../../../utils/vite-svgr/Icon';

export function ValidationIcons({ status }: ValidationIconsProps) {
  switch (status) {
    case 'success':
      return (
        <Icon
          iconName="check"
          strokeWidth="0"
          width="18"
          height="18"
          color="var(--ads-success-main)"
        />
      );

    case 'error':
      return <Icon iconName="errors" strokeWidth="0" width="24" height="24" />;

    default:
      return null;
  }
}
