import type { StoryObj, Meta } from '@storybook/react';
import CenterVolumeBox from './CenterVolumeBox';

const meta: Meta<typeof CenterVolumeBox> = {
  title: 'ui/components/molecules/center-volume-box',
  component: CenterVolumeBox,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'ABRIL 16. 2023 | Vol.1 | Nu.1',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    text: 'ABRIL 16. 2023 | Vol.1 | Nu.1',
    color: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    text: 'ABRIL 16. 2023 | Vol.1 | Nu.1',
    color: 'tertiary',
  },
};
