import type { ElementType } from 'react';

export interface IProps {
  iconName: ElementType;
  error?: boolean;
  disabled?: boolean;
  size?: string;
}
