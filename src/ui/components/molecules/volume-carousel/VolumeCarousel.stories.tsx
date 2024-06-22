import type { Meta, StoryObj } from '@storybook/react';
import { Vol1, Vol2, Vol3 } from 'ui/components/atoms/label-vol/LabelVol.stories';
import {
  LabelDate1,
  LabelDate2,
  LabelDate3,
} from 'ui/components/atoms/label-date/LabelDate.stories';
import VolumeCarousel from './VolumeCarousel';

import {
  ThumbnailArgTypes,
  ThumbnailParameters,
  ThumbnailMockImages,
} from '../../atoms/thumbnail/Thumbnail.stories';

const meta: Meta<typeof VolumeCarousel> = {
  title: 'ui/components/molecules/volume-carousel',
  component: VolumeCarousel,
  argTypes: {
    ...ThumbnailArgTypes,
  },
  parameters: {
    ...ThumbnailParameters,
  },
};

export default meta;

type Story = StoryObj<typeof VolumeCarousel>;

export const Primary: Story = {
  args: {
    pathImage: String(ThumbnailMockImages.Rectangle28),
    alt: 'Rectangle28',
    volumen: Vol1.args?.volumen ?? '',
    id: Vol1.args?.id ?? 0,
    date: LabelDate1.args?.date ?? new Date(),
    overflow: LabelDate1.args?.overflow ?? false,
  },
};

export const Secondary: Story = {
  args: {
    pathImage: String(ThumbnailMockImages.Rectangle29),
    alt: 'Rectangle29',
    volumen: Vol2.args?.volumen ?? '',
    id: Vol2.args?.id ?? 0,
    date: LabelDate2.args?.date ?? new Date(),
    overflow: LabelDate2.args?.overflow ?? false,
  },
};

export const Tertiary: Story = {
  args: {
    pathImage: String(ThumbnailMockImages.Rectangle30),
    alt: 'Rectangle30',
    volumen: Vol3.args?.volumen ?? '',
    id: Vol3.args?.id ?? 0,
    date: LabelDate3.args?.date ?? new Date(),
    overflow: LabelDate3.args?.overflow ?? false,
  },
};
