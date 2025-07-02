import type { IProps as CheckMuiProps } from '../../../atoms/Check-mui/types/IProps';
import type { BadgeCardProps } from '../../badge-card/types/IProps';
import type { AtomTextProps } from '../../../atoms/Atom-text/types/IProps';

export interface TextCardProps {
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'r_none' | 'r_md' | 'r_full';

  checkProps: CheckMuiProps;
  badgeProps: BadgeCardProps;

  title: string;
  titleProps?: Omit<AtomTextProps, 'children' | 'size'>;

  description: string;
  descriptionProps?: Omit<AtomTextProps, 'children' | 'size'>;
}
