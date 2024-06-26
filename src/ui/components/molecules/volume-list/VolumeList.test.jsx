import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VolumeList from './VolumeList.tsx';

describe('VolumeList', () => {
  it('should render the list with volumes', () => {
    render(<VolumeList />);

    expect(screen.getByText('volumenes')).toBeInTheDocument();
    expect(screen.getByText('Vol. 1')).toBeInTheDocument();
    expect(screen.getByText('Abril 14 | 2023')).toBeInTheDocument();
    expect(screen.getByText('Vol. 2')).toBeInTheDocument();
    expect(screen.getByText('Mayo 19 | 2023')).toBeInTheDocument();
    expect(screen.getByText('Vol. 3')).toBeInTheDocument();
    expect(screen.getByText('Junio 24 | 2023')).toBeInTheDocument();
    expect(screen.getByText('Vol. 4')).toBeInTheDocument();
    expect(screen.getByText('Julio 29 | 2023')).toBeInTheDocument();
    expect(screen.getByText('Vol. 5')).toBeInTheDocument();
    expect(screen.getByText('Agosto 4 | 2023')).toBeInTheDocument();
    expect(screen.getByText('Vol. 6')).toBeInTheDocument();
    expect(screen.getByText('Septiembre 9 | 2023')).toBeInTheDocument();
  });

  it('debería renderizar el número correcto de volúmenes', () => {
    render(<VolumeList />);

    const volumeItems = screen.getAllByText(/Vol\. \d/);
    expect(volumeItems.length).toBe(6);
  });
});
