import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'ui/components/molecules/Footer',
  component: Footer,
  args: {
    locationText: 'UBICANOS',
    followUsText: 'SIGUENOS EN',
    titleText: 'FOOTER',
    size: 'medium',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
