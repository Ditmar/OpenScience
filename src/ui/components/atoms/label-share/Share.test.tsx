import { render, screen } from '@testing-library/react';
import Share from './Share';
import share from '../../../../assets/icons/share.svg?raw';
import media from '../../../../assets/icons/media.svg?raw';

describe('Testing Share React Component', () => {
  test('should render Compartir', () => {
    render(<Share icon={share} text="Compartir" />);
    const labelElement = screen.getByText(/Compartir/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('should render Media', () => {
    render(<Share icon={media} text="Media" />);
    const labelElement = screen.getByText(/Media/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('should render icon for Compartir', () => {
    render(<Share icon={share} text="Compartir" />);
    const iconElement = screen.getByRole('img', { hidden: true });
    expect(iconElement).toBeInTheDocument();
  });

  test('should render icon for Media', () => {
    render(<Share icon={media} text="Media" />);
    const iconElement = screen.getByRole('img', { hidden: true });
    expect(iconElement).toBeInTheDocument();
  });
});