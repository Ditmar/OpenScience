import type { ReactNode } from 'react';
import type { IconName } from '../../../../utils/vite-svgr/types/IProps';

export interface NavbarItem {
  children: ReactNode;
  icon: IconName;
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
