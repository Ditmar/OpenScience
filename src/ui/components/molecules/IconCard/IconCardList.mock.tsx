// src/ui/components/molecules/IconCard/IconCardList.mock.ts
import type { IconCardListProps } from './IconCardList.types';

export const mockIconCardListProps: IconCardListProps = {
  items: [
    {
      id: '1',
      title: 'Opción A',
      subtitle: 'Sub A',
      description: 'Desc A',
      selected: false,
      icon: <span>🧪</span>,
    },
    {
      id: '2',
      title: 'Opción B',
      subtitle: 'Sub B',
      description: 'Desc B',
      selected: true,
      icon: <span>📚</span>,
    },
  ],
  onSelect: (id: string, selected: boolean) => {
    console.log(`Seleccionado ${id}: ${selected}`);
  },
};
