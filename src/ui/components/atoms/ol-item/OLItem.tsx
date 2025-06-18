import { OLItemRoot } from './OLItem.style';
import type { OLItemProps } from './types/IProps';

function OLItem({ value, shape = 'square', size = 'md', active = false }: OLItemProps) {
  return (
    <OLItemRoot role="listitem" shape={shape} size={size} active={active}>
      {value}
    </OLItemRoot>
  );
}

export default OLItem;
