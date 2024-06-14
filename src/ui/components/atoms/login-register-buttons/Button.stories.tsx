import type { StoryObj, Meta } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'ui/components/atoms/login-register-buttons/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'INICIAR SESIÓN',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'REGISTRARSE',
    variant: 'secondary',
  },
};
