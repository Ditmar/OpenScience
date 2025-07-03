import type { StoryObj, Meta } from '@storybook/react';
import { HintText } from './HintText';

const meta: Meta<typeof HintText> = {
  title: 'ui/components/atoms/HintText',
  component: HintText,
  argTypes: {
    text: { control: 'text' },
    error: { control: 'boolean' },
    id: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof HintText>;

export const Default: Story = {
  args: {
    text: 'This is a hint text',
    error: false,
    id: 'hint-text-default',
  },
};

export const Error: Story = {
  args: {
    text: 'This is an error hint',
    error: true,
    id: 'hint-text-error',
  },
};
