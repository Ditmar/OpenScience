import type { Meta, StoryObj } from '@storybook/react';
import BadgeItem from './badges';
import type { BadgeItemProps } from './types/IProps';

const meta: Meta<BadgeItemProps> = {
  title: 'library/component/molecules/BadgeItem',
  component: BadgeItem,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    shape: {
      control: { type: 'radio' },
      options: ['square', 'rounded'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['filled', 'outline', 'soft'],
    },
    color: {
      control: { type: 'select' },
      options: ['violet', 'gray', 'blue', 'neutral', 'custom'],
    },
    customColor: {
      control: 'color',
    },
    onClick: { action: 'clicked' },
    onRemove: { action: 'removed' },
  },
};

export default meta;

type Story = StoryObj<BadgeItemProps>;

function Template({
  avatarSrc,
  text,
  countStart,
  countEnd,
  showAvatar,
  size,
  bold,
  variant,
  color,
  customColor,
  shape,
  onClick,
  onRemove,
}: BadgeItemProps) {
  return (
    <BadgeItem
      avatarSrc={avatarSrc}
      text={text}
      countStart={countStart}
      countEnd={countEnd}
      showAvatar={showAvatar}
      size={size}
      bold={bold}
      variant={variant}
      color={color}
      customColor={customColor}
      shape={shape}
      onClick={onClick}
      onRemove={onRemove}
    />
  );
}

export const Default: Story = {
  render: Template,
  args: {
    avatarSrc: 'https://i.pravatar.cc/100',
    text: 'Usuario Ejemplo',
    countStart: 10,
    countEnd: 99,
    showAvatar: true,
    size: 'medium',
    bold: true,
    variant: 'filled',
    color: 'neutral',
    shape: 'rounded',
  },
};

export const Clickable: Story = {
  render: Template,
  args: {
    ...Default.args,
    onClick: () => {
      alert('AvatarBadgeItem clickeado');
    },
  },
};

export const Removable: Story = {
  render: Template,
  args: {
    ...Default.args,
    onRemove: () => {
      alert('Badge eliminado');
    },
  },
};

export const CustomColor: Story = {
  render: Template,
  args: {
    ...Default.args,
    color: 'custom',
    customColor: '#ff4081',
    variant: 'outline',
  },
};
