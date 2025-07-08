import { renderWithTheme, screen, fireEvent } from '@testing/renderWithTheme';
import MediaDownloadIcon from './MediaDownloadIcon';
import type { MediaDownloadIconProps } from './types/IProps';

interface SetupResult {
  button: HTMLElement;
}

const setup = (props: Partial<MediaDownloadIconProps> = {}): SetupResult => {
  const defaultProps: MediaDownloadIconProps = {
    type: 'download',
    onClick: () => {},
    ...props,
  };

  renderWithTheme(<MediaDownloadIcon type={defaultProps.type} onClick={defaultProps.onClick} />, {
    mode: 'dark',
  });

  return {
    button: screen.getByRole('button'),
  };
};

describe('MediaDownloadIcon', () => {
  it('renders the button correctly', () => {
    const { button } = setup();
    expect(button).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    let clicked = false;

    const { button } = setup({
      onClick: () => {
        clicked = true;
      },
    });

    fireEvent.click(button);
    expect(clicked).toBe(true);
  });

  it('has accessible role "button"', () => {
    const { button } = setup({ type: 'download' });
    expect(button).toHaveAttribute('aria-label', 'download');
  });

  it('does not throw if onClick is not provided', () => {
    expect(() => setup({ onClick: undefined })).not.toThrow();
  });
});
