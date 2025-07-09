import type { Meta, StoryObj } from '@storybook/react';
import BurgerIconButton from './BurgerIconButton';

const meta: Meta<typeof BurgerIconButton> = {
  title: 'library/component/atoms/BurgerIconButton',
  component: BurgerIconButton,
};

export default meta;

type Story = StoryObj<typeof BurgerIconButton>;

export const Default: Story = {
  args: {
    onClick: () => {
      /* evento click del botón hamburguesa */
    },
    ariaLabel: 'Abrir menú',
  },
};
