import type { Meta, StoryObj } from '@storybook/react';
import { Vol1, Vol2, Vol3 } from 'ui/components/atoms/label-vol/LabelVol.stories';
import {
  LabelDate1,
  LabelDate2,
  LabelDate3,
} from 'ui/components/atoms/label-date/LabelDate.stories';
import Volume from './Volume';

import { Thumbnail28, Thumbnail29, Thumbnail30 } from '../../atoms/thumbnail/Thumbnail.stories';

const meta: Meta<typeof Volume> = {
  title: 'ui/components/molecules/volume-carousel',
  component: Volume,
};

export default meta;

type Story = StoryObj<typeof Volume>;

export const Primary: Story = {
  args: {
    // Checks that the element exists (?) and then provides a default value..volumen ?? '[default-value]'
    pathImage: Thumbnail28.args?.pathImage ?? '',
    alt: Thumbnail28.args?.alt ?? '',
    volumen: Vol1.args?.volumen ?? '',
    id: Vol1.args?.id ?? 0,
    date: LabelDate1.args?.date ?? new Date(),
    overflow: LabelDate1.args?.overflow ?? false,
  },
};

export const Secondary: Story = {
  args: {
    pathImage: Thumbnail29.args?.pathImage ?? '',
    alt: Thumbnail29.args?.alt ?? '',
    volumen: Vol2.args?.volumen ?? '',
    id: Vol2.args?.id ?? 0,
    date: LabelDate2.args?.date ?? new Date(),
    overflow: LabelDate2.args?.overflow ?? false,
  },
};

export const Tertiary: Story = {
  args: {
    pathImage: Thumbnail30.args?.pathImage ?? '',
    alt: Thumbnail30.args?.alt ?? '',
    volumen: Vol3.args?.volumen ?? '',
    id: Vol3.args?.id ?? 0,
    date: LabelDate3.args?.date ?? new Date(),
    overflow: LabelDate3.args?.overflow ?? false,
  },
};
