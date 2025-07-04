import type { Meta, StoryObj } from '@storybook/react';
import { InputLabel } from './InputLabel';
import type { IProps } from './types/IProps';

const commonProps: Partial<IProps> = {
  label: 'Input Label',
};

const meta = {
  title: 'ui/components/molecules/input-label',
  component: InputLabel,
  args: {
    ...commonProps,
  },
} as Meta<typeof InputLabel>;

export default meta;

type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
  args: {
    ...commonProps,
  },
};

export const WithIcons: Story = {
  args: {
    ...commonProps,
    leftIcon: 'LanguageSharpIcon',
    rightIcon: 'CancelOutlinedIcon',
  },
};

export const Error: Story = {
  args: {
    ...commonProps,
    leftIcon: 'LanguageSharpIcon',
    rightIcon: 'CancelOutlinedIcon',
    labelError: true,
    leftIconError: true,
  },
};

export const Disabled: Story = {
  args: {
    ...commonProps,
    leftIcon: 'LanguageSharpIcon',
    rightIcon: 'CancelOutlinedIcon',
    labelDisabled: true,
    rightIconDisabled: true,
  },
};

export const Helper: Story = {
  args: {
    ...commonProps,
    leftIcon: 'LanguageSharpIcon',
    rightIcon: 'CancelOutlinedIcon',
    labelHelper: true,
  },
};
