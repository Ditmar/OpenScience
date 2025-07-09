import type { Meta, StoryObj } from '@storybook/react';
import { TextFieldWrapper } from './TextFieldWrapper';

const meta: Meta<typeof TextFieldWrapper> = {
  title: 'ui/components/molecules/TextFieldWrapper',
  component: TextFieldWrapper,
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
    hint: { control: 'text' },
    placeholder: { control: 'text' },
    status: {
      control: 'select',
      options: ['default', 'error', 'success'],
      mapping: {
        default: null,
        error: 'error',
        success: 'success',
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextFieldWrapper>;

export const Default: Story = {
  args: {
    id: 'input-default',
    label: 'Nombre',
    value: '',
    placeholder: 'Juan Pérez',
    helperText: 'Ingresa tu nombre',
    status: null,
    type: 'text',
    size: 'medium',
    onChange: () => {},
  },
};

export const Error: Story = {
  args: {
    id: 'input-error',
    label: 'Correo',
    value: '',
    placeholder: 'correo@ejemplo.com',
    helperText: 'Formato de correo inválido',
    status: 'error',
    type: 'email',
    size: 'medium',
    onChange: () => {},
  },
};

export const Success: Story = {
  args: {
    id: 'input-success',
    label: 'Usuario',
    value: 'texto válido',
    helperText: 'Todo está correcto',
    status: 'success',
    type: 'text',
    size: 'medium',
    onChange: () => {},
  },
};

export const Password: Story = {
  args: {
    id: 'input-password',
    label: 'Contraseña',
    value: '',
    status: null,
    type: 'password',
    size: 'medium',
    onChange: () => {},
  },
};
