import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextField from './text-field';
import Icon from './Icon';

const meta: Meta<typeof TextField> = {
  title: 'ui/components/atoms/TextField',
  component: TextField,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'password', 'number'],
      },
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Default Input',
    placeholder: 'Enter text here',
    value: '',
    onChange: (val) => { console.log(val); },
  },
};

export const WithHelperText: Story = {
  args: {
    ...Default.args,
    helperText: 'This is a helper text',
  },
};

export const ErrorState: Story = {
  args: {
    ...Default.args,
    error: true,
    helperText: 'This is an error message',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    value: 'Disabled text',
  },
};

export const WithLeftIcon: Story = {
  args: {
    ...Default.args,
    leftIcon: <Icon name="search" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    ...Default.args,
    rightIcon: <Icon name="error" />,
  },
};

export const WithBothIcons: Story = {
  args: {
    ...Default.args,
    leftIcon: <Icon name="search" />,
    rightIcon: <Icon name="error" />,
  },
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const PasswordType: Story = {
  args: {
    ...Default.args,
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const EmailType: Story = {
  args: {
    ...Default.args,
    type: 'email',
    placeholder: 'Enter email',
  },
};
