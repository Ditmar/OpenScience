import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Molecules/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    text: 'Users',
    number: 42,
    avatarUrl: 'https://example.com/avatar.png',
    size: 'medium',
    color: '#1976d2',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const WithAvatar: Story = {};

export const WithoutAvatar: Story = {
  args: {
    avatarUrl: undefined,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const CustomColor: Story = {
  args: {
    color: '#e91e63',
  },
};
