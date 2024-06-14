import type { Meta, StoryObj } from '@storybook/react';
import Search from './Search';

const meta: Meta<typeof Search> = {
  title: 'ui/components/atoms/search',
  component: Search,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
    query: '',
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
    query: '',
  },
};
