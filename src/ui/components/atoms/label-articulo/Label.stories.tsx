import type { StoryObj, Meta } from '@storybook/react';
import Label from './Label';

const meta = {
  title: 'ui/components/atoms/Label',
  component: Label,
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
} as Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Artículos',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Artículos',
    variant: 'primary',
  },
};
