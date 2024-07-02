import type { StoryObj, Meta } from '@storybook/react';
import HomePage from './HomePage';

const meta: Meta<typeof HomePage> = {
  title: 'ui/components/organisms/homepage',
  component: HomePage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
