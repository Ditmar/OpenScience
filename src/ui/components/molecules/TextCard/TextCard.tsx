import React from 'react';
import { Box, Stack, CardContent } from '@mui/material';
import { Check } from '../../../../library/component/atoms/Check/Check';
import { AvatarBadgeItem } from '../badges/badges';
import SubTitleAndParagraph from '../../atoms/SubTitleAndParagraph/SubTitleAndParagraph';
import type { IProps } from './types/IProps';
import { StyledTextCard } from './TextCard.styles';

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
}: IProps) {
  return (
    <StyledTextCard
      className={className}
      isSelected={isSelected}
      cardVariantColor={cardVariantColor}
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
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <AvatarBadgeItem
            text={badgeText}
            avatarSrc={badgeAvatarSrc}
            onClick={onBadgeClick}
            size="medium"
            variant="filled"
            color="neutral"
            shape="default"
          />
        </Stack>

        <Box>
          <SubTitleAndParagraph
            title={cardSubtitle}
            subtitle={cardParagraph}
            size={subtitleSize ?? 'md'}
            alignment={subtitleAlignment ?? 'left'}
            variant={subtitleVariant ?? 'default'}
            titleTag={subtitleTitleTag ?? 'h4'}
            subtitleTag={paragraphSubtitleTag ?? 'p'}
          />
        </Box>
      </CardContent>
    </StyledTextCard>
  );
}

export default TextCard;
