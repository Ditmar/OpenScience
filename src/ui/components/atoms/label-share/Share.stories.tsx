import type { StoryObj, Meta } from '@storybook/react';
import Share from './Share';
import '../../../../globals/_variables.scss';
import share from '../../../../assets/icons/share.svg?raw';
import media from '../../../../assets/icons/media.svg?raw';

const meta: Meta<typeof Share> = {
  title: 'ui/components/atoms/label-share',
  component: Share,
  argTypes: {
    text: { control: 'text' },    
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Compartir: Story = {
  args: {
    children: 'Compartir',
    text: 'Compartir',
    icon: share,
  },
};

export const Media: Story = {
  args: {
    children: 'Media',
    text: 'Media',
    icon: media,
  },
};
