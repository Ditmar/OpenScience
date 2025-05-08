// src/components/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import DashboardLayoutBasic from '../core/DashboardLayout'
import App from 'style-library/core/MuiApp';

const meta: Meta<typeof DashboardLayoutBasic> = {
    title: 'MUI/DashboardLayout',
    component: DashboardLayoutBasic,

    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <App>
                <Story />
            </App>
        )

    ]
};

export default meta;
type Story = StoryObj<typeof DashboardLayoutBasic>;

export const Basic: Story = {
    args: {
        // Add any props you want to pass to the component here
    },
};

