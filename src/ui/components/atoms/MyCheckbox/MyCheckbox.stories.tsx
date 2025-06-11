import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModeSwitcher } from '../../../../style-library/core/ThemeSwitcher';
import MyCheckbox from './MyCheckbox';

const meta: Meta<typeof MyCheckbox> = {
  title: 'Atoms/MyCheckbox',
  component: MyCheckbox,
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'If true, the component is checked.',
      defaultValue: false,
    },
    onChange: {
      description: 'Callback fired when the state of the checkbox changes.',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled.',
      defaultValue: false,
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'danger', 'success', 'warning', 'default'],
      description: 'The color variant of the checkbox.',
      defaultValue: 'default',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <ModeSwitcher />
        <hr style={{ width: '100%', borderTop: '1px solid #eee', margin: '20px 0' }} />
        <Story />
      </div>
    ),
  ],
  args: {
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    // checked se omite para false (es el valor por defecto)
    // onChange ya lo tiene el args global en meta
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <MyCheckbox checked={args.checked} onChange={args.onChange} variant="info" />
      <MyCheckbox checked={args.checked} onChange={args.onChange} variant="danger" />
      <MyCheckbox checked={args.checked} onChange={args.onChange} variant="success" />
      <MyCheckbox checked={args.checked} onChange={args.onChange} variant="warning" />
      <MyCheckbox checked={args.checked} onChange={args.onChange} variant="default" />
    </div>
  ),
  args: {
    checked: true,
  },
};

export const UncheckedWithValue: Story = {
  args: {
    value: 'my-checkbox-value',
  },
};

export const CheckedWithValue: Story = {
  args: {
    checked: true,
    value: 'another-checkbox-value',
  },
};
