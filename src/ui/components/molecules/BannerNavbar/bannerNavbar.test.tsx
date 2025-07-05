import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import BannerNavbar from './bannerNavbar';

describe('BannerNavbar', () => {
  it('calls onSearchSubmit when the form is submitted with the search value', () => {
    const onSearchSubmitMock = vi.fn();
    const searchValue = 'prueba';

    render(
      <BannerNavbar onSearchSubmit={onSearchSubmitMock} logo="logo.png" textSearch="Buscar" />,
    );

    const openSearchButton = screen.getByRole('button', { name: /abrir búsqueda/i });
    fireEvent.click(openSearchButton);

    const form = screen.getByTestId('search-form');
    const searchInput = screen.getByPlaceholderText('Buscar...');

    fireEvent.change(searchInput, { target: { value: searchValue } });
    fireEvent.submit(form);

    expect(onSearchSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSearchSubmitMock).toHaveBeenCalledWith(searchValue);
  });
});
