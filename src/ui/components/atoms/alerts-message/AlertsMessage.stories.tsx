import type { StoryObj, Meta } from '@storybook/react';
import alerts from './AlertsMessage';

const meta = {
  title: 'ui/components/atoms/alerts-message',
  component: alerts,
  argTypes: {
    variant: {},
  },
} as Meta<typeof alerts>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'primary',
    variant: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'secondary',
    variant: 'Secondary',
  },
};

export const Success: Story = {
  args: {
    children: 'success',
    variant: 'Success',
  },
};

export const Danger: Story = {
  args: {
    children: 'danger',
    variant: 'Danger',
  },
};

export const Warning: Story = {
  args: {
    children: 'warning',
    variant: 'Warning',
  },
};

export const Info: Story = {
  args: {
    children: 'info',
    variant: 'Info',
  },
};

export const Light: Story = {
  args: {
    children: 'light',
    variant: 'Light',
  },
};

export const Dark: Story = {
  args: {
    children: 'dark',
    variant: 'Dark',
  },
};
