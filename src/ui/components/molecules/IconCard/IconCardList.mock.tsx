import { vi } from 'vitest';
import type { IconCardListProps } from './IconCardList.types';

export const mockIconCardListProps: IconCardListProps = {
  items: [
    {
      id: '1',
      title: 'Option A',
      subtitle: 'Sub A',
      description: 'Desc A',
      selected: false,
      icon: <span>🧪</span>,
    },
    {
      id: '2',
      title: 'Option B',
      subtitle: 'Sub B',
      description: 'Desc B',
      selected: true,
      icon: <span>📚</span>,
    },
  ],
  onSelect: vi.fn((id: string, selected: boolean) => {
    // console.log removed
  }),
};



