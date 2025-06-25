import type { Meta, StoryObj } from '@storybook/react';
import { ButtonUrl } from './Button-Url';

const meta: Meta<typeof ButtonUrl> = {
  component: ButtonUrl,
  title: 'Atoms/Button-Url',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button Text' },
      },
    },
    radius: {
      control: 'select',
      options: ['none', 'small', 'medium', 'full'],
      description: 'Border radius of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Indicates if the button is in a loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Indicates if the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'disabled'],
      description: 'Visual variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
  },
  parameters: {
    docs: {
      description: 'Button component for user actions',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonUrl>;

export const Default: Story = {
  args: {
    children: 'Button Text',
    radius: 'medium',
    loading: false,
    disabled: false,
  },
};

export const SmallBorderRadius: Story = {
  args: {
    children: 'Small Border Radius',
    radius: 'small',
    loading: false,
    disabled: false,
  },
};

export const LargeBorderRadius: Story = {
  args: {
    children: 'Large Border Radius',
    radius: 'full',
    loading: false,
    disabled: false,
  },
};
