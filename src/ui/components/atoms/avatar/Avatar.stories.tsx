import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://example.com/avatar.png',
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
