import type { Meta, StoryObj } from '@storybook/react';
import { DateTimeInfo } from './DateTimeInfo';

const meta: Meta<typeof DateTimeInfo> = {
  title: 'DateTimeInfo',
  component: DateTimeInfo,
  tags: ['autodocs'],
  argTypes: {
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    showIcon: {
      control: 'boolean',
    },
    timestamp: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateTimeInfo>;

const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);

export const SmallLeftWithIcon: Story = {
  args: {
    timestamp: twoMinutesAgo,
    showIcon: true,
    iconPosition: 'left',
    size: 'small',
  },
};

export const MediumLeftWithIcon: Story = {
  args: {
    timestamp: twoMinutesAgo,
    showIcon: true,
    iconPosition: 'left',
    size: 'medium',
  },
};

export const LargeLeftWithIcon: Story = {
  args: {
    timestamp: twoMinutesAgo,
    showIcon: true,
    iconPosition: 'left',
    size: 'large',
  },
};

export const SmallRightWithIcon: Story = {
  args: {
    timestamp: twoMinutesAgo,
    showIcon: true,
    iconPosition: 'right',
    size: 'small',
  },
};

export const MediumRightWithIcon: Story = {
  args: {
    timestamp: twoMinutesAgo,
    showIcon: true,
    iconPosition: 'right',
    size: 'medium',
  },
};

export const LargeRightWithIcon: Story = {
  args: {
    timestamp: twoMinutesAgo,
    showIcon: true,
    iconPosition: 'right',
    size: 'large',
  },
};

export const SmallWithoutIcon: Story = {
  args: {
    timestamp: twoMinutesAgo,
    showIcon: false,
    size: 'small',
  },
};

export const MediumWithoutIcon: Story = {
  args: {
    timestamp: twoMinutesAgo,
    showIcon: false,
    size: 'medium',
  },
};

export const LargeWithoutIcon: Story = {
  args: {
    timestamp: twoMinutesAgo,
    showIcon: false,
    size: 'large',
  },
};
