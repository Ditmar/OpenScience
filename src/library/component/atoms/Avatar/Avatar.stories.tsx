import type { Meta, StoryObj } from '@storybook/react';
import AtomAvatar from './Avatar';

const meta: Meta<typeof AtomAvatar> = {
  title: 'Atoms/Avatar',
  component: AtomAvatar,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    rounded: { control: 'radio', options: ['r_none', 'r_md', 'r_full'] },
    alt: { control: 'text' },
    src: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof AtomAvatar>;

export const Small: Story = {
  args: {
    size: 'sm',
    rounded: 'r_full',
    alt: 'Small Avatar',
    src: '/avatars/avatar1.png',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    rounded: 'r_full',
    alt: 'Medium Avatar',
    src: '/avatars/avatar2.png',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    rounded: 'r_full',
    alt: 'Large Avatar',
    src: '/avatars/avatar3.png',
  },
};

export const RoundedMd: Story = {
  args: {
    size: 'md',
    rounded: 'r_md',
    alt: 'Rounded Avatar',
    src: '/avatars/avatar4.png',
  },
};

export const NoRounded: Story = {
  args: {
    size: 'md',
    rounded: 'r_none',
    alt: 'Square Avatar',
    src: '/avatars/avatar5.png',
  },
};
