import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Checkbox from './Checkbox';
import type { IProps } from './types/Iprops';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/components/atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Checkbox>;


const renderWithState = (args: IProps) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={setChecked} />;
};


export const DefaultSquare: Story = {
  args: {
    variant: 'default',
    shape: 'square',
  },
  render: renderWithState,
};

export const SuccessSquare: Story = {
  args: {
    variant: 'success',
    shape: 'square',
  },
  render: renderWithState,
};

export const InfoSquare: Story = {
  args: {
    variant: 'info',
    shape: 'square',
  },
  render: renderWithState,
};

export const WarningSquare: Story = {
  args: {
    variant: 'warning',
    shape: 'square',
  },
  render: renderWithState,
};

export const DangerSquare: Story = {
  args: {
    variant: 'danger',
    shape: 'square',
  },
  render: renderWithState,
};

export const DisabledSquare: Story = {
  args: {
    variant: 'default',
    shape: 'square',
    disabled: true,
  },
  render: renderWithState,
};


export const DefaultCircle: Story = {
  args: {
    variant: 'default',
    shape: 'circle',
  },
  render: renderWithState,
};

export const SuccessCircle: Story = {
  args: {
    variant: 'success',
    shape: 'circle',
  },
  render: renderWithState,
};

export const InfoCircle: Story = {
  args: {
    variant: 'info',
    shape: 'circle',
  },
  render: renderWithState,
};

export const WarningCircle: Story = {
  args: {
    variant: 'warning',
    shape: 'circle',
  },
  render: renderWithState,
};

export const DangerCircle: Story = {
  args: {
    variant: 'danger',
    shape: 'circle',
  },
  render: renderWithState,
};

export const DisabledCircle: Story = {
  args: {
    variant: 'default',
    shape: 'circle',
    disabled: true,
  },
  render: renderWithState,
};