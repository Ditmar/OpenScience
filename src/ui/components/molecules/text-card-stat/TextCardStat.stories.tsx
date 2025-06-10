import type { StoryObj } from '@storybook/react';
import TextCardStat from './TextCardStat';

const meta = {
  title: 'Components/TextCardStat',
  component: TextCardStat,
  tags: ['autodocs'],
  args: {
    label: 'New',
    title: 'Test Title',
    description: 'This is the card content',
    variant: 'primary',
    size: 'medium',
    elevation: 1,
    isDisabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Clickable: Story = {
  args: {
    onClick: () => {
      alert('Card clicked');
    },
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
