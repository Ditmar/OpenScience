import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import TextCardList from './TextCardList';
import type { TextCardListProps } from './types/IProps';

describe('TextCardList', () => {
  const mockOnSelect = vi.fn();

  const mockItems: Pick<
    TextCardListProps,
    | 'id'
    | 'title'
    | 'description'
    | 'selected'
    | 'variant'
    | 'categoryTag'
    | 'className'
    | 'onSelect'
  >[] = [
    {
      id: '1',
      title: 'Item 1',
      description: 'Desc 1',
      selected: false,
      variant: 'info',
      categoryTag: 'Tag 1',
      className: '',
      onSelect: mockOnSelect, // usa la misma función
    },
  ];

  it('renders props correctly', () => {
    render(<TextCardList items={mockItems} className="extra-class" />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Desc 1')).toBeInTheDocument();
    expect(screen.getByText('Tag 1')).toBeInTheDocument();
  });

  it('calls onSelect on click', () => {
    render(<TextCardList items={mockItems} />);
    const card = screen.getByRole('button');
    fireEvent.click(card);
    expect(mockOnSelect).toHaveBeenCalledWith(true);
  });

  it('calls onSelect on Enter key press', () => {
    render(<TextCardList items={mockItems} />);
    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(mockOnSelect).toHaveBeenCalledWith(true);
  });

  it('calls onSelect on Space key press', () => {
    render(<TextCardList items={mockItems} />);
    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: ' ' });
    expect(mockOnSelect).toHaveBeenCalledWith(true);
  });
});
