import type { StoryObj, Meta } from '@storybook/react';
import Closebutton from './Closebutton';
import downloads from '../../../../assets/icons/downloads.svg?raw';
import close from '../../../../assets/icons/close.svg?raw';

const meta = {
  title: 'ui/components/atoms/Closebutton',
  component: Closebutton,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof Closebutton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: close,
  },
};
export const Secondary: Story = {
  args: {
    icon: downloads,
  },
};
