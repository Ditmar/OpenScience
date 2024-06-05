import type { StoryObj, Meta } from '@storybook/react';
import Button from './Button';
import Facebook from '../../../../assets/icons/facebook.svg?raw';
import Google from '../../../../assets/icons/google.svg?raw';

const meta = {
  title: 'ui/components/atoms/button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Google',
    icon: Google,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Facebook',
    icon: Facebook,
  },
};
