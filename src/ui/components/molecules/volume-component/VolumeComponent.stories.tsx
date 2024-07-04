import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import VolumeComponent from './VolumeComponent';
import LabelDate from '../../atoms/label-date/LabelDate';
import LabelVol from '../../atoms/label-vol/LabelVol';

const meta: Meta<typeof VolumeComponent> = {
  title: 'ui/components/molecules/volume-component',
  component: VolumeComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'solid-line', 'points', 'main'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    article:
      'CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION',
    date: new Date(2023, 3, 16),
    children: (
      <>
        <div className="header">
          <LabelDate date={new Date(2023, 3, 16)} />
          <LabelVol volumen="Vol. 2" id={1} />
        </div>
        <div className="body">
          <p>Este es el contenido del componente de volumen.</p>
        </div>
        <div className="footer">
          <button>Acción 1</button>
          <button>Acción 2</button>
        </div>
      </>
    ),
  },
};
