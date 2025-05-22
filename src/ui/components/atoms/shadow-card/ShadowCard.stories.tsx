import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ShadowsDemo from '../../../../shadows/ShadowsDemo';

const meta: Meta = {
  title: 'Design System/Shadows',
  component: ShadowsDemo,
};

export default meta;
type Story = StoryObj<typeof ShadowsDemo>;

export const AllShadows: Story = {
  render: () => <ShadowsDemo />,
};
