import MyButton from './MyButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MyButton> = {
  title: 'Atoms/MyButton',
  component: MyButton,
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
  args: {
    label: 'Botón Primario',
  },
};

export const Warning: Story = {
    args: {
      label: 'Advertencia',
      color: 'warning', 
    },
  };
  
export const Disabled: Story = {
  args: {
    label: 'Deshabilitado',
    disabled: true,
  },
};
