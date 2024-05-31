import type { StoryObj, Meta } from '@storybook/react';
import LabelRef from './LabelRef';

const meta = {
  title: 'ui/components/atoms/LabelRef',
  component: LabelRef,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'REFERENCIAS',
    },
  },
} as Meta<typeof LabelRef>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'REFERENCIAS',
  },
};
