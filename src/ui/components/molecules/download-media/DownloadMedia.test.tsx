import React from 'react';
import { renderWithTheme, screen } from '@testing/renderWithTheme';
import DownloadMedia from './DownloadMedia';

type MockFn = (() => void) & { called: boolean; callCount: number };

const mockFn = (): MockFn => {
  const fn = () => {
    fn.called = true;
    fn.callCount = (fn.callCount || 0) + 1;
  };
  fn.called = false;
  fn.callCount = 0;
  return fn as MockFn;
};

describe('DownloadMedia', () => {
  it('renders image and icons', () => {
    const onSlidePrev = mockFn();
    const onDownload = mockFn();

    renderWithTheme(
      <DownloadMedia
        imageSrc="https://example.com/img.jpg"
        onSlidePrev={onSlidePrev}
        onDownload={onDownload}
      />,
      { mode: 'dark' },
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
    expect(screen.getByRole('button', { name: 'slide-left' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'download' })).toBeInTheDocument();
  });
});
