import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IconCardList from './IconCardList';
import type { IconCardItem } from './IconCardList.types'; // Import IconCardItem as type

const items: IconCardItem[] = [
    { id: 'item-1', title: 'Option 1' },
    { id: 'item-2', title: 'Option 2', subtitle: 'Subtitle 2' },
    { id: 'item-3', title: 'Option 3', description: 'Description 3' },
    { id: 'item-4', title: 'Option 4', selected: true },
];

describe('IconCardList', () => {
    it('should render the title, subtitle, and description', () => {
        render(
            <IconCardList
                title="List Title"
                subtitle="List Subtitle"
                description="List Description"
                items={items}
            />
        );

        expect(screen.getByText('List Title')).toBeInTheDocument();
        expect(screen.getByText('List Subtitle')).toBeInTheDocument();
        expect(screen.getByText('List Description')).toBeInTheDocument();
    });

    it('should render the items', () => {
        render(<IconCardList items={items} />);
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.getByText('Option 3')).toBeInTheDocument();
        expect(screen.getByText('Option 4')).toBeInTheDocument();
    });

    it('should render the subtitle and description for each item', () => {
        render(<IconCardList items={items} />);
        expect(screen.getByText('Subtitle 2')).toBeInTheDocument();
        expect(screen.getByText('Description 3')).toBeInTheDocument();
    });

    it('should render the item as selected if selected prop is true', () => {
        render(<IconCardList items={items} />);
        const option4Card = screen.getByText('Option 4').closest('div');
        expect(option4Card).toHaveClass('bg-blue-50/50');
    });

    it('should call onItemSelect when an item is clicked', () => {
        const onItemSelect = jest.fn();
        render(<IconCardList items={items} onItemSelect={onItemSelect} />);
        const option1Card = screen.getByText('Option 1').closest('div');
        fireEvent.click(option1Card!);
        expect(onItemSelect).toHaveBeenCalledTimes(1);
        expect(onItemSelect).toHaveBeenCalledWith('item-1', true);
    });

    it('should update selection when an item is clicked multiple times', async () => {
        const onItemSelect = jest.fn();
        render(<IconCardList items={items} onItemSelect={onItemSelect} />);
        const option1Card = screen.getByText('Option 1').closest('div');

        fireEvent.click(option1Card!);
        fireEvent.click(option1Card!);
        fireEvent.click(option1Card!);

        expect(onItemSelect).toHaveBeenCalledTimes(3);

        expect(onItemSelect).toHaveBeenNthCalledWith(1, 'item-1', true);
        expect(onItemSelect).toHaveBeenNthCalledWith(2, 'item-1', false);
        expect(onItemSelect).toHaveBeenNthCalledWith(3, 'item-1', true);
    });
});





