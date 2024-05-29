import type { StoryObj, Meta } from '@storybook/react';
import PublishButton from './PublishButton';

const meta = {
  title: 'ui/components/atoms/PublishButton',
  component: PublishButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof PublishButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'PUBLICAR ARTICULO',
  },
};
