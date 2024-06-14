// AuthButtons.stories.tsx
import type { StoryObj, Meta } from '@storybook/react';
import LoginRegisterButtons from './LoginRegisterButtons';

const meta: Meta<typeof LoginRegisterButtons> = {
  title: 'ui/components/atoms/login-register-buttons/LoginRegisterButton',
  component: LoginRegisterButtons,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
