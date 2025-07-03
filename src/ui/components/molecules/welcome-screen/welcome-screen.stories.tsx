import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import WelcomeScreen from './welcome-screen';

const meta: Meta<typeof WelcomeScreen> = {
  title: 'ui/components/molecules/welcome screen',
  component: WelcomeScreen,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof WelcomeScreen>;

export const Default: Story = {
  render: () => <WelcomeScreen />,
};
