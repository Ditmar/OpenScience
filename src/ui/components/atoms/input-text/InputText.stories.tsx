import type { Meta, StoryObj } from '@storybook/react';
import InputText from './InputText';
import eye from '../../../../assets/icons/eye.svg?raw';

const meta = {
  title: 'ui/components/atoms/input-text',
  component: InputText,
  argTypes: {
    isValid: { control: 'boolean' },
  },
} as Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyEmailField: Story = {
  args: {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: '',
    isValid: true,
  },
};

export const EmptyPasswordField: Story = {
  args: {
    label: 'Contraseña',
    type: 'password',
    name: 'password',
    placeholder: '',
    isValid: true,
    eyeIcon: eye,
  },
};

export const EmptyNameField: Story = {
  args: {
    label: 'Nombre',
    type: 'text',
    name: 'name',
    placeholder: '',
    isValid: true,
  },
};
