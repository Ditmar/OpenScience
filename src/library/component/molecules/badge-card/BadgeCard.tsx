import React from 'react';
import type { BadgeCardProps } from './types/IProps';
import { StyledBadgeCard } from './BadgeCard.style';
import AtomAvatar from '../../atoms/Avatar/Avatar';
import AtomText from '../../atoms/Atom-text/AtomText';
import Pill from '../../atoms/pills/pills';

function BadgeCard({
  size = 'md',
  rounded = 'r_md',
  backgroundColor = 'primary',
  avatar,
  text,
  pill,
}: BadgeCardProps) {
  return (
    <StyledBadgeCard size={size} rounded={rounded} backgroundColor={backgroundColor}>
      <AtomAvatar size={size} src={avatar.src} alt={avatar.alt} rounded={rounded} />
      <AtomText size={size} color={text.color} fontWeight={text.fontWeight}>
        {text.content}
      </AtomText>
      <Pill
        text={pill.text}
        color={pill.color}
        variant={pill.variant}
        rounded={pill.rounded}
        size={size}
      />
    </StyledBadgeCard>
  );
}

export default BadgeCard;
