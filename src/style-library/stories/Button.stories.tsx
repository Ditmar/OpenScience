// src/components/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Card } from '@mui/material';
import App from 'style-library/core/MuiApp';
import { ModeSwitcher } from 'style-library/themes/ModeSwitcher';

const meta: Meta<typeof Button> = {
  title: 'MUI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <App>
        <ModeSwitcher />
        <div style={{ padding: '20px' }}>
          <Story />
        </div>
      </App>
    )

  ]
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'contained',
    color: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Outlined Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Text Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'small',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'large',
    children: 'Large Button',
  },
};