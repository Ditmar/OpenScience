import type { Meta, StoryObj } from '@storybook/react';
import TextCardList from './TextCardList';
import type { TextCardListContainerProps } from './types/IProps';

const meta: Meta<typeof TextCardList> = {
  title: 'ui/components/atoms/TextCardList',
  component: TextCardList,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Clase adicional para el contenedor del componente',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextCardList>;

export const Default: Story = {
  args: {
    className: '',
    items: [
      {
        id: '1',
        title: 'Opción 1',
        description: 'Descripción de la opción 1',
        selected: false,
        variant: 'default',
        categoryTag: 'Etiqueta 1',
        className: '',
        onSelect: (selected) => {
          console.log('Opción 1 seleccionada:', selected);
        },
      },
      {
        id: '2',
        title: 'Opción 2',
        description: 'Descripción de la opción 2',
        selected: true,
        variant: 'info',
        categoryTag: 'Etiqueta 2',
        className: '',
        onSelect: (selected) => {
          console.log('Opción 2 seleccionada:', selected);
        },
      },
    ],
  } satisfies TextCardListContainerProps,
};
