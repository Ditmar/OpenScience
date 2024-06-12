import type { StoryObj, Meta } from '@storybook/react';
import CloseDownloadButton from './CloseDownloadButton';
import close from '../../../../assets/icons/close.svg?raw';
import downloads from '../../../../assets/icons/downloads.svg?raw';
import close_simple from '../../../../assets/icons/close_simple.svg?raw';

const meta = {
  title: 'ui/components/atoms/CloseDownloadButton',
  component: CloseDownloadButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof CloseDownloadButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CloseButton: Story = {
  args: {
    children: 'close',
    icon: close,
  },
};

export const CloseSimpleButton: Story = {
  args: {
    children: 'close_simple',
    icon: close_simple,
  },
};

export const DownloadButton: Story = {
  args: {
    children: 'downloads',
    icon: downloads,
  },
};
