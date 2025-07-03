import List from '@mui/material/List';
import type { HamburgerMenuListProps } from './types/IProps';
import { StyledMenuList } from './menu.style';
import BulletLink from '../../atoms/bullet-link/bullet-link';

export default function HamburgerMenuList({ items, onItemClick }: HamburgerMenuListProps) {
  return (
    <StyledMenuList>
      <List>
        {items.map((item) => (
          <BulletLink
            key={item.label}
            text={item.label}
            href={item.href}
            onClick={() => onItemClick?.(item.label)}
          />
        ))}
      </List>
    </StyledMenuList>
  );
}
