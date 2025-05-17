export interface TextCardListProps {
  title: string;
  id: string;
  categoryTag?: string;
  description?: string;
  selected?: boolean;
  onSelect?: (selected: boolean) => void;
  variant?: 'default' | 'info' | 'warning' | 'success' | 'error';
  className?: string;
}

export interface TextCardListContainerProps {
  items: TextCardListProps[];
  className?: string;
}
