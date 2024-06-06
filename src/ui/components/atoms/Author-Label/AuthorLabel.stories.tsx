import type { StoryObj, Meta } from '@storybook/react';
import AuthorLabel from './AuthorLabel';

const meta = {
  title: 'ui/components/atoms/author-label',
  component: AuthorLabel,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof AuthorLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'Marco Antonio Lopez',
  },
};
export const Secondary: Story = {
  args: {
    variant: 'jk Rolling',
  },
};
