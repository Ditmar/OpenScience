import type { StoryObj, Meta } from '@storybook/react';
import Facebook from '../../../../assets/icons/facebook1.svg?raw';
import Telegram from '../../../../assets/icons/telegram.svg?raw';
import Whatsapp from '../../../../assets/icons/whatsappp.svg?raw';
import Share from './Share';

const meta = {
  title: 'ui/components/atoms/share-button',
  component: Share,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof Share>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: Whatsapp,
    icon1: Telegram,
    icon2: Facebook,
  },
};
