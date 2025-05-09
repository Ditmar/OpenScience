// src/components/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@mui/material';
import ThemeProvider from 'style-library/core/ThemeProvider';
import { ModeSwitcher } from '../core/ThemeSwitcher';

const meta: Meta<typeof Alert> = {
    title: 'MUI/Alert',
    component: Alert,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['filled', 'outlined', 'standard'],
        },
        severity: {
            control: { type: 'select' },
            options: ['success', 'info', 'warning', 'error'],
        },
    },
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <ModeSwitcher />
                <div style={{ padding: '20px' }}>
                    <Story />
                </div>
            </ThemeProvider>
        )

    ]
};

export default meta;
type Story = StoryObj<typeof Alert>;


export const Default: Story = {
    args: {
        variant: 'filled',
        severity: 'success',
        children: 'This is a success alert!',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        severity: 'info',
        children: 'This is an info alert!',
    },
}

export const Standard: Story = {
    args: {
        variant: 'standard',
        severity: 'warning',
        children: 'This is a warning alert!',
    },
}

export const Error: Story = {
    args: {
        variant: 'filled',
        severity: 'error',
        children: 'This is an error alert!',
    },
}

export const CustomIcon: Story = {
    args: {
        variant: 'filled',
        severity: 'success',
        children: 'This is a success alert with a custom icon!',
        iconMapping: {
            success: <span>🌟</span>,
            info: <span>ℹ️</span>,
            warning: <span>⚠️</span>,
            error: <span>❌</span>,
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates a custom icon for each severity level.',
            },
        },
    },
}

export const Dismissible: Story = {
    args: {
        variant: 'filled',
        severity: 'info',
        children: 'This is a dismissible alert!',
        action: (
            <button onClick={() => alert('Alert dismissed!')}>Dismiss</button>
        ),
    },
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates a dismissible alert with an action button.',
            },
        },
    },
}

export const CustomStyles: Story = {
    args: {
        variant: 'filled',
        severity: 'success',
        children: 'This is a success alert with custom styles!',
        sx: {
            backgroundColor: 'green',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '18px',
        },
    },
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates a success alert with custom styles applied.',
            },
        },
    },
}



