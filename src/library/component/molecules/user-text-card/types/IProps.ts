import type { ReactNode } from 'react';

export interface IProps {
  avatar: string;
  userName: string;
  userHandle?: string;
  content: string | ReactNode;
  timestamp?: string | Date;
  actions?: { label: string; onClick: () => void }[];
  variant?: 'default' | 'compact' | 'expanded';
  colorVariant?: 'default' | 'info' | 'success' | 'warning' | 'error';
  isVerified?: boolean;
  onClick: () => void;
  className?: string;
  isChecked: boolean;
  onCheckChange?: (checked: boolean) => void;
}
