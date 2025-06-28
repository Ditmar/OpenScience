import type { Meta, StoryObj } from '@storybook/react';
import AuthButtons from './AuthButtons';

const meta: Meta<typeof AuthButtons> = {
  title: 'library/component/molecules/AuthButtons',
  component: AuthButtons,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthButtons>;

export const Default: Story = {
  args: {
    onLogin: () => {
      console.log('Iniciar sesión clickeado');
    },
    onRegister: () => {
      console.log('Registrarse clickeado');
    },
    loading: false,
    disabled: false,
  },
};

export const Loading: Story = {
  args: {
    onLogin: () => {},
    onRegister: () => {},
    loading: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    onLogin: () => {},
    onRegister: () => {},
    loading: false,
    disabled: true,
  },
};

export const LoadingAndDisabled: Story = {
  args: {
    onLogin: () => {},
    onRegister: () => {},
    loading: true,
    disabled: true,
  },
};
