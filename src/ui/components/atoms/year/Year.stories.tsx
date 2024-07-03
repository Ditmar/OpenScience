import type { StoryObj, Meta } from '@storybook/react';
import ButtonYear from './Year';

const meta = {
  title: 'ui/components/atoms/year',
  component: ButtonYear,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      control: 'select',
    },
  },
} as Meta<typeof ButtonYear>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '2023',
  },
};
