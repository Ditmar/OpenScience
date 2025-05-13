import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Check from './check';

type CheckboxVariant = 'default' | 'success' | 'info' | 'warning' | 'danger';
type CheckboxShape = 'circle' | 'square';

interface CheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  variant?: CheckboxVariant;
  shape?: CheckboxShape;
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
  render: function Render(args) {
    const [checked, setChecked] = useState(args.checked || false);

    const handleChange = (value: boolean) => {
      setChecked(value);
      if (args.onChange) {
        args.onChange(value);
      }
    };

    return (
      <Check
        checked={checked}
        onChange={handleChange}
        disabled={args.disabled}
        variant={args.variant}
        shape={args.shape}
        className={args.className}
      />
    );
  },
};

export const Default = {
  ...Template,
  args: {
    checked: false,
    onChange: () => {},
  },
};

export const Checked = {
  ...Template,
  args: {
    checked: true,
    onChange: () => {},
  },
};

export const Disabled = {
  ...Template,
  args: {
    checked: false,
    disabled: true,
    onChange: () => {},
  },
};

export const CheckedDisabled = {
  ...Template,
  args: {
    checked: true,
    disabled: true,
    onChange: () => {},
  },
};

export const SuccessVariant = {
  ...Template,
  args: {
    checked: true,
    variant: 'success',
    onChange: () => {},
  },
};

export const InfoVariant = {
  ...Template,
  args: {
    checked: true,
    variant: 'info',
    onChange: () => {},
  },
};

export const WarningVariant = {
  ...Template,
  args: {
    checked: true,
    variant: 'warning',
    onChange: () => {},
  },
};

export const DangerVariant = {
  ...Template,
  args: {
    checked: true,
    variant: 'danger',
    onChange: () => {},
  },
};
