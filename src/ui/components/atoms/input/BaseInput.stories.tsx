import type { Meta, StoryObj } from '@storybook/react';
import { Email, Lock, Visibility } from '@mui/icons-material';
import { BaseInput } from './BaseInput';

const meta: Meta<typeof BaseInput> = {
  title: 'ui/components/atoms/BaseInput',
  component: BaseInput,
  argTypes: {
    id: { control: 'text' },
    placeholder: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
    value: { control: 'text' },
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    onFocus: { action: 'focused' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    startIcon: { control: { disable: true } },
    endIcon: { control: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof BaseInput>;

export const Default: Story = {
  args: {
    id: 'default-input',
    placeholder: 'Enter text here',
    type: 'text',
  },
};

export const WithIcons: Story = {
  args: {
    id: 'with-icons-input',
    placeholder: 'Email address',
    type: 'email',
    startIcon: <Email />,
    endIcon: <Lock />,
  },
};

export const PasswordInput: Story = {
  args: {
    id: 'password-input',
    placeholder: 'Enter password',
    type: 'password',
    startIcon: <Lock />,
    endIcon: <Visibility />,
  },
};

export const ErrorState: Story = {
  args: {
    id: 'error-input',
    placeholder: 'Error input',
    error: true,
    value: 'Wrong value',
  },
};

export const DisabledState: Story = {
  args: {
    id: 'disabled-input',
    placeholder: 'Disabled input',
    disabled: true,
    value: "Can't edit this",
  },
};
