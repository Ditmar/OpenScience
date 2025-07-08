import { ThemeProvider } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import MediaDownloadIcon from './MediaDownloadIcon';
import type { MediaDownloadIconProps } from './types/IProps';
import { darkTheme } from '../../../../style-library/themes/dark';

interface SetupResult {
  button: HTMLElement;
}

const setup = (props: Partial<MediaDownloadIconProps> = {}): SetupResult => {
  const defaultProps: MediaDownloadIconProps = {
    type: 'download',
    onClick: () => {},
    ...props,
  };

  render(
    <ThemeProvider theme={darkTheme}>
      <MediaDownloadIcon type={defaultProps.type} onClick={defaultProps.onClick} />
    </ThemeProvider>,
  );

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
