import type { ElementType } from 'react';

export interface IProps {
  label: string;
  labelError?: boolean;
  labelDisabled?: boolean;
  labelHelper?: boolean;
  labelSize?: 'small' | 'medium' | 'large';

  iconSize?: string;

  leftIcon?: ElementType;
  leftIconError?: boolean;
  leftIconDisabled?: boolean;

  rightIcon?: ElementType;
  rightIconError?: boolean;
  rightIconDisabled?: boolean;
}
