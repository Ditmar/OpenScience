import OLItem from '../../atoms/ol-item/OLItem';
import type { OLItemListProps } from './types/IProps';
import { StyledOLItemList } from './OLItemList.style';

function OLItemList({ items, direction = 'row' }: OLItemListProps) {
  return (
    <StyledOLItemList direction={direction}>
      {items.map((item) => (
        <OLItem
          key={item.value}
          value={item.value}
          shape={item.shape}
          size={item.size}
          active={item.active}
        />
      ))}
    </StyledOLItemList>
  );
}

export default OLItemList;
