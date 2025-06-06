import type { Meta, StoryObj } from '@storybook/react';
import { DateTimeInfo } from './DateTimeInfo';

const meta: Meta<typeof DateTimeInfo> = {
  title: 'ui/components/atoms/date-time-info',
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

const timestamp = new Date(Date.now() - 2 * 60 * 1000);

const createStory = (args: Partial<Story['args']>): Story => ({
  args: {
    timestamp,
    ...args,
  },
});

export const SmallLeftWithIcon = createStory({
  showIcon: true,
  iconPosition: 'left',
  size: 'small',
});

export const MediumLeftWithIcon = createStory({
  showIcon: true,
  iconPosition: 'left',
  size: 'medium',
});

export const LargeLeftWithIcon = createStory({
  showIcon: true,
  iconPosition: 'left',
  size: 'large',
});

export const SmallRightWithIcon = createStory({
  showIcon: true,
  iconPosition: 'right',
  size: 'small',
});

export const MediumRightWithIcon = createStory({
  showIcon: true,
  iconPosition: 'right',
  size: 'medium',
});

export const LargeRightWithIcon = createStory({
  showIcon: true,
  iconPosition: 'right',
  size: 'large',
});

export const SmallWithoutIcon = createStory({
  showIcon: false,
  size: 'small',
});

export const MediumWithoutIcon = createStory({
  showIcon: false,
  size: 'medium',
});

export const LargeWithoutIcon = createStory({
  showIcon: false,
  size: 'large',
});
