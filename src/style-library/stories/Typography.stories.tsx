// src/components/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@mui/material';
import App from 'style-library/core/ThemeProvider';
import { ModeSwitcher } from '../core/ThemeSwitcher';

const meta: Meta<typeof Typography> = {
    title: 'MUI/Typography',
    component: Typography,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['h1', 'h2', 'h3', 'body1', 'body2'],
        }
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
type Story = StoryObj<typeof Typography>;


export const Default: Story = {
    args: {
        variant: 'h1',
        children: 'This is a heading 1!',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'h2',
        children: 'This is a heading 2!',
    },
}

export const Standard: Story = {
    args: {
        variant: 'h3',
        children: 'This is a heading 3!',
    },
}

export const Body1: Story = {
    args: {
        variant: 'body1',
        children: 'This is body text 1!',
    },
}

export const Body2: Story = {
    args: {
        variant: 'body2',
        children: 'This is body text 2!',
    },
}

export const CustomSize: Story = {
    args: {
        variant: 'h1',
        children: 'This is a custom size heading!',
        style: { fontSize: '48px' },
    },
}
