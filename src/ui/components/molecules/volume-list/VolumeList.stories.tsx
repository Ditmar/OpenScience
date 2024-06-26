import type { StoryObj, Meta } from '@storybook/react';
import VolumeList from './VolumeList';

const meta: Meta<typeof VolumeList> = {
  title: 'ui/components/molecules/volume-list',
  component: VolumeList,
};

export default meta;

type Story = StoryObj<typeof VolumeList>;

export const Default: Story = {};
