import type { Meta, StoryObj } from '@storybook/react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Pill from './pills';
import type { IProps } from './types/IProps';

type TStory = StoryObj<typeof Pill>;

const meta: Meta<typeof Pill> = {
  title: 'Atoms/Pill',
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
    text: 'Texto',
    color: 'neutral-light',
    variant: 'filled',
    size: 'md',
    rounded: 'r_md',
    shadow: false,
  },
};

export const ConIcono: TStory = {
  args: {
    text: 'Texto',
    color: 'brand-secondary',
    variant: 'filled',
    icon: <BookmarkIcon fontSize="small" />,
    iconPosition: 'left',
  },
};

export function TodosLosColores() {
  const colores: IProps['color'][] = [
    'neutral-dark',
    'neutral-light',
    'brand-primary',
    'brand-secondary',
    'brand-tertiary',
    'feedback-positive',
    'feedback-negative',
    'feedback-warning',
    'read-only-disabled',
  ];

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {colores.map((color) => (
        <Pill key={color} text="100" color={color} variant="filled" />
      ))}
    </div>
  );
}
