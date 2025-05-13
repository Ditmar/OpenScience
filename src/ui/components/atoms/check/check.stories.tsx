import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react'; // o '@storybook/react-webpack5'
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

const Template: StoryObj<CheckboxProps> = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked || false);

    return (
      <Check
        {...args}
        checked={checked}
        onChange={(value) => {
          setChecked(value);
        }}
      />
    );
  },
};

export const Default = {
  ...Template,
  args: {
    checked: false,
  },
};

export const Checked = {
  ...Template,
  args: {
    checked: true,
  },
};

export const Disabled = {
  ...Template,
  args: {
    checked: false,
    disabled: true,
  },
};

export const CheckedDisabled = {
  ...Template,
  args: {
    checked: true,
    disabled: true,
  },
};

export const SuccessVariant = {
  ...Template,
  args: {
    checked: true,
    variant: 'success',
  },
};

export const InfoVariant = {
  ...Template,
  args: {
    checked: true,
    variant: 'info',
  },
};

export const WarningVariant = {
  ...Template,
  args: {
    checked: true,
    variant: 'warning',
  },
};

export const DangerVariant = {
  ...Template,
  args: {
    checked: true,
    variant: 'danger',
  },
};
