import type { StoryObj } from '@storybook/react';
import BurgerButton from './BurgerButton';
import IconBurger from '../../../../assets/icons/button-burguer.svg';

const meta = {
  title: 'ui/components/atoms/burger-button',
  component: BurgerButton,
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
    icon: IconBurger,
    onClick: () => {
      console.log('Button clicked');
    },
  },
};
