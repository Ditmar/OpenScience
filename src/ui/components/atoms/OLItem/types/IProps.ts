export interface OLItemProps {
  value: number | string;
  shape?: 'square' | 'rounded' | 'circle';
  size?: 'sm' | 'md' | 'lg';
  styleType?: 'default' | 'stroked';
  active?: boolean;
}
