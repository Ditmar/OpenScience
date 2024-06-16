import type { StoryObj, Meta } from '@storybook/react';
import LoginRegisterButtons from './LoginRegisterButtons';
import PrimaryButtons from '../../atoms/primary-buttons/PrimaryButtons';

const meta: Meta<typeof LoginRegisterButtons> = {
  title: 'ui/components/molecules/login-register-buttons',
  component: LoginRegisterButtons,
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
    children: (
      <>
        <PrimaryButtons variant="primary">iniciar sesion</PrimaryButtons>
        <PrimaryButtons variant="secondary">registrarse</PrimaryButtons>
      </>
    ),
  },
};

export const Secondary: Story = {
  args: {
    children: (
      <>
        <PrimaryButtons variant="primary">iniciar sesion</PrimaryButtons>
        <PrimaryButtons variant="tertiary">registrarse</PrimaryButtons>
      </>
    ),
  },
};
