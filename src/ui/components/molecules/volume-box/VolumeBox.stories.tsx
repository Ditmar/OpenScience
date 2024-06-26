import type { StoryObj, Meta } from '@storybook/react';
import VolumeBox from './VolumeBox';
import LabelDate from '../../atoms/label-date/LabelDate';
import LabelVol from '../../atoms/label-vol/LabelVol';

const meta: Meta<typeof VolumeBox> = {
  title: 'ui/components/molecules/volume-box',
  component: VolumeBox,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <VolumeBox className="custom-label-date-color">
        <LabelDate date={new Date(2023, 3, 16)} />
        <span className="separator">│</span>
        <LabelVol volumen="Vol." id={1} />
        <span className="separator">│</span>
        <LabelVol volumen="Nu." id={1} />
      </VolumeBox>
    ),
  },
};

export const LargeVolume: Story = {
  args: {
    children: (
      <VolumeBox className="custom-label-date-color">
        <LabelDate date={new Date(2023, 3, 16)} />
        <span className="separator">│</span>
        <LabelVol volumen="Tome." id={2} />
        <span className="separator">│</span>
        <LabelVol volumen="Nu." id={2} />
      </VolumeBox>
    ),
  },
};

export const RecentDate: Story = {
  args: {
    children: (
      <VolumeBox className="custom-label-date-color">
        <LabelDate date={new Date(2023, 11, 19)} />
        <span className="separator">│</span>
        <LabelVol volumen="Part." id={3} />
        <span className="separator">│</span>
        <LabelVol volumen="Nu." id={3} />
      </VolumeBox>
    ),
  },
};
