import type { Meta, StoryObj } from '@storybook/react';
import Pill from './pills';

const meta = {
  title: 'ui/components/atoms/pills',
  component: Pill,
  argTypes: {
    color: {
      control: 'select',
      options: [
        'neutral-dark',
        'neutral-light',
        'brand-primary',
        'brand-secondary',
        'brand-tertiary',
        'feedback-positive',
        'feedback-negative',
        'feedback-warning',
        'read-only-disabled',
      ],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'soft'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: 'select',
      options: ['r_none', 'r_md', 'r_full'],
    },
    shadow: {
      control: 'boolean',
    },
    stroke: {
      control: 'radio',
      options: ['border-soft', 'border-strong'],
    },
    icon: {
      control: false,
    },
  },
} as Meta<typeof Pill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PillDark: Story = {
  args: {
    text: '100',
    color: 'neutral-dark',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined,
  },
};

export const PillLight: Story = {
  args: {
    text: '100',
    color: 'neutral-light',
    variant: 'outline',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined,
  },
};

export const PillPrimary: Story = {
  args: {
    text: '100',
    color: 'brand-primary',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined,
  },
};

export const PillSecondary: Story = {
  args: {
    text: '100',
    color: 'brand-secondary',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined,
  },
};

export const PillTertiary: Story = {
  args: {
    text: '100',
    color: 'brand-tertiary',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined,
  },
};

export const PillPositive: Story = {
  args: {
    text: '100',
    color: 'feedback-positive',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined,
  },
};

export const PillNegative: Story = {
  args: {
    text: '100',
    color: 'feedback-negative',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined,
  },
};

export const PillWarning: Story = {
  args: {
    text: '100',
    color: 'feedback-warning',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined,
  },
};

export const PillDisabled: Story = {
  args: {
    text: '100',
    color: 'read-only-disabled',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined,
  },
};
