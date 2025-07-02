import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'src/ui/components/atoms/avatar/__mock_/AvatarImage.png',
    alt: 'Avatar image',
    variant: 'rounded',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
export const Circular: Story = {
  args: {
    variant: 'circular',
  },
};
export const Square: Story = {
  args: {
    variant: 'square',
  },
};
