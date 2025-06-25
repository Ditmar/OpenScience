import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import type { CarouseIProps } from './types/IProps';
import VolumeDataMock from './__mock__/VolumeData.json';

import { useIsMobile } from './hooks/useIsMobile';
import { CarouselOfVolumes } from './CarouselOfVolumes';

vi.mock('../../../../ui/components/molecules/volume/Volume', () => ({
  default: ({ volumen }: { volumen: string }) => <div>{volumen}</div>,
}));

vi.mock('../../../../ui/utils/svg-icons/icons', () => ({
  Icon: ({ src }: { src: string }) => <span>{src.includes('left') ? '←' : '→'}</span>,
}));

vi.mock('./hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}));

const mockProps: CarouseIProps = {
  data: VolumeDataMock,
};

describe('CarouselOfVolumes', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('displays 3 volumes on desktop', () => {
    (useIsMobile as unknown as Mock).mockReturnValue(false);

    render(<CarouselOfVolumes data={mockProps.data} />);
    const volumenes = screen.getAllByText('Vol.');
    expect(volumenes).toHaveLength(3);
  });

  it('shows only 1 volume on mobile', () => {
    (useIsMobile as unknown as Mock).mockReturnValue(true);

    render(<CarouselOfVolumes data={mockProps.data} />);
    const volumenes = screen.getAllByText('Vol.');
    expect(volumenes).toHaveLength(1);
  });

  it('rotate right on mobile', () => {
    (useIsMobile as unknown as Mock).mockReturnValue(true);

    render(<CarouselOfVolumes data={mockProps.data} />);
    const rightButton = screen.getByTestId('button-right');

    fireEvent.click(rightButton);

    const volumenes = screen.getAllByText('Vol.');
    expect(volumenes).toHaveLength(1);
  });

  it('rotate left on mobile', () => {
    (useIsMobile as unknown as Mock).mockReturnValue(true);

    render(<CarouselOfVolumes data={mockProps.data} />);
    const leftButton = screen.getByTestId('button-left');

    fireEvent.click(leftButton);

    const volumenes = screen.getAllByText('Vol.');
    expect(volumenes).toHaveLength(1);
  });

  it('renders the title correctly', () => {
    (useIsMobile as unknown as Mock).mockReturnValue(false);

    render(<CarouselOfVolumes data={mockProps.data} />);
    expect(screen.getByText('VOLÚMENES')).toBeInTheDocument();
  });
});
