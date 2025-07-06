import type { ReactNode } from 'react';

export interface NavbarItem {
  children: ReactNode;
  icon: string;
  onClick?: () => void;
}

export interface IProps {
  items: NavbarItem[];
  footerItem?: NavbarItem;
  backgroundImage: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  onClose?: () => void;
  onItemClick?: (label: string) => void;
  isOpen?: boolean;
}
