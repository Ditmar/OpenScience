// src/components/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@mui/material';
import App from 'style-library/core/MuiApp';

const meta: Meta<typeof Avatar> = {
  title: 'MUI/Avatar',
  component: Avatar,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['circle', 'rounded', 'square'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'inherit', 'primary', 'secondary'],
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
        <App>
            <div style={{ padding: '20px' }}>
                <Story />
            </div>
        </App>
    )

  ]
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        variant: 'circular',
        color: 'default',
        children: 'A',
    },
}

export const Rounded: Story = {
    args: {
        variant: 'rounded',
        color: 'primary',
        children: 'B',
    },
}

export const Square: Story = {
    args: {
        variant: 'square',
        color: 'secondary',
        children: 'C',
    },
}
export const CustomSize: Story = {
    args: {
        variant: 'circular',
        color: 'default',
        children: 'D',
        sx: { width: 56, height: 56 },
    },
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates a custom-sized Avatar component.',
            },
        },
    },
}
export const WithImage: Story = {
    args: {
        variant: 'circular',
        color: 'default',
        src: 'https://via.placeholder.com/150',
        alt: 'Avatar with image',
    },
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates an Avatar component with an image.',
            },
        },
    },
}