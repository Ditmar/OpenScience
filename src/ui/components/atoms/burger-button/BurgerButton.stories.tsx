import type { StoryObj, Meta } from '@storybook/react';
import BurgerButton from './BurgerButton';

const meta = {
  title: 'ui/components/atoms/BurgerButton',
  component: BurgerButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof BurgerButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
