import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CarouselOfVolumes } from './CarouselOfVolumes';
import type { CarouseIProps, IProps } from './types/IProps';

import DataMock from './__mock__/VolumeData.json';

import { useIsMobile } from './hooks/useIsMobile';

vi.mock('../../../../ui/components/atoms/label-volumes/LabelVolumes', () => ({
  default: ({ text }: { text: string }) => <span data-testid="label-volumes">{text}</span>,
}));

vi.mock('../../../../ui/components/molecules/volume/Volume', () => ({
  default: ({ id, pathImage, volumen, date, alt }: IProps) => (
    <div data-testid={`volume-${String(id)}`}>
      <img src={pathImage} alt={alt} />
      <p>{volumen}</p>
      <p>{date.toString()}</p>
    </div>
  ),
}));

vi.mock('../../../../ui/utils/svg-icons/icons', () => ({
  Icon: ({ src }: { src: string }) => <svg data-testid="icon">{src}</svg>,
}));

vi.mock('../../../../assets/icons/left-arrow.svg?raw', () => ({
  default: 'left-arrow-svg',
}));

vi.mock('../../../../assets/icons/right-arrow.svg?raw', () => ({
  default: 'right-arrow-svg',
}));

vi.mock('./hooks/useIsMobile', () => ({
  useIsMobile: vi.fn(),
}));

