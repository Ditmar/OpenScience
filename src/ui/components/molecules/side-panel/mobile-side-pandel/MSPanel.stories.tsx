import type { StoryObj, Meta } from '@storybook/react';
import MSPanel from './MSPanel';

const meta: Meta<typeof MSPanel> = {
  title: 'ui/components/molecules/side-panel/Mobile-side-panel',
  component: MSPanel,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    variant: 'main',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};
