import type { StoryObj } from '@storybook/react';
import Tags from './Tags';

const meta = {
  title: 'ui/components/atoms/Tags',
  component: Tags,
  argTypes: {
    labels: {
      Control: 'array',
    },
    variant: {
      control: 'radio',
      options: ['default', 'black', 'large-text'],
    },
    to: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labels: ['Workings', 'Optimism', 'Meaning', 'Promoting'],
    variant: 'default',
    to: '/default-path',
  },
};

export const BlackTags: Story = {
  args: {
    labels: ['Workings', 'Optimism', 'Meaning', 'Promoting'],
    variant: 'black',
    to: '/black-tags-path',
  },
};

export const LargeTextTags: Story = {
  args: {
    labels: ['Workings', 'Optimism', 'Meaning', 'Promoting'],
    variant: 'large-text',
    to: '/large-text-tags-path',
  },
};
