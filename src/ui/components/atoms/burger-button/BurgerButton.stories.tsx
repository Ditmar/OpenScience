import type { StoryObj } from '@storybook/react';
import BurgerButton from './BurgerButton';
import IconBurger from '../../../../assets/icons/button-burguer.svg?raw';
import Burger from '../../../../assets/icons/button-burguer1.svg?raw';

const meta = {
  title: 'ui/components/atoms/burger-bsutton',
  component: BurgerButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BurgerButton>;

export const Primary: Story = {
  args: {
    icon: IconBurger,
    variant: 'main',
    color: 'primary',
    onClick: () => {},
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    icon: Burger,
    onClick: () => {},
  },
};
