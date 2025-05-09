import type { Meta, StoryObj } from '@storybook/react';
import MyButton from './MyButton';

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

export const Disabled: Story = {
  args: {
    label: 'Deshabilitado',
    disabled: true,
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Advertencia',
    style: { backgroundColor: '#ffc107', color: '#000' },
  },
};
