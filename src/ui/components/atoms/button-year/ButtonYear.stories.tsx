import type { StoryObj, Meta } from '@storybook/react';
import ButtonYear from './ButtonYear';

const meta = {
  title: 'ui/components/atoms/button-year',
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
    children: 'año',
  },
};
