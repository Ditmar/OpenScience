import React from 'react';
import { Box, Stack, CardContent } from '@mui/material';
import { Check } from '../../../../library/component/atoms/Check/Check';
import { AvatarBadgeItem } from '../badges/badges';
import SubTitleAndParagraph from '../../atoms/SubTitleAndParagraph/SubTitleAndParagraph';
import type { IProps, CardSizeVariant } from './types/IProps';
import { StyledTextCard } from './TextCard.styles';

const mapCardSizeToAtomSize = (cardSize: CardSizeVariant): 'lg' | 'md' | 'sm' => {
  switch (cardSize) {
    case 'large':
      return 'lg';
    case 'medium':
      return 'md';
    case 'small':
      return 'sm';
    default:
      return 'md';
  }
};

function TextCard({
  isChecked,
  onCheckChange,
  isCheckDisabled,
  badgeText,
  badgeAvatarSrc,
  onBadgeClick,
  cardSubtitle,
  subtitleSize,
  subtitleAlignment,
  subtitleVariant,
  subtitleTitleTag,
  cardParagraph,
  paragraphSubtitleTag,
  className = '',
  isSelected = false,
  cardVariantColor = 'default',
  sizeVariant = 'medium',
  shapeVariant = 'soft',
  showLeadingIcon = false,
  showLeadingPill = false,
  cardRightPillProps,
}: IProps) {
  const atomSize = mapCardSizeToAtomSize(sizeVariant);

  let avatarBadgeItemSize: 'small' | 'medium' | 'large';
  switch (atomSize) {
    case 'lg':
      avatarBadgeItemSize = 'large';
      break;
    case 'sm':
      avatarBadgeItemSize = 'small';
      break;
    case 'md':
    default:
      avatarBadgeItemSize = 'medium';
      break;
  }

  return (
    <StyledTextCard
      className={className}
      isSelected={isSelected}
      cardVariantColor={cardVariantColor}
      sizeVariant={sizeVariant}
      shapeVariant={shapeVariant}
    >
      <Box
        sx={{
          mr: 2,
          pt: 0.5,
          flexShrink: 0,
        }}
      >
        <Check
          checked={isChecked}
          onChange={onCheckChange}
          disabled={isCheckDisabled}
          variant="default"
          rounded={false}
        />
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
          p: 0,
          '&:last-child': { pb: 0 },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <AvatarBadgeItem
            text={badgeText}
            showAvatar={!showLeadingIcon && !showLeadingPill && !!badgeAvatarSrc}
            avatarSrc={badgeAvatarSrc}
            showLeadingIcon={showLeadingIcon}
            leftPillProps={
              showLeadingPill
                ? { text: 'Pill', variant: 'soft', color: 'neutral-dark', size: atomSize }
                : undefined
            }
            onClick={onBadgeClick}
            size={avatarBadgeItemSize}
            variant="filled"
            color="neutral"
            shape="default"
            showRemoveIcon={false}
            rightPillProps={cardRightPillProps}
          />
        </Stack>

        <Box>
          <SubTitleAndParagraph
            title={cardSubtitle}
            subtitle={cardParagraph}
            size={subtitleSize ?? atomSize}
            alignment={subtitleAlignment ?? 'left'}
            variant={subtitleVariant ?? 'default'}
            titleTag={subtitleTitleTag ?? 'h3'}
            subtitleTag={paragraphSubtitleTag ?? 'p'}
          />
        </Box>
      </CardContent>
    </StyledTextCard>
  );
}

export default TextCard;
