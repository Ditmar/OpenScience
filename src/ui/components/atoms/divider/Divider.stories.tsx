import type { StoryObj, Meta } from '@storybook/react';
import Divider from './Divider';

const meta = {
  title: 'ui/components/atoms/divider',
  component: Divider,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'dotted', 'dashed'],
    },
  },
} as Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
};

export const Dotted: Story = {
  args: {
    variant: 'dotted',
  },
};

export const Dashed: Story = {
  args: {
    variant: 'dashed',
  },
};
