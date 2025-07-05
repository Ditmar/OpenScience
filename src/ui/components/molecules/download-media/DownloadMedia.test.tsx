import React from 'react';
import { render, screen } from '@testing-library/react';
import DownloadMedia from './DownloadMedia';

const mockFn = () => {
  const fn = () => {
    fn.called = true;
    fn.callCount = (fn.callCount || 0) + 1;
  };
  fn.called = false;
  fn.callCount = 0;
  return fn;
};

describe('DownloadMedia', () => {
  it('renders image and icons', () => {
    const onSlidePrev = mockFn();
    const onDownload = mockFn();

    render(
      <DownloadMedia
        imageSrc="https://example.com/img.jpg"
        onSlidePrev={onSlidePrev}
        onDownload={onDownload}
      />,
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
    expect(screen.getByRole('button', { name: 'slide-left' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'download' })).toBeInTheDocument();
  });
});
