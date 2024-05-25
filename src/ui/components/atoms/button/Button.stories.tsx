import type { StoryObj, Meta } from '@storybook/react';
import Button from './Button';
import Google from '../../../../assets/icons/google.svg?raw';
import Facebook from '../../../../assets/icons/facebook.svg?raw';

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
    iconBefore: Google,
  },
};
export const Secondary: Story = {
  args: {
    children: 'Facebook',
    iconBefore: Facebook,
  },
};
