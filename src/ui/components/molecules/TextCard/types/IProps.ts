import type { CheckProps } from '../../../../../library/component/atoms/Check/Check.props';
import type { AvatarBadgeItemProps } from '../../badges/types/IProps';
import type { IProps as SubTitleAndParagraphProps } from '../../../atoms/SubTitleAndParagraph/Types/IProps';

export interface IProps {
  isChecked: CheckProps['checked'];
  onCheckChange: CheckProps['onChange'];
  isCheckDisabled?: CheckProps['disabled'];

  badgeText: AvatarBadgeItemProps['text'];
  badgeAvatarSrc?: AvatarBadgeItemProps['avatarSrc'];
  onBadgeClick?: AvatarBadgeItemProps['onClick'];

  cardSubtitle: SubTitleAndParagraphProps['title'];
  subtitleSize?: SubTitleAndParagraphProps['size'];
  subtitleAlignment?: SubTitleAndParagraphProps['alignment'];
  subtitleVariant?: SubTitleAndParagraphProps['variant'];
  subtitleTitleTag?: SubTitleAndParagraphProps['titleTag'];

  cardParagraph?: SubTitleAndParagraphProps['subtitle'];
  paragraphSubtitleTag?: SubTitleAndParagraphProps['subtitleTag'];

  className?: string;

  isSelected?: boolean;

  cardVariantColor?: 'default' | 'info' | 'warning' | 'success' | 'error' | 'primary' | 'secondary';
}
