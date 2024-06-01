import type { StoryObj, Meta } from '@storybook/react';
import PointsDivider from './PointsDivider';

const meta = {
  title: 'ui/components/atoms/PointsDivider',
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
      options: [/* 'solid', 'dotted', 'double',  */'solid-line', 'segmented-line', 'points'],
    },
  },
} as Meta<typeof PointsDivider>;

export default meta;

type Story = StoryObj<typeof meta>;

/* export const PrimarySolid: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    variant: 'solid',
  },
};

export const SecondaryDotted: Story = {
  args: {
    color: 'secondary',
    size: 'large',
    variant: 'dotted',
  },
};

export const TertiaryDouble: Story = {
  args: {
    color: 'tertiary',
    size: 'small',
    variant: 'double',
  },
};
 */
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
