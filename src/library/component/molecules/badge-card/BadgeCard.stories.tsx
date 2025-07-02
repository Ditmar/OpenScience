import type { Meta, StoryObj } from '@storybook/react';
import BadgeCard from './BadgeCard';
import type { BadgeCardProps } from './types/IProps';

const meta: Meta<typeof BadgeCard> = {
  title: 'Molecules/BadgeCard',
  component: BadgeCard,
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'warning', 'success', 'danger'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: { type: 'radio' },
      options: ['r_none', 'r_md', 'r_full'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof BadgeCard>;

const defaultArgs: BadgeCardProps = {
  size: 'md',
  rounded: 'r_md',
  backgroundColor: 'primary',
  avatar: {
    src: 'https://i.pravatar.cc/40',
    alt: 'User Avatar',
  },
  text: {
    content: 'Badge text',
    color: 'light',
    fontWeight: 600,
  },
  pill: {
    text: '100',
    color: 'brand-primary',
    variant: 'filled',
    rounded: 'r_md',
  },
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Secondary: Story = {
  args: {
    ...defaultArgs,
    backgroundColor: 'secondary',
    pill: { ...defaultArgs.pill, color: 'brand-secondary' },
  },
};

export const Warning: Story = {
  args: {
    ...defaultArgs,
    backgroundColor: 'warning',
    pill: { ...defaultArgs.pill, color: 'feedback-warning' },
  },
};

export const Success: Story = {
  args: {
    ...defaultArgs,
    backgroundColor: 'success',
    pill: { ...defaultArgs.pill, color: 'feedback-positive' },
  },
};

export const Danger: Story = {
  args: {
    ...defaultArgs,
    backgroundColor: 'danger',
    pill: { ...defaultArgs.pill, color: 'feedback-negative' },
  },
};
