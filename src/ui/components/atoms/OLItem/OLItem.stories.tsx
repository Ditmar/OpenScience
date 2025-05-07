import type { Meta, StoryObj } from '@storybook/react';
import OLItem from './OLItem';

const meta: Meta<typeof OLItem> = {
  title: 'ui/components/atoms/OLItem',
  component: OLItem,
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['square', 'rounded', 'circle'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    styleType: {
      control: { type: 'select' },
      options: ['default', 'stroked'],
    },
    active: { control: 'boolean' },
    value: { control: 'text' },
  },
} as Meta<typeof OLItem>;

export default meta;

type Story = StoryObj<typeof OLItem>;

export const DefaultSquareSmall: Story = {
  args: {
    value: 1,
    shape: 'square',
    size: 'sm',
    styleType: 'default',
    active: false,
  },
};

export const DefaultSquareMedium: Story = {
  args: {
    value: 1,
    shape: 'square',
    size: 'md',
    styleType: 'default',
    active: false,
  },
};

export const DefaultSquareLarge: Story = {
  args: {
    value: 1,
    shape: 'square',
    size: 'lg',
    styleType: 'default',
    active: false,
  },
};

export const DefaultRoundedSmall: Story = {
  args: {
    value: 2,
    shape: 'rounded',
    size: 'sm',
    styleType: 'default',
    active: false,
  },
};

export const DefaultRoundedMedium: Story = {
  args: {
    value: 2,
    shape: 'rounded',
    size: 'md',
    styleType: 'default',
    active: false,
  },
};

export const DefaultRoundedLarge: Story = {
  args: {
    value: 2,
    shape: 'rounded',
    size: 'lg',
    styleType: 'default',
    active: false,
  },
};

export const DefaultCircleSmall: Story = {
  args: {
    value: 3,
    shape: 'circle',
    size: 'sm',
    styleType: 'default',
    active: false,
  },
};

export const DefaultCircleMedium: Story = {
  args: {
    value: 3,
    shape: 'circle',
    size: 'md',
    styleType: 'default',
    active: false,
  },
};

export const DefaultCircleLarge: Story = {
  args: {
    value: 3,
    shape: 'circle',
    size: 'lg',
    styleType: 'default',
    active: false,
  },
};

export const StrocketSquareSmall: Story = {
  args: {
    value: 1,
    shape: 'square',
    size: 'sm',
    styleType: 'stroked',
    active: false,
  },
};

export const StrocketRoundedMedium: Story = {
  args: {
    value: 1,
    shape: 'rounded',
    size: 'md',
    styleType: 'stroked',
    active: false,
  },
};

export const StrocketCircleLarge: Story = {
  args: {
    value: 1,
    shape: 'circle',
    size: 'lg',
    styleType: 'stroked',
    active: false,
  },
};

export const StrokedCircleLargeActive: Story = {
  args: {
    value: 4,
    shape: 'circle',
    size: 'lg',
    styleType: 'stroked',
    active: true,
  },
};
