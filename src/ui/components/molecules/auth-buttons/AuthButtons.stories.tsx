import type { Meta, StoryObj } from '@storybook/react';
import AuthButtons from './AuthButtons';

const meta: Meta<typeof AuthButtons> = {
  title: 'library/Component/molecules/AuthButtons',
  component: AuthButtons,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthButtons>;

export const Default: Story = {
  args: {
    onLogin: () => {
      alert('Iniciar sesión');
    },
    onRegister: () => {
      alert('Registrarse');
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
