import type { StoryObj, Meta } from '@storybook/react';
import PointsDivider from './PointsDivider';

const meta = {
  title: 'ui/components/atoms/points-divider',
  component: PointsDivider,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['solid-line', 'segmented-line', 'points'],
    },
  },
} as Meta<typeof PointsDivider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimarySolidLine: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    variant: 'solid-line',
  },
};

export const SecondarySegmentedLine: Story = {
  args: {
    color: 'secondary',
    size: 'large',
    variant: 'segmented-line',
  },
};

export const TertiaryPoints: Story = {
  args: {
    color: 'tertiary',
    size: 'small',
    variant: 'points',
  },
};
