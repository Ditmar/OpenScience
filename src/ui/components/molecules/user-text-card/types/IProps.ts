import type { ReactNode } from 'react';

export interface IProps {
  avatar: string | ReactNode;
  userName: string;
  userHandle?: string;
  content: string | ReactNode;
  timestamp?: string | Date;
  actions?: { label: string; onClick: () => void }[];
  variant?: 'default' | 'compact' | 'expanded';
  isVerified?: boolean;
  onClick?: () => void;
  className?: string;
  isChecked?: boolean;
  onCheckChange?: (checked: boolean) => void;
}
