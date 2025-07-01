import type { OLItemProps } from '../../../atoms/ol-item/types/IProps';

export interface OLItemListProps {
  items: OLItemProps[];
  direction?: 'row' | 'column';
}
