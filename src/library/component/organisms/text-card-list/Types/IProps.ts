import type { TextCardProps } from '../../../molecules/text-card/types/IProps';

export interface TextCardListItem extends TextCardProps {
  id: string;
}

export interface TextCardListProps {
  items: TextCardListItem[];
  selectedIds?: string[];
  onSelect?: (id: string) => void;
  columns?: 1 | 2;
}
