import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import type { BadgeCardProps } from './types/IProps';
import { StyledBadgeCard } from './BadgeCard.style';
import AtomAvatar from '../../atoms/Avatar/Avatar';
import AtomText from '../../atoms/Atom-text/AtomText';
import Pill from '../../atoms/pills/pills';

function BadgeCard({
  rounded = 'r_md',
  backgroundColor = 'primary',
  avatar,
  text,
  pill,
}: BadgeCardProps) {
  const theme = useTheme();

  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  let computedSize: BadgeCardProps['size'] = 'sm';
  if (isLg) computedSize = 'lg';
  else if (isMd) computedSize = 'md';

  return (
    <StyledBadgeCard size={computedSize} rounded={rounded} backgroundColor={backgroundColor}>
      <AtomAvatar size={computedSize} src={avatar.src} alt={avatar.alt} rounded={rounded} />
      <AtomText size={computedSize} color={text.color} fontWeight={text.fontWeight}>
        {text.content}
      </AtomText>
      <Pill
        text={pill.text}
        color={pill.color ?? 'neutral-light'}
        variant={pill.variant ?? 'filled'}
        rounded={pill.rounded ?? 'r_md'}
        size={computedSize}
      />
    </StyledBadgeCard>
  );
}

export default BadgeCard;
