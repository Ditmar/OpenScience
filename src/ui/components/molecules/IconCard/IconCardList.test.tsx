import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import IconCardList from './IconCardList';
import type { IconCardItem } from './IconCardList.types';

describe('IconCardList', () => {
  const mockItems: IconCardItem[] = [
    {
      id: '1',
      title: 'Item 1',
      subtitle: 'Subtitulo 1',
      description: 'Descripción del ítem 1',
      icon: <span>🔥</span>,
      selected: false,
    },
    {
      id: '2',
      title: 'Item 2',
      selected: true,
    },
  ];

  it('debe renderizar todos los elementos de la lista', () => {
    render(<IconCardList items={mockItems} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('debe llamar a onSelect cuando se hace clic en un checkbox', () => {
    const onSelect = vi.fn();
    render(<IconCardList items={mockItems} onSelect={onSelect} />);
    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);
    expect(onSelect).toHaveBeenCalledWith('1', true);
  });
});
