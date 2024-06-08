import type { Meta, StoryObj } from '@storybook/react';
import Tags from './Tags';

const meta: Meta<typeof Tags> = {
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
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labels: ['Workings', 'Optimism', 'Meaning', 'Promoting'],
    variant: 'default',
  },
};

export const BlackTags: Story = {
  args: {
    labels: ['Workings', 'Optimism', 'Meaning', 'Promoting'],
    variant: 'black',
  },
};

export const LargeTextTags: Story = {
  args: {
    labels: ['Workings', 'Optimism', 'Meaning', 'Promoting'],
    variant: 'large-text',
  },
};
