import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import VolumeList from './VolumeList';
import type { VolumeItem } from './types/IProps';

const MOCKED_VOLUMES: VolumeItem[] = [
  {
    uuid: '1',
    pathImage: '/src/ui/components/atoms/thumbnail/__mock__/imgs/Rectangle27.png',
    alt: 'Ilustración digital de un árbol tecnológico.',
    date: new Date('2023-04-15T00:00:00'),
    volumen: 'Vol.',
    id: 1,
  },
  {
    uuid: '2',
    pathImage: '/src/ui/components/atoms/thumbnail/__mock__/imgs/Rectangle28.png',
    alt: 'Hombre analizando datos en una interfaz digital.',
    date: new Date('2023-04-15T00:00:00'),
    volumen: 'Vol.',
    id: 1,
  },
  {
    uuid: '3',
    pathImage: '/src/ui/components/atoms/thumbnail/__mock__/imgs/Rectangle29.png',
    alt: 'Una lupa sobre un globo terráqueo digital.',
    date: new Date('2023-04-15T00:00:00'),
    volumen: 'Vol.',
    id: 1,
  },
  {
    uuid: '4',
    pathImage: '/src/ui/components/atoms/thumbnail/__mock__/imgs/Rectangle30.png',
    alt: 'Mujer interactuando con una pantalla holográfica.',
    date: new Date('2023-04-15T00:00:00'),
    volumen: 'Vol.',
    id: 1,
  },
  {
    uuid: '5',
    pathImage: '/src/ui/components/atoms/thumbnail/__mock__/imgs/Rectangle31.png',
    alt: 'Man working on a computer screen with code.',
    date: new Date('2023-04-15T00:00:00'),
    volumen: 'Vol.',
    id: 1,
  },
  {
    uuid: '6',
    pathImage: '/src/ui/components/atoms/thumbnail/__mock__/imgs/Rectangle32.png',
    alt: 'Silhouette of a head with technology overlay.',
    date: new Date('2023-04-15T00:00:00'),
    volumen: 'Vol.',
    id: 1,
  },
  {
    uuid: '7',
    pathImage: '/src/ui/components/atoms/thumbnail/__mock__/imgs/Rectangle27.png',
    alt: 'Ilustración digital de un árbol tecnológico (duplicado).',
    date: new Date('2023-04-15T00:00:00'),
    volumen: 'Vol.',
    id: 1,
  },
  {
    uuid: '8',
    pathImage: '/src/ui/components/atoms/thumbnail/__mock__/imgs/Rectangle28.png',
    alt: 'Hombre analizando datos en una interfaz digital (duplicado).',
    date: new Date('2023-04-15T00:00:00'),
    volumen: 'Vol.',
    id: 1,
  },
  {
    uuid: '9',
    pathImage: '/src/ui/components/atoms/thumbnail/__mock__/imgs/Rectangle29.png',
    alt: 'Una lupa sobre un globo terráqueo digital (duplicado).',
    date: new Date('2023-04-15T00:00:00'),
    volumen: 'Vol.',
    id: 1,
  },
];

const meta: Meta<typeof VolumeList> = {
  title: 'ui/components/organisms/VolumeList',
  component: VolumeList,
  argTypes: {
    title: { control: 'text' },
    volumes: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#F0F0F0', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'VOLÚMENES',
    volumes: MOCKED_VOLUMES,
  },
};
