import type { StoryObj, Meta } from '@storybook/react';
import Share from './Share';

const meta: Meta<typeof Share> = {
  title: 'ui/components/molecules/share-button',
  component: Share,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Share>;

export const Primary: Story = {};
