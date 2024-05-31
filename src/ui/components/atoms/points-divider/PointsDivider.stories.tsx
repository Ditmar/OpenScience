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
      options: ['solid', 'dotted', 'double'],
    },
  },
} as Meta<typeof PointsDivider>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * PrimarySolid variant of the Divider component.
 * This variant uses the primary color, medium size, and solid style.
 */
export const PrimarySolid: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    variant: 'solid',
  },
};

/**
 * SecondaryDotted variant of the Divider component.
 * This variant uses the secondary color, large size, and dotted style.
 */
export const SecondaryDotted: Story = {
  args: {
    color: 'secondary',
    size: 'large',
    variant: 'dotted',
  },
};

/**
 * TertiaryDouble variant of the Divider component.
 * This variant uses the tertiary color, small size, and double style.
 */
export const TertiaryDouble: Story = {
  args: {
    color: 'tertiary',
    size: 'small',
    variant: 'double',
  },
};
