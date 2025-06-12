import type { Meta, StoryObj } from '@storybook/react';
import { InputLabel } from './InputLabel';

const meta: Meta<typeof InputLabel> = {
  title: 'ui/components/atoms/InputLabel',
  component: InputLabel,
  argTypes: {
    htmlFor: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
  args: {
    children: 'Default Label',
  },
};

export const WithHtmlFor: Story = {
  args: {
    children: 'Label for input',
    htmlFor: 'username-input',
  },
};
