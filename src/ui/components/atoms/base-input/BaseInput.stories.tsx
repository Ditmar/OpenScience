import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './BaseInput';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Atoms/BaseInput',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'Type of the input field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Function to call when the input value changes',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the input field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Indicates if the input field is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconName: {
      control: 'text',
      description: 'Name of the icon to display inside the input field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    sx: {
      control: 'object',
      description: 'Custom styles for the input field',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A basic input component that can be used for various form fields.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    iconName: 'fi-sr-globe',
    type: 'text',
    placeholder: 'Enter text here',
  },
};
