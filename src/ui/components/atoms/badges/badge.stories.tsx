import type { Meta, StoryObj } from '@storybook/react';
import Badge from './badge';

const meta: Meta<typeof Badge> = {
  title: 'ui/components/atoms/badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outline', 'soft'],
    },
    color: {
      control: { type: 'select' },
      options: ['neutral', 'gray', 'violet', 'blue', 'custom'],
    },
    shape: {
      control: { type: 'select' },
      options: ['default', 'rounded'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    customColor: {
      control: { type: 'color' },
      if: { arg: 'color', eq: 'custom' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const handleClose = (message: string) => {
  return () => {
    console.log(message);
  };
};

export const FullExample: Story = {
  args: {
    variant: 'filled',
    color: 'custom',
    customColor: '#6b7280',
    shape: 'rounded',
    size: 'md',
    image: 'https://i.pravatar.cc/24',
    leftCount: 100,
    rightCount: 100,
    children: 'Badge Text',
    onClose: handleClose('Badge closed'),
  },
};

export const NeutralFilled: Story = {
  args: {
    variant: 'filled',
    color: 'neutral',
    shape: 'default',
    children: 'Neutral',
    onClose: handleClose('Close'),
  },
};

export const GrayOutline: Story = {
  args: {
    variant: 'outline',
    color: 'gray',
    shape: 'default',
    children: 'Gray',
    leftCount: 5,
    rightCount: 10,
  },
};

export const VioletSoftRounded: Story = {
  args: {
    variant: 'soft',
    color: 'violet',
    shape: 'rounded',
    children: 'Violet',
    onClose: handleClose('Close'),
  },
};

export const WithLeftIcon: Story = {
  args: {
    color: 'blue',
    children: 'With Icon',
    shape: 'rounded',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    color: 'violet',
    children: 'With Icon',
    shape: 'rounded',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
  },
};

export const WithImage: Story = {
  args: {
    color: 'neutral',
    children: 'User',
    image: 'https://i.pravatar.cc/24',
    onClose: handleClose('Image badge closed'),
  },
};

export const CustomColor: Story = {
  args: {
    color: 'custom',
    customColor: '#ff5722',
    children: 'Custom',
    shape: 'rounded',
  },
};

export const LongText: Story = {
  args: {
    variant: 'filled',
    color: 'blue',
    children: 'This is a very long badge text that should be truncated',
    shape: 'default',
    onClose: handleClose('Closed'),
  },
};

export const SmallSize: Story = {
  args: {
    size: 'sm',
    children: 'Small',
    color: 'gray',
    leftCount: 1,
    rightCount: 2,
    onClose: handleClose('Small closed'),
  },
};
