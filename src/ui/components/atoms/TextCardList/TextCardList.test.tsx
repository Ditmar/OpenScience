import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import TextCardList from './TextCardList';
import styles from './TextCardList.module.scss';

describe('TextCardList Component', () => {
  test('renderiza correctamente con los props mínimos', () => {
    const { getByText } = render(<TextCardList title="Prueba" />);
    expect(getByText('Prueba')).toBeTruthy();
  });

  test('muestra la etiqueta de categoría si se proporciona', () => {
    const { getByText } = render(<TextCardList title="Etiqueta" categoryTag="Tag" />);
    expect(getByText('Tag')).toBeTruthy();
  });

  test('muestra la descripción si se proporciona', () => {
    const { getByText } = render(
      <TextCardList title="Descripción" description="Este es un texto" />,
    );
    expect(getByText('Este es un texto')).toBeTruthy();
  });

  test('agrega clase "selected" si selected es true', () => {
    const { container } = render(<TextCardList title="Seleccionado" selected />);
    expect(container.firstChild).toHaveClass(styles['text-card--selected']); // ✅ Acceso correcto
  });

  test('llama a onSelect con true cuando se marca el checkbox', () => {
    const onSelect = vi.fn();
    let selected = false;

    const { getByRole, rerender } = render(
      <TextCardList
        title="Checkbox"
        selected={selected}
        onSelect={(value) => {
          selected = value;
          onSelect(value);
          rerender(<TextCardList title="Checkbox" selected={selected} onSelect={onSelect} />);
        }}
      />,
    );

    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(onSelect).toHaveBeenCalled();
    expect(onSelect).toHaveBeenCalledWith(true);
  });

  test('llama a onSelect con false cuando se desmarca el checkbox', () => {
    const onSelect = vi.fn();
    let selected = true;

    const { getByRole, rerender } = render(
      <TextCardList
        title="Checkbox"
        selected={selected}
        onSelect={(value) => {
          selected = value;
          onSelect(value);
          rerender(<TextCardList title="Checkbox" selected={selected} onSelect={onSelect} />);
        }}
      />,
    );

    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(onSelect).toHaveBeenCalled();
    expect(onSelect).toHaveBeenCalledWith(false);
  });
});
