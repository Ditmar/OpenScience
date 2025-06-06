import type { Meta, StoryObj } from '@storybook/react';
import TextCardList from './TextCardList';

const meta: Meta<typeof TextCardList> = {
  title: 'ui/components/molecules/TextCardList',
  component: TextCardList,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
    },
    selected: {
      control: 'boolean',
    },
    onSelect: { action: 'selected' },
    categoryTag: {
      control: 'text',
    },
    badge: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextCardList>;

const baseBadge = {
  avatarUrl: 'https://i.pravatar.cc/40',
  text: 'Badge text',
  trailingText: '100',
};

const baseArgs = {
  title: 'Harmonizing Human Experience: The Artistry of UI-UXDesign',
  description:
    'Ul is the canvas, UX the brushstroke; Together, they craft an immersive journey where every pixel tells ' +
    'a story of elegance, efficiency, and effortless delight. Its the artistry of design at its finest.',
  selected: false,
  badge: baseBadge,
};

export const Default: Story = {
  args: {
    ...baseArgs,
    variant: 'default',
  },
};

export const Info: Story = {
  args: {
    ...baseArgs,
    variant: 'info',
  },
};

export const Success: Story = {
  args: {
    ...baseArgs,
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    ...baseArgs,
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    ...baseArgs,
    variant: 'error',
  },
};
