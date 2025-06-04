export interface IProps {
  layout?: 'featured' | 'columns' | 'cards' | 'standard';
  title?: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  responsive?: 'desktop' | 'tablet' | 'mobile';
  className?: string;
}
