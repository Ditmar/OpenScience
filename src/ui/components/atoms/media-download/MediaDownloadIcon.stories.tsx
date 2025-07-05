import type { Meta, StoryObj } from '@storybook/react';
import MediaDownloadIcon from './MediaDownloadIcon';
import type { MediaDownloadIconProps } from './types/IProps';

const meta: Meta<typeof MediaDownloadIcon> = {
  title: 'ui/components/atoms/media-download',
  component: MediaDownloadIcon,
  argTypes: {
    type: {
      control: 'radio',
      options: ['slide-left', 'download'],
      description: 'Icon type: arrow (slide-left) or download',
    },
    onClick: {
      action: 'clicked',
      description: 'Function executed when the icon is clicked',
    },
  },
};

export default meta;

type Story = StoryObj<MediaDownloadIconProps>;

export const SlideLeft: Story = {
  args: {
    type: 'slide-left',
  },
};

export const Download: Story = {
  args: {
    type: 'download',
  },
};
