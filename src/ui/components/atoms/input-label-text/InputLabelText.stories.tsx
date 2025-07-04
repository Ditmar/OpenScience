import type { Meta, StoryObj } from '@storybook/react';
import { InputLabelText } from './InputLabelText';
import type { IProps } from './types/IProps';

const commonProps: Partial<IProps> = {
  label: 'Input Label',
};

const meta = {
  title: 'ui/components/atoms/input-label-text',
  component: InputLabelText,
  args: {
    ...commonProps,
  },
} as Meta<typeof InputLabelText>;

export default meta;

type Story = StoryObj<typeof InputLabelText>;

export const Default: Story = {
  args: {
    ...commonProps,
  },
};

export const Error: Story = {
  args: {
    ...commonProps,
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    ...commonProps,
    disabled: true,
  },
};

export const Helper: Story = {
  args: {
    ...commonProps,
    helper: true,
  },
};
