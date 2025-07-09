import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CheckMui from './CheckMui';

const meta: Meta<typeof CheckMui> = {
  title: 'library/component/Atoms/CheckMui',
  component: CheckMui,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'neutral-dark',
          'neutral-light',
          'brand-primary',
          'brand-secondary',
          'feedback-positive',
          'feedback-negative',
        ],
      },
    },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    onChange: { action: 'changed' },
    name: { control: 'text' },
    value: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof CheckMui>;

export const Default: Story = {
  args: {
    variant: 'brand-primary',
    disabled: false,
    checked: false,
    name: 'check-default',
    value: 'default',
  },
};

export const Checked: Story = {
  args: {
    variant: 'brand-primary',
    checked: true,
    name: 'check-checked',
    value: 'checked',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'brand-primary',
    disabled: true,
    name: 'check-disabled',
    value: 'disabled',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 20 }}>
      <CheckMui
        variant="neutral-dark"
        disabled={args.disabled}
        checked={args.checked}
        onChange={args.onChange}
        name={args.name}
        value={args.value}
      />
      <CheckMui
        variant="neutral-light"
        disabled={args.disabled}
        checked={args.checked}
        onChange={args.onChange}
        name={args.name}
        value={args.value}
      />
      <CheckMui
        variant="brand-primary"
        disabled={args.disabled}
        checked={args.checked}
        onChange={args.onChange}
        name={args.name}
        value={args.value}
      />
      <CheckMui
        variant="brand-secondary"
        disabled={args.disabled}
        checked={args.checked}
        onChange={args.onChange}
        name={args.name}
        value={args.value}
      />
      <CheckMui
        variant="feedback-positive"
        disabled={args.disabled}
        checked={args.checked}
        onChange={args.onChange}
        name={args.name}
        value={args.value}
      />
      <CheckMui
        variant="feedback-negative"
        disabled={args.disabled}
        checked={args.checked}
        onChange={args.onChange}
        name={args.name}
        value={args.value}
      />
    </div>
  ),
};
