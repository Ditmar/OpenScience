import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LabelDate from 'ui/components/atoms/label-date/LabelDate';
import Volume from 'ui/components/atoms/label-vol/LabelVol';
import Thumbnail from 'ui/components/atoms/thumbnail/Thumbnail';
import Rectangle27 from 'ui/components/atoms/thumbnail/__mock__/imgs/Rectangle27.png';
import Rectangle30 from 'ui/components/atoms/thumbnail/__mock__/imgs/Rectangle30.png';
import Rectangle29 from 'ui/components/atoms/thumbnail/__mock__/imgs/Rectangle29.png';
import VolumeList from './ListVolumen';
import './ListVolumen.scss';

const meta: Meta<typeof VolumeList> = {
  title: 'ui/components/molecules/ListVolumen',
  component: VolumeList,
};

export default meta;

type Story = StoryObj<typeof VolumeList>;

export const Primary: Story = {
  args: {
    children: (
      <div className="volume__container">
        <div className="volume__item">
          <Thumbnail pathImage={String(Rectangle27)} alt="Rectangle27" />
          <LabelDate date={new Date(2023, 3, 15)} />
          <Volume volumen="Vol." id={1} />
        </div>
      </div>
    ),
  },
};

export const Secondary: Story = {
  args: {
    children: (
      <div className="volume__container">
        <div className="volume__item">
          <Thumbnail pathImage={String(Rectangle30)} alt="Rectangle30" />
          <LabelDate date={new Date(2010, 4, 20)} />
          <Volume volumen="Part." id={2} />
        </div>
      </div>
    ),
  },
};

export const Tertiary: Story = {
  args: {
    children: (
      <div className="volume__container">
        <div className="volume__item">
          <Thumbnail pathImage={String(Rectangle29)} alt="Rectangle29" />
          <LabelDate date={new Date(2002, 5, 1)} />
          <Volume volumen="Tome." id={3} />
        </div>
      </div>
    ),
  },
};
