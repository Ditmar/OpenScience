import { render, screen } from '@testing-library/react';
import SearchMagnifyingGlass from './SearchMagnifyingGlass';

describe('SearchMagnifyingGlass Component', () => {
  test('should render MagnifyingGlass', () => {
    render(<SearchMagnifyingGlass />);
    const magnifyingGlass = screen.getByTestId('button__glass');
    expect(magnifyingGlass).toBeInTheDocument();
  });

  test('menu navbar should not be visible initially', () => {
    render(<SearchMagnifyingGlass />);
    expect(screen.queryByText('/Articulos/')).not.toBeInTheDocument();
    expect(screen.queryByText('/Inicio/')).not.toBeInTheDocument();
    expect(screen.queryByText('/Volumenes/')).not.toBeInTheDocument();
  });
});
