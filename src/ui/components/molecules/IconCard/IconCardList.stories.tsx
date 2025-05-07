import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import IconCardList from './IconCardList';
import type { IconCardItem } from './IconCardList.types';

const items: IconCardItem[] = [
  {
    id: '1',
    title: 'Opción 1',
    subtitle: 'Subtítulo 1',
    description: 'Descripción de la opción 1',
    selected: false,
  },
  {
    id: '2',
    title: 'Opción 2',
    subtitle: 'Subtítulo 2',
    description: 'Descripción de la opción 2',
    selected: true,
  },
];

const meta: Meta<typeof IconCardList> = {
  title: 'Components/IconCardList',
  component: IconCardList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IconCardList>;

export const Default: Story = {
  args: {
    items,
    onSelect: (id, selected) => {
      console.log(`Item con id ${id} fue ${selected ? 'seleccionado' : 'deseleccionado'}`);
    },
  },
};

