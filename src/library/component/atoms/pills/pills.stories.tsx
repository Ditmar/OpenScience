import type { Meta, StoryObj } from '@storybook/react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Pill from './pills';

type TStory = StoryObj<typeof Pill>;

const meta: Meta<typeof Pill> = {
  title: 'library/component/atoms/Pill',
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
      options: ['filled', 'soft', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: 'select',
      options: ['r_none', 'r_md', 'r_full'],
    },
    stroke: {
      control: 'select',
      options: [undefined, 'border-soft', 'border-strong'],
    },
    iconPosition: {
      control: 'select',
      options: [undefined, 'left', 'right'],
    },
    shadow: { control: 'boolean' },
  },
};

export default meta;

export const Default: TStory = {
  args: {
    text: '100',
    color: 'neutral-dark',
    variant: 'filled',
    size: 'md',
    rounded: 'r_none',
    shadow: false,
  },
};
export const LightWithBorder: TStory = {
  args: {
    text: '100',
    color: 'neutral-light',
    variant: 'filled',
    size: 'md',
    rounded: 'r_md',
    shadow: false,
    stroke: 'border-strong',
  },
};

export const PositiveSoft: TStory = {
  args: {
    text: '100',
    color: 'feedback-positive',
    variant: 'soft',
    size: 'md',
    rounded: 'r_md',
    shadow: false,
  },
};

export const Disabled: TStory = {
  args: {
    text: '100',
    color: 'read-only-disabled',
    variant: 'filled',
    size: 'md',
    rounded: 'r_md',
    shadow: false,
  },
};
export const ConIcono: TStory = {
  args: {
    text: '100',
    color: 'brand-secondary',
    variant: 'filled',
    icon: <BookmarkIcon fontSize="small" />,
    iconPosition: 'left',
  },
};
