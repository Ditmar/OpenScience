import type { Meta, StoryObj } from '@storybook/react';
import { UrlInput } from './UrlInput';

const meta: Meta<typeof UrlInput> = {
  title: 'Components/Organisms/UrlInput',
  component: UrlInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The URL value.',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when the URL value changes.',
    },
    variant: {
      control: 'select',
      options: ['default', 'focus', 'error', 'disabled'],
      description: 'The variant of the URL input.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the URL input.',
    },
    radius: {
      control: 'select',
      options: ['none', 'small', 'full'],
      description: 'The border radius of the URL input.',
    },
    label: {
      control: 'text',
      description: 'The label for the URL input.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the URL input.',
    },
    hintText: {
      control: 'text',
      description: 'Hint text displayed below the URL input.',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button.',
    },
    onClose: {
      action: 'closed',
      description: 'Function called when the close button is clicked.',
    },
    onCopy: {
      action: 'copied',
      description: 'Function called when the copy action is triggered.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof UrlInput>;

export const Default: Story = {
  args: {
    value: 'https://example.com',
    onChange: (value: string) => {
      // eslint-disable-next-line no-console
      console.log('Changed:', value);
    },
    variant: 'default',
    size: 'medium',
    radius: 'small',
    label: 'Website Address',
    placeholder: 'example.com',
    hintText: 'Enter a valid URL',
    showCloseButton: true,
    onClose: () => {},
  },
};

export const Focused: Story = {
  args: {
    ...Default.args,
    variant: 'focus',
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    variant: 'error',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    variant: 'disabled',
  },
};
