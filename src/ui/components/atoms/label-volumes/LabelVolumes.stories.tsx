import type { StoryObj, Meta } from '@storybook/react';
import '../../../../globals/_variables.scss';
import LabelVolumes from './LabelVolumes';

const meta: Meta<typeof LabelVolumes> = {
  title: 'ui/components/atoms/lavel-volumes',
  component: LabelVolumes,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'VOLÚMENES',
    color: 'primary',
  },
};

export const OptionSecond: Story = {
  args: {
    text: 'VOLÚMENES',
    color: 'secondary',
  },
};

export const OptionTertiary: Story = {
  args: {
    text: 'VOLÚMENES',
    color: 'tertiary',
  },
};
