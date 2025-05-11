import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
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
    shape: {
      control: {
        type: 'select',
        options: ['circle', 'square'],
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

function Template(props: CheckboxProps): JSX.Element {
  const { checked: initialChecked, onChange, disabled, variant, shape, className } = props;
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
      shape={shape}
      className={className}
    />
  );
}

export const Default: StoryObj = {
  render: () => <Template checked={false} onChange={() => {}} />,
};

export const Checked: StoryObj = {
  render: () => <Template checked onChange={() => {}} />,
};

export const Disabled: StoryObj = {
  render: () => <Template checked={false} onChange={() => {}} disabled />,
};

export const CheckedDisabled: StoryObj = {
  render: () => <Template checked onChange={() => {}} disabled />,
};

export const SuccessVariant: StoryObj = {
  render: () => <Template checked onChange={() => {}} variant="success" />,
};

export const InfoVariant: StoryObj = {
  render: () => <Template checked onChange={() => {}} variant="info" />,
};

export const WarningVariant: StoryObj = {
  render: () => <Template checked onChange={() => {}} variant="warning" />,
};

export const DangerVariant: StoryObj = {
  render: () => <Template checked onChange={() => {}} variant="danger" />,
};

// Nuevas variantes para shape

export const CircleShape: StoryObj = {
  render: () => <Template checked onChange={() => {}} shape="circle" />,
};

export const SquareShape: StoryObj = {
  render: () => <Template checked onChange={() => {}} shape="square" />,
};