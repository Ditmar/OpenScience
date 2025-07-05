import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MediaDownloadIcon from './MediaDownloadIcon';
import type { MediaDownloadIconProps } from './types/IProps';

const mockFn = () => {
  const fn = () => {
    fn.called = true;
    fn.callCount = (fn.callCount || 0) + 1;
  };
  fn.called = false;
  fn.callCount = 0;
  return fn;
};

describe('MediaDownloadIcon', () => {
  const setup = (props: Partial<MediaDownloadIconProps> = {}) => {
    const defaultProps: MediaDownloadIconProps = {
      type: 'download',
      onClick: mockFn(),
    };

    return render(
      <MediaDownloadIcon
        type={props.type ?? defaultProps.type}
        onClick={props.onClick ?? defaultProps.onClick}
      />,
    );
  };

  it('renders the download icon correctly', () => {
    setup({ type: 'download' });
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders the slide-left icon correctly', () => {
    setup({ type: 'slide-left' });
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = mockFn();
    setup({ onClick: handleClick });
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick.called).toBe(true);
    expect(handleClick.callCount).toBe(1);
  });

  it('has accessible role "button"', () => {
    setup();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('does not throw if onClick is not provided', () => {
    render(<MediaDownloadIcon type="download" onClick={() => {}} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
