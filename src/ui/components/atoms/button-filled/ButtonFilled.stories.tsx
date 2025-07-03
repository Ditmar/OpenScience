import type { Meta, StoryObj } from '@storybook/react';
import { ButtonFilled } from './ButtonFilled';
import type { IProps } from './types/IProps';

const commonProps: Partial<IProps> = {
  text: 'botón GOD',
};

const meta = {
  title: 'ui/components/atoms/button-filled',
  component: ButtonFilled,
  args: {
    ...commonProps,
  },
} as Meta<typeof ButtonFilled>;

export default meta;

type Story = StoryObj<typeof ButtonFilled>;

export const Default: Story = {
  args: {
    ...commonProps,
  },
};