import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Molecules/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The URL value of the input',
      defaultValue: 'example.com',
    },
    onChange: {
      action: 'changed',
      description: 'Function to call when the input value changes',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
      defaultValue: 'Enter URL',
    },
    variant: {
      control: 'select',
      options: ['default', 'focus', 'error', 'disabled'],
      description: 'Visual variant of the input',
      defaultValue: 'default',
    },
    onCopy: {
      action: 'copied',
      description: 'Function to call when the copy button is clicked',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the input',
      defaultValue: 'medium',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: 'example.com',
    placeholder: 'Enter URL',
    variant: 'default',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A URL input component that allows users to enter and copy URLs. It includes a protocol prefix and a copy button.',
      },
    },
  },
};

export const Focused: Story = {
  args: {
    value: 'example.com',
    placeholder: 'Enter URL',
    variant: 'focus',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'The input is focused, indicating active user interaction.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    value: 'example.com',
    placeholder: 'Enter URL',
    variant: 'error',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'The input is in an error state, indicating invalid input.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    value: 'example.com',
    placeholder: 'Enter URL',
    variant: 'disabled',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'The input is disabled and cannot be interacted with.',
      },
    },
  },
};
