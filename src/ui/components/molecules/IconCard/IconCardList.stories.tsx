import React from 'react';
<<<<<<< HEAD
import type { Meta, StoryObj } from '@storybook/react'; 
import IconCardList from './IconCardList';
import { CheckCircle, Zap, Heart, Star } from 'lucide-react';
import type { IconCardItem, IconCardListProps } from './IconCardList.types'; 

const meta: Meta<typeof IconCardList> = {
  title: 'Molecules/IconCardList',
  component: IconCardList,
  argTypes: {
    onItemSelect: { action: 'onItemSelect' },
  },
};
<<<<<<< HEAD

export default meta;

const items: IconCardItem[] = [
  {
    id: 'item-1',
    title: 'Option 1',
    subtitle: 'Subtitle 1',
    description: 'Description of option 1.',
    icon: <CheckCircle className="h-6 w-6 text-green-500" aria-hidden={true} />,
  },
  {
    id: 'item-2',
    title: 'Option 2',
    subtitle: 'Subtitle 2',
    description: 'Longer description for option 2. Can take up multiple lines.',
    icon: <Zap className="h-6 w-6 text-yellow-500" aria-hidden={true} />,
  },
  {
    id: 'item-3',
    title: 'Option 3',
    description: 'Description of option 3.',
    icon: <Heart className="h-6 w-6 text-red-500" aria-hidden={true} />,
  },
  {
    id: 'item-4',
    title: 'Option 4',
    subtitle: 'Subtitle 4',
    icon: <Star className="h-6 w-6 text-gray-500" aria-hidden={true} />,
  },
];

type Story = StoryObj<typeof IconCardList>; 

export const Default: Story = {
  render: (args) => <IconCardList {...args} />,
  args: {
    items,
    title: 'List Title',
    subtitle: 'List Subtitle',
    description: 'List description of options.',
  },
};

export const WithSelectedItems: Story = {
  render: (args) => <IconCardList {...args} />,
  args: {
    items: items.map((item) =>
      item.id === 'item-2' || item.id === 'item-4'
        ? { ...item, selected: true }
        : item
    ),
    title: 'List with selected items',
    onItemSelect: (id: string | number, selected: boolean) => {
      console.log(`Item ${id} selected: ${selected}`);
    },    
  },
};

export const NoIcons: Story = {
  render: (args) => <IconCardList {...args} />,
  args: {
    items: items.map((item) => ({ ...item, icon: undefined })),
    title: 'List without icons',
  },
};

export const OneColumnLayout: Story = {
  render: (args) => <IconCardList {...args} />,
  args: {
    items,
    title: 'List in one column (forced)',
    className: 'sm:grid-cols-1',
  },
};

export const LongText: Story = {
  render: (args) => <IconCardList {...args} />,
  args: {
    items: [
      {
        id: 'long-text-item',
        title: 'Very Very Very Very Very Very Very Very Very Long Title',
        subtitle: 'Subtitle that is also quite long and should wrap',
        description:
          'An extremely long description that should demonstrate how text is handled when it exceeds the available width. This is important to ensure the design is robust and adaptable to different content.',
        icon: <CheckCircle className="h-6 w-6 text-green-500" aria-hidden={true} />,
      },
    ],
    title: 'Long Text Test',
  },
};


=======
>>>>>>> 7165a9a (refactor: translate tests to English and improve IconCardList logic)
=======
import IconCardList from './IconCardList'; // Asegúrate de que la ruta sea correcta
import type { IconCardItem } from './IconCardList.types'; // Importación de tipo

// Aquí defines el array de objetos de ejemplo para items
const items: IconCardItem[] = [
  { id: '1', title: 'Item 1', description: 'Descripción 1' },
  { id: '2', title: 'Item 2', description: 'Descripción 2' },
  { id: '3', title: 'Item 3', description: 'Descripción 3', selected: true }
];

export default {
  title: 'Components/IconCardList',
  component: IconCardList,
};

export const Default = () => (
  <IconCardList 
    items={items}  // Aquí pasas los items
    onSelect={(id, selected) => console.log(id, selected)}  // Función de ejemplo
  />
);


>>>>>>> 5e66056 (chore: update IconCardList stories)
