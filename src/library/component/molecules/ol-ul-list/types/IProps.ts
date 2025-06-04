export interface IListItem {
  id: number;
  subtitle?: string;
  paragraph?: string;
}

export type ListType = 'ordered' | 'unordered';
export type ListStyle = 'square' | 'rounded' | 'circle';
export type ListSize = 'extra-small' | 'small' | 'medium' | 'large';

export interface IProps {
  type: ListType;
  style?: ListStyle;
  size?: ListSize;
  items?: IListItem[];
  count?: number;
}
