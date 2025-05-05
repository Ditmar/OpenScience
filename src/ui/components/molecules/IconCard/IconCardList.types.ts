import type { ReactNode } from 'react';

export interface IconCardItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: ReactNode;
  selected?: boolean;
}

export interface IconCardListProps {
  items: IconCardItem[];
  onSelect?: (id: string, selected: boolean) => void;
  className?: string;
}
