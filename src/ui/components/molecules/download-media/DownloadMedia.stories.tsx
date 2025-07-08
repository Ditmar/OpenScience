import type { Meta, StoryObj } from '@storybook/react';
import DownloadMedia from './DownloadMedia';
import type { DownloadMediaProps } from './types/IProps';

const meta: Meta<typeof DownloadMedia> = {
  title: 'ui/components/molecules/download-media',
  component: DownloadMedia,
  parameters: {
    docs: {
      description: {
        component: 'Component for previewing and downloading an image, with action controls.',
      },
    },
  },
  argTypes: {
    imageSrc: {
      control: 'text',
      description: 'URL of the image to display as background',
    },
    onSlidePrev: {
      action: 'close viewer',
      description: 'Function triggered when clicking the back icon',
    },
    onDownload: {
      action: 'download image',
      description: 'Function triggered when clicking the download icon',
    },
  },
};

export default meta;
type Story = StoryObj<DownloadMediaProps>;

export const Default: Story = {
  name: 'Image viewer with controls',
  args: {
    imageSrc: 'https://picsum.photos/800/600',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story:
          'Dark background viewer component with a centered image and two icons: back and download.',
      },
    },
  },
};
