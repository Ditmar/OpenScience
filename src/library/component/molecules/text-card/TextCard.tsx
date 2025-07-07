import React from 'react';
import type { TextCardProps } from './types/IProps';
import { StyledTextCard, Header } from './TextCard.style';
import BadgeCard from '../badge-card/BadgeCard';
import CheckMui from '../../atoms/Check-mui/CheckMui';
import AtomText from '../../atoms/Atom-text/AtomText';

function TextCard({
  size = 'md',
  rounded = 'r_md',
  checkProps,
  badgeProps,
  title,
  titleProps,
  description,
  descriptionProps,
}: TextCardProps) {
  const { checked, onChange, disabled, name, value } = checkProps;

  const { backgroundColor, avatar, text, pill, rounded: badgeRounded } = badgeProps;

  return (
    <StyledTextCard size={size} rounded={rounded}>
      <Header>
        <CheckMui
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          name={name}
          value={value}
          variant="neutral-dark"
        />
        <div className="content">
          <BadgeCard
            size={size}
            rounded={badgeRounded}
            backgroundColor={backgroundColor}
            avatar={avatar}
            text={text}
            pill={pill}
          />
          <AtomText
            size="lg"
            color={titleProps?.color}
            align={titleProps?.align}
            fontWeight={titleProps?.fontWeight}
            gutterBottom={titleProps?.gutterBottom}
          >
            {title}
          </AtomText>
          <AtomText
            size="md"
            color={descriptionProps?.color}
            align={descriptionProps?.align}
            fontWeight={descriptionProps?.fontWeight}
            gutterBottom={descriptionProps?.gutterBottom}
          >
            {description}
          </AtomText>
        </div>
      </Header>
    </StyledTextCard>
  );
}

export default TextCard;
