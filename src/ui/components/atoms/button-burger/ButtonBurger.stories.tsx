import type { StoryObj } from '@storybook/react';
import Burger from './ButtonBurger';
import burger from '../../../../assets/icons/burger-menu.svg?raw';

const meta = {
  title: 'ui/components/atoms/button-burger',
  component: Burger,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'main',
    icon: burger,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    icon: burger,
  },
};
