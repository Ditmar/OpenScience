import type { StoryObj, Meta } from '@storybook/react';
import Share from './Share';
import '../../../../globals/_variables.scss';
import share from '../../../../assets/icons/share.svg?raw';

const meta: Meta<typeof Share> = {
  title: 'ui/components/atoms/label-share',
  component: Share,
  argTypes: {
    text: { control: 'text' },
    colorVariant: { control: { type: 'select', options: ['primary', 'main'] } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Compatir',
    icon: share,
  },
};

export const Primary: Story = {
  args: {
    colorVariant: 'main',
    icon: share,
  },
};
