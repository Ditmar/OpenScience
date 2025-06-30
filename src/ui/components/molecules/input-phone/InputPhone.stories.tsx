import type { StoryObj } from '@storybook/react';
import InputPhone from './InputPhone';

const meta = {
  title: 'ui/Components/Molecules/InputPhone',
  component: InputPhone,
  argTypes: {
    iconText: { control: 'text' },
    hintText: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    borderRadius: {
      control: { type: 'select' },
      options: ['rounded', 'straight'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'focus', 'error', 'disabled'],
    },
    onClose: { action: 'closed' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconText: 'Phone Number',
    hintText: 'Enter your phone number',
    size: 'medium',
    borderRadius: 'rounded',
    state: 'default',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const WithCloseButton: Story = {
  args: {
    ...Default.args,
    onClose: () => {},
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const ErrorState: Story = {
  args: {
    ...Default.args,
    state: 'error',
    hintText: 'Invalid phone number',
  },
};

export const WithoutHint: Story = {
  args: {
    ...Default.args,
    hintText: '',
  },
};
