import type { StoryObj, Meta } from '@storybook/react';
import logo from '../../../../assets/icons/logo.svg?raw';
import NetworkLogin from './network-login';

const meta: Meta<typeof NetworkLogin> = {
  title: 'ui/components/molecules/network-login',
  component: NetworkLogin,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: logo,
    color: 'primary',
  },
};

export const Secodary: Story = {
  args: {
    icon: logo,
    color: 'secondary',
  },
};
