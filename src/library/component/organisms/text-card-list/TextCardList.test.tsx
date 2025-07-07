import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { describe, it, expect, vi } from 'vitest';
import TextCardList from './TextCardList';
import { lightTheme } from '../../../../style-library/themes/default';
import type { TextCardListItem } from './Types/IProps';

const mockItems: TextCardListItem[] = [
  {
    id: '1',
    checkProps: { name: 'checkbox-1', value: '1' },
    badgeProps: {
      backgroundColor: 'primary',
      avatar: {},
      text: {
        content: 'Badge 1',
        color: 'paragraph_dark',
        size: 'md',
      },
      pill: {
        text: 'New',
        color: 'brand-primary',
        variant: 'filled',
        rounded: 'r_md',
      },
      rounded: 'r_md',
    },
    title: 'Card Title 1',
    description: 'Card Description 1',
  },
  {
    id: '2',
    checkProps: { name: 'checkbox-2', value: '2' },
    badgeProps: {
      backgroundColor: 'secondary',
      avatar: {},
      text: {
        content: 'Badge 2',
        color: 'paragraph_dark',
        size: 'md',
      },
      pill: {
        text: 'New',
        color: 'brand-primary',
        variant: 'filled',
        rounded: 'r_md',
      },
      rounded: 'r_md',
    },
    title: 'Card Title 2',
    description: 'Card Description 2',
  },
];

describe('TextCardList', () => {
  it('debe renderizar correctamente los items', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <TextCardList items={mockItems} />
      </ThemeProvider>,
    );

    expect(screen.getByText('Card Title 1')).toBeTruthy();
    expect(screen.getByText('Card Title 2')).toBeTruthy();
  });

  it('debe marcar un checkbox como seleccionado si está en selectedIds', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <TextCardList items={mockItems} selectedIds={['2']} />
      </ThemeProvider>,
    );

    const checkbox = container.querySelector('input[name="checkbox-2"]');

    expect(checkbox).toBeDefined();
    if (checkbox) {
      const inputElement = checkbox as HTMLInputElement;
      expect(inputElement.checked).toBe(true);
    }
  });

  it('debe ejecutar onSelect al hacer click en el checkbox', () => {
    const handleSelect = vi.fn();

    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <TextCardList items={mockItems} onSelect={handleSelect} />
      </ThemeProvider>,
    );

    const checkbox = container.querySelector('input[name="checkbox-2"]');

    expect(checkbox).toBeDefined();
    if (checkbox) {
      const inputElement = checkbox as HTMLInputElement;
      fireEvent.click(inputElement);
    }

    expect(handleSelect).toHaveBeenCalledWith('2');
  });
});
