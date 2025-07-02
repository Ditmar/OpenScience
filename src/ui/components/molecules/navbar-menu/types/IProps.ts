import type { ReactNode } from 'react';

export interface NavbarItem {
  icon: string;
  children: ReactNode;
  onClick?: () => void;
}

export interface IProps {
  items: NavbarItem[];
  backgroundImage: string;
  alt?: string;
  className: string;
  footerItem?: NavbarItem;
}
