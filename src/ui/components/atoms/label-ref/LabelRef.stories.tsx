import type { StoryObj, Meta } from '@storybook/react';
import LabelRef from './LabelRef';
import '../../../../globals/_variables.scss';

const meta: Meta<typeof LabelRef> = {
  title: 'ui/components/atoms/LabelRef',
  component: LabelRef,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'REFERENCIAS',
    },
    variant: {
      control: 'select',
      options: ['default', 'secondary'],
      defaultValue: 'default',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'REFERENCIAS',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'REFERENCIAS',
    variant: 'secondary',
  },
};
