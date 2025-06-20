import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import ThemeWrapper from '../../../../style-library/core/ThemeProvider';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Atoms/Label',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content of the label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Label Text' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Indicates if the label is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    htmlFor: {
      control: 'text',
      description: 'The ID of the form element that the label is associated with',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    iconName: {
      control: 'text',
      description: 'Name of the icon to display next to the label text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fi-sr-globe' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the icon displayed next to the label text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A simple label component that can be used to label form elements.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label Text',
    required: false,
    htmlFor: '',
    sx: {
      color: '#000',
    },
    iconName: 'fi-sr-globe',
  },
};

export const Required: Story = {
  args: {
    children: 'Required Label',
    required: true,
    htmlFor: 'input-id',
    sx: {
      color: '#180e33',
    },
  },
};

export const WithHtmlFor: Story = {
  args: {
    required: false,
    htmlFor: 'input-id',
    iconName: 'fi-sr-globe',
    sx: {
      color: '#002a5c',
    },
  },
};

export const CustomStyles: Story = {
  args: {
    children: 'Custom Styled Label',
    required: false,
    htmlFor: '',
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const LongText: Story = {
  args: {
    children:
      'This is a label with a longer text to demonstrate how it wraps within the container.',
    required: false,
    htmlFor: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'This label demonstrates how long text is handled.',
      },
    },
  },
};

export const WithCustomColor: Story = {
  args: {
    children: 'Label with Custom Color',
    required: false,
    htmlFor: '',
  },
  decorators: [
    (Story) => (
      <div style={{ color: 'blue', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};