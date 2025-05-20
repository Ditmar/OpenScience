export type Variant = 'default' | 'info' | 'warning' | 'success' | 'error';

export interface BadgeProps {
  avatarUrl: string;
  text: string;
  trailingText: string;
}

export interface TextCardPropsList {
  title: string;
  description?: string;
  categoryTag?: string;
  selected?: boolean;
  onSelect?: (selected: boolean) => void;
  variant?: Variant;
  className?: string;
  badge?: BadgeProps;
}
