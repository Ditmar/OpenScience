import { render, screen } from '@testing-library/react';
import NavigationRoute from './NavigationRoute';

describe('VolumeBox', () => {
  test('renders volume and date', () => {
    render(<NavigationRoute volume="1" date="Abril 16, 2023" />);
    expect(screen.getByText(/Abril 16, 2023\s*\|\s*Vol\.\s*1\s*\|\s*Núm\.\s*1/)).toBeInTheDocument();
  });

  test('renders additional text', () => {
    render(<NavigationRoute volume="1" date="Abril 16, 2023" text="Texto adicional" />);
    expect(screen.getByText('Texto adicional')).toBeInTheDocument();
  });
});
