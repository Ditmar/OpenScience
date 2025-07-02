import type { AvatarProps } from '../../../atoms/Avatar/types/IProps';
import type { AtomTextProps } from '../../../atoms/Atom-text/types/IProps';
import type { IProps } from '../../../atoms/pills/types/IProps';

export interface BadgeCardProps {
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'r_none' | 'r_md' | 'r_full';
  backgroundColor?: 'primary' | 'secondary' | 'warning' | 'success' | 'danger';

  avatar: AvatarProps;
  text: Omit<AtomTextProps, 'children'> & { content: string };
  pill: Pick<IProps, 'text' | 'color' | 'variant' | 'rounded'>;
}
