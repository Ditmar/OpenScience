import type { StoryObj, Meta } from '@storybook/react';
import MultiFunctionButton from './MultiFunctionButton';
import Pdf from '../../../../assets/icons/pdf.svg?raw';
import Media from '../../../../assets/icons/media.svg?raw';
import Share from '../../../../assets/icons/share.svg?raw';
import Reference from '../../../../assets/icons/reference.svg?raw';

const meta = {
  title: 'ui/components/atoms/multi-function-button',
  component: MultiFunctionButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof MultiFunctionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PdfButton: Story = {
  args: {
    children: 'Pdf',
    icon: Pdf,
  },
};

export const ShareButton: Story = {
  args: {
    children: 'Share',
    icon: Share,
  },
};

export const MediaButton: Story = {
  args: {
    children: 'Media',
    icon: Media,
  },
};

export const ReferencesButton: Story = {
  args: {
    children: 'References',
    icon: Reference,
  },
};