const theme = createTheme({
  palette: {
    error: {
      main: '#d32f2f',
    },
    success: {
      main: '#2e7d32',
    },
  },
});

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('CarouselOfVolumes', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Initial rendering', () => {
    it('should render the component correctly', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);

      renderWithTheme(<CarouselOfVolumes data={DataMock} />);

      expect(screen.getByTestId('label-volumes')).toBeInTheDocument();
      expect(screen.getByText('VOLÚMENES')).toBeInTheDocument();
      expect(screen.getByTestId('button-left')).toBeInTheDocument();
      expect(screen.getByTestId('button-right')).toBeInTheDocument();
    });

    it('should display the title "VOLUMES"', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);

      renderWithTheme(<CarouselOfVolumes data={DataMock} />);

      expect(screen.getByTestId('label-volumes')).toHaveTextContent('VOLÚMENES');
    });

    it('should have buttons with the correct aria labels', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);

      renderWithTheme(<CarouselOfVolumes data={DataMock} />);

      expect(screen.getByRole('button', { name: 'Volumen anterior' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Volumen siguiente' })).toBeInTheDocument();
    });
  });

  describe('Responsive behavior', () => {
    it('should show 3 items on desktop', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);

      renderWithTheme(<CarouselOfVolumes data={DataMock} />);

      expect(screen.getByTestId('volume-1')).toBeInTheDocument();
      expect(screen.getByTestId('volume-2')).toBeInTheDocument();
      expect(screen.getByTestId('volume-3')).toBeInTheDocument();
      expect(screen.queryByTestId('volume-4')).not.toBeInTheDocument();
      expect(screen.queryByTestId('volume-5')).not.toBeInTheDocument();
    });

    it('should display 1 item on mobile', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(true);

      renderWithTheme(<CarouselOfVolumes data={DataMock} />);

      expect(screen.getByTestId('volume-1')).toBeInTheDocument();
      expect(screen.queryByTestId('volume-2')).not.toBeInTheDocument();
      expect(screen.queryByTestId('volume-3')).not.toBeInTheDocument();
    });
  });

  describe('Carousel navigation', () => {
    it('should rotate elements to the right when right-clicking', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);

      renderWithTheme(<CarouselOfVolumes data={DataMock} />);

      expect(screen.getByTestId('volume-1')).toBeInTheDocument();
      expect(screen.getByTestId('volume-2')).toBeInTheDocument();
      expect(screen.getByTestId('volume-3')).toBeInTheDocument();

      fireEvent.click(screen.getByTestId('button-right'));

      expect(screen.queryByTestId('volume-1')).not.toBeInTheDocument();
      expect(screen.getByTestId('volume-2')).toBeInTheDocument();
      expect(screen.getByTestId('volume-3')).toBeInTheDocument();
      expect(screen.getByTestId('volume-4')).toBeInTheDocument();
    });

    it('should rotate elements to the left when left clicking', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);

      renderWithTheme(<CarouselOfVolumes data={DataMock} />);

      expect(screen.getByTestId('volume-1')).toBeInTheDocument();
      expect(screen.getByTestId('volume-2')).toBeInTheDocument();
      expect(screen.getByTestId('volume-3')).toBeInTheDocument();

      fireEvent.click(screen.getByTestId('button-left'));

      expect(screen.getByTestId('volume-5')).toBeInTheDocument();
      expect(screen.getByTestId('volume-1')).toBeInTheDocument();
      expect(screen.getByTestId('volume-2')).toBeInTheDocument();
      expect(screen.queryByTestId('volume-3')).not.toBeInTheDocument();
    });

    it('Mobile navigation should work by showing only one element.', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(true);

      renderWithTheme(<CarouselOfVolumes data={DataMock} />);

      expect(screen.getByTestId('volume-1')).toBeInTheDocument();
      expect(screen.queryByTestId('volume-2')).not.toBeInTheDocument();

      fireEvent.click(screen.getByTestId('button-right'));
      fireEvent.click(screen.getByTestId('button-right'));
      fireEvent.click(screen.getByTestId('button-right'));
      fireEvent.click(screen.getByTestId('button-right'));

      expect(screen.getByTestId('volume-5')).toBeInTheDocument();
      expect(screen.queryByTestId('volume-1')).not.toBeInTheDocument();

      fireEvent.click(screen.getByTestId('button-left'));
      expect(screen.getByTestId('volume-4')).toBeInTheDocument();
    });
  });

  describe('Circular navigation', () => {
    it('should make circular navigation to the right', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);

      renderWithTheme(<CarouselOfVolumes data={DataMock} />);

      fireEvent.click(screen.getByTestId('button-right'));
      fireEvent.click(screen.getByTestId('button-right'));
      fireEvent.click(screen.getByTestId('button-right'));

      expect(screen.getByTestId('volume-4')).toBeInTheDocument();
      expect(screen.getByTestId('volume-5')).toBeInTheDocument();
      expect(screen.getByTestId('volume-1')).toBeInTheDocument();
    });

    it('should do circular navigation to the left', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);

      renderWithTheme(<CarouselOfVolumes data={DataMock} />);

      fireEvent.click(screen.getByTestId('button-left'));

      expect(screen.getByTestId('volume-5')).toBeInTheDocument();
      expect(screen.getByTestId('volume-1')).toBeInTheDocument();
      expect(screen.getByTestId('volume-2')).toBeInTheDocument();
    });
  });

  describe('Rendering of internal components', () => {
    it('should pass the correct props to the Volume component', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);

      renderWithTheme(<CarouselOfVolumes data={DataMock} />);

      const firstVolume = screen.getByTestId('volume-1');

      expect(firstVolume).toBeInTheDocument();
      expect(firstVolume.querySelector('img')).toHaveAttribute('src', DataMock.data[0].pathImage);
      expect(firstVolume.querySelector('img')).toHaveAttribute('alt', DataMock.data[0].alt);
      expect(firstVolume.textContent).toMatch(/Vol/);
    });

    it('should convert dates correctly', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);

      renderWithTheme(<CarouselOfVolumes data={DataMock} />);

      const firstVolume = screen.getByTestId('volume-1');
      const expectedDate = new Date('2023-01-01').toDateString();

      expect(firstVolume).toHaveTextContent(expectedDate);
    });
  });

  describe('edge cases', () => {
    it('should handle empty data without errors', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);

      const emptyData: CarouseIProps = {
        data: {
          data: [],
        },
      };

      renderWithTheme(<CarouselOfVolumes data={emptyData.data} />);

      expect(screen.getByTestId('label-volumes')).toBeInTheDocument();
      expect(screen.getByTestId('button-left')).toBeInTheDocument();
      expect(screen.getByTestId('button-right')).toBeInTheDocument();
    });

    it('should handle a single data element', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);

      const singleItemData: CarouseIProps = {
        data: {
          data: [DataMock.data[0]],
        },
      };

      renderWithTheme(<CarouselOfVolumes data={singleItemData.data} />);

      expect(screen.getByTestId('volume-1')).toBeInTheDocument();

      fireEvent.click(screen.getByTestId('button-right'));
      expect(screen.getByTestId('volume-1')).toBeInTheDocument();
    });
  });

  describe('User events', () => {
    it('should be accessible by keyboard', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);

      renderWithTheme(<CarouselOfVolumes data={DataMock} />);

      const leftButton = screen.getByTestId('button-left');
      const rightButton = screen.getByTestId('button-right');

      leftButton.focus();
      expect(document.activeElement).toBe(leftButton);

      rightButton.focus();
      expect(document.activeElement).toBe(rightButton);
    });

    it('should handle multiple rapid clicks', () => {
      (useIsMobile as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);

      renderWithTheme(<CarouselOfVolumes data={DataMock} />);

      const rightButton = screen.getByTestId('button-right');

      fireEvent.click(rightButton);
      fireEvent.click(rightButton);
      fireEvent.click(rightButton);
      fireEvent.click(rightButton);
      fireEvent.click(rightButton);

      expect(screen.getByTestId('volume-1')).toBeInTheDocument();
      expect(screen.getByTestId('volume-2')).toBeInTheDocument();
      expect(screen.getByTestId('volume-3')).toBeInTheDocument();
    });
  });
});
