import type { StoryObj, Meta } from '@storybook/react';
import IconButton from './IconButton';
import Whatsapp from '../../../../assets/icons/whatsapp.svg?raw';
import Facebook from '../../../../assets/icons/facebook1.svg?raw';
import Telegram from '../../../../assets/icons/telegram.svg?raw';

const meta = {
  title: 'ui/components/atoms/icon-button',
  component: IconButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconWhatsapp: Story = {
  args: {
    children: 'whatsapp',
    icon: Whatsapp,
  },
};

export const IconTelegram: Story = {
  args: {
    children: 'telegram',
    icon: Telegram,
  },
};
export const IconFacebook: Story = {
  args: {
    children: 'facebook',
    icon: Facebook,
  },
};
