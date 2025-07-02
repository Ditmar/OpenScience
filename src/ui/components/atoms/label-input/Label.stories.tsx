import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Atoms/Label',
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Website Address',
    iconName: 'fi-sr-globe',
  },
};

export const WithHtmlFor: Story = {
  args: {
    htmlFor: 'username-input',
    iconName: 'fi-sr-globe',
  },
};
