import { render, screen } from '@testing-library/react';
import Share from './Share';
import share from '../../../../assets/icons/share.svg?raw';

describe('Testing Share React Component', () => {
  test('should render Compartir', () => {
    render(<Share icon={share} text="Compartir" />);
    const labelElement = screen.getByText(/Compartir/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('should render icon for Compartir', () => {
    render(<Share icon={share} text="Compartir" />);
    const iconElement = screen.getByTestId('share-icon');
    expect(iconElement).toBeInTheDocument();
  });
});