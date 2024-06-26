import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VolumeList from './VolumeList.tsx';

describe('VolumeList', () => {
  it('should render the list with volumes', () => {
    render(<VolumeList />);

    expect(screen.getByText('volumenes')).toBeInTheDocument();
    expect(screen.getByText('Vol. 1')).toBeInTheDocument();
    expect(screen.getByText(/Abril (14|15) \| 2023/)).toBeInTheDocument();
    expect(screen.getByText('Vol. 2')).toBeInTheDocument();
    expect(screen.getByText(/Mayo (19|20) \| 2023/)).toBeInTheDocument();
    expect(screen.getByText('Vol. 3')).toBeInTheDocument();
    expect(screen.getByText(/Junio (24|25) \| 2023/)).toBeInTheDocument();
    expect(screen.getByText('Vol. 4')).toBeInTheDocument();
    expect(screen.getByText(/Julio (29|30) \| 2023/)).toBeInTheDocument();
    expect(screen.getByText('Vol. 5')).toBeInTheDocument();
    expect(screen.getByText(/Agosto (4|5) \| 2023/)).toBeInTheDocument();
    expect(screen.getByText('Vol. 6')).toBeInTheDocument();
    expect(screen.getByText(/Septiembre (9|10) \| 2023/)).toBeInTheDocument();
  });
});
