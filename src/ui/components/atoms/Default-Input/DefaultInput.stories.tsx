import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DefaultInput } from './DefaultInput';

const meta: Meta<typeof DefaultInput> = {
  title: 'Components/DefaultInput',
  component: DefaultInput,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof DefaultInput>;

interface InputTriadProps {
  label?: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  className?: string;
}

function InputTriad({
  label,
  placeholder,
  hint,
  error,
  value,
  type,
  disabled,
  className,
}: InputTriadProps) {
  const baseClass = className ?? '';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '330px' }}>
      <DefaultInput
        label={label}
        placeholder={placeholder}
        hint={hint}
        error={error}
        value={value}
        type={type}
        disabled={disabled}
        className={`${baseClass} sharp-corners`}
      />
      <DefaultInput
        label={label}
        placeholder={placeholder}
        hint={hint}
        error={error}
        value={value}
        type={type}
        disabled={disabled}
        className={`${baseClass} rounded-corners`}
      />
      <DefaultInput
        label={label}
        placeholder={placeholder}
        hint={hint}
        error={error}
        value={value}
        type={type}
        disabled={disabled}
        className={`${baseClass} pill-shape`}
      />
    </div>
  );
}

InputTriad.defaultProps = {
  label: '',
  placeholder: '',
  hint: '',
  error: '',
  value: '',
  type: 'text',
  disabled: false,
  className: '',
};

// Todas las historias ahora tienen hint="Hint Text"

export const Default: Story = {
  render: () => <InputTriad label="Email Address" placeholder="Input Text" hint="Hint Text" />,
};

export const WithHint: Story = {
  render: () => <InputTriad label="Email Address" placeholder="Input Text" hint="Hint Text" />,
};

export const WithError: Story = {
  render: () => (
    <InputTriad label="Email Address" placeholder="Input Text" error="Hint Text" hint="Hint Text" />
  ),
};

export const Disabled: Story = {
  render: () => <InputTriad label="Email Address" value="Input Text" disabled hint="Hint Text" />,
};

export const WithIcons: Story = {
  render: () => <InputTriad label="Email Address" placeholder="Input Text" hint="Hint Text" />,
};
