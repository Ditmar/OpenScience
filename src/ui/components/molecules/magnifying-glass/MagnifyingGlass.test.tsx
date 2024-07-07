import { render, screen } from '@testing-library/react';
import magnifyingglass from '../../../../assets/icons/magnifyingglass.svg?raw';
import MagnifyingGlass from './MagnifyingGlass';

describe('Testing MagnifyingGlass React Component', () => {
  test('should be rendere MagnifyingGlass icon', () => {
    render(<MagnifyingGlass icon={magnifyingglass} variant="solid" />);
    const buttonElement = screen.getByTestId('button__glass');
    expect(buttonElement).toBeInTheDocument();
  });
});
