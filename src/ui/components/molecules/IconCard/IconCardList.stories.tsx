import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import IconCardList from './IconCardList'; 
import { IconCardListProps } from './IconCardList.types';

const meta: Meta<typeof IconCardList> = {
  title: 'Molecules/IconCardList',
  component: IconCardList,
};

export default meta;

const Template: StoryFn<typeof IconCardList> = (args) => <IconCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: '1',
      title: 'Opción A',
      subtitle: 'Subtítulo A',
      description: 'Descripción larga sobre la opción A',
      selected: false,
      icon: <span>🧪</span>,
    },
    {
      id: '2',
      title: 'Opción B',
      subtitle: 'Subtítulo B',
      description: 'Más detalles de la opción B',
      selected: true,
      icon: <span>📚</span>,
    },
  ],
  onSelect: (id: string, selected: boolean) =>
    console.log(`Seleccionado ${id}: ${selected}`),
};
