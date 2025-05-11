import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Check from './check';

type CheckboxVariant = 'default' | 'success' | 'info' | 'warning' | 'danger';

interface CheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  variant?: CheckboxVariant;
  className?: string;
}

const meta: Meta<typeof Check> = {
  title: 'ui/components/atoms/check',
  component: Check,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'success', 'info', 'warning', 'danger'],
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

function Template(props: CheckboxProps): JSX.Element {
  const { checked: initialChecked, onChange, disabled, variant, className } = props;
  const [checked, setChecked] = useState<boolean>(initialChecked);

  return (
    <Check
      checked={checked}
      onChange={(value: boolean) => {
        setChecked(value);
        onChange(value);
      }}
      disabled={disabled}
      variant={variant}
      className={className}
    />
  );
}

export const Default: StoryObj = {
  render: () => <Template checked={false} onChange={() => {}} />,
};

export const Checked: StoryObj = {
  render: () => <Template checked={true} onChange={() => {}} />,
};

export const Disabled: StoryObj = {
  render: () => <Template checked={false} onChange={() => {}} disabled={true} />,
};

export const CheckedDisabled: StoryObj = {
  render: () => <Template checked={true} onChange={() => {}} disabled={true} />,
};

export const SuccessVariant: StoryObj = {
  render: () => <Template checked={true} onChange={() => {}} variant="success" />,
};

export const InfoVariant: StoryObj = {
  render: () => <Template checked={true} onChange={() => {}} variant="info" />,
};

export const WarningVariant: StoryObj = {
  render: () => <Template checked={true} onChange={() => {}} variant="warning" />,
};

export const DangerVariant: StoryObj = {
  render: () => <Template checked={true} onChange={() => {}} variant="danger" />,
};
