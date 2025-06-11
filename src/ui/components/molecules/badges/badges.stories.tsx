import type { Meta, StoryObj } from '@storybook/react';
import { AvatarBadgeItem } from './badges';

const meta: Meta<typeof AvatarBadgeItem> = {
  title: 'ui/components/molecules/badges',
  component: AvatarBadgeItem,
  argTypes: {
    avatarSrc: {
      control: 'text',
      description: 'URL of the avatar image',
    },
    text: {
      control: 'text',
      description: 'Main badge text',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      description: 'Size of the component',
    },
    bold: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether the text should be bold',
    },
    showAvatar: {
      control: 'boolean',
      defaultValue: true,
      description: 'Show/hide the avatar',
    },
    countStart: {
      control: 'number',
      description: 'Number displayed before the text',
    },
    countEnd: {
      control: 'number',
      description: 'Number displayed after the text',
    },
    variant: {
      control: 'radio',
      options: ['filled', 'outline', 'soft'],
      defaultValue: 'filled',
      description: 'Variant of the badge',
    },
    color: {
      control: 'radio',
      options: ['neutral', 'gray', 'violet', 'blue', 'custom'],
      defaultValue: 'neutral',
      description: 'Color of the badge',
    },
    customColor: {
      control: 'color',
      if: { arg: 'color', eq: 'custom' },
      description: 'Custom color when color is set to custom',
    },
    shape: {
      control: 'radio',
      options: ['default', 'rounded'],
      defaultValue: 'default',
      description: 'Shape of the badge corners',
    },
    onRemove: {
      action: 'removed',
      description: 'Callback when remove button is clicked',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when the badge is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarBadgeItem>;

export const Example: Story = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=1',
  },
};

export const OutlineVariant: Story = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=3',
    variant: 'outline',
  },
};

export const SoftViolet: Story = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=5',
    variant: 'soft',
    color: 'violet',
  },
};

export const RoundedShape: Story = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=7',
    shape: 'rounded',
  },
};

export const CustomColor: Story = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=9',
    color: 'custom',
    customColor: '#ffeb3b',
  },
};

export const WithCounters: Story = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=11',
    countStart: 5,
    countEnd: 10,
  },
};

