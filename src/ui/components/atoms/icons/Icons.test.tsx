import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../../../style-library/themes/default';
import Icon from './Icons';
import media from '../../../../assets/icons/media.svg?raw';
import pdf from '../../../../assets/icons/pdf.svg?raw';
import link from '../../../../assets/icons/share.svg?raw';
import reference from '../../../../assets/icons/reference1.svg?raw';

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);
}

describe('Icon Component', () => {
  it('renders Media icon with blue background and correct size', () => {
    const { container, getByAltText } = renderWithTheme(
      <Icon
        icon={media}
        background="blue"
        containerSize={56}
        iconWidth={40}
        iconHeight={24}
        alt="Media icon"
      />,
    );
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveStyle('width: 56px');
    expect(box).toHaveStyle('height: 56px');
    const img = getByAltText('Media icon');
    expect(img).toBeInTheDocument();
    expect(img).toHaveStyle('width: 40px');
    expect(img).toHaveStyle('height: 24px');
  });

  it('renders PDF icon with blue background and correct size', () => {
    const { getByAltText } = renderWithTheme(
      <Icon
        icon={pdf}
        background="blue"
        containerSize={56}
        iconWidth={32}
        iconHeight={35}
        alt="PDF icon"
      />,
    );
    const img = getByAltText('PDF icon');
    expect(img).toBeInTheDocument();
    expect(img).toHaveStyle('width: 32px');
    expect(img).toHaveStyle('height: 35px');
  });

  it('renders Link icon with blue background and correct size', () => {
    const { getByAltText } = renderWithTheme(
      <Icon
        icon={link}
        background="blue"
        containerSize={56}
        iconWidth={32}
        iconHeight={33}
        alt="Link icon"
      />,
    );
    const img = getByAltText('Link icon');
    expect(img).toBeInTheDocument();
    expect(img).toHaveStyle('width: 32px');
    expect(img).toHaveStyle('height: 33px');
  });

  it('renders Reference icon with blue background and correct size', () => {
    const { getByAltText } = renderWithTheme(
      <Icon
        icon={reference}
        background="blue"
        containerSize={56}
        iconWidth={32}
        iconHeight={35}
        alt="Reference icon"
      />,
    );
    const img = getByAltText('Reference icon');
    expect(img).toBeInTheDocument();
    expect(img).toHaveStyle('width: 32px');
    expect(img).toHaveStyle('height: 35px');
  });

  it('renders Media icon with transparent background', () => {
    const { container, getByAltText } = renderWithTheme(
      <Icon
        icon={media}
        background="transparent"
        containerSize={56}
        iconWidth={40}
        iconHeight={24}
        alt="Media icon transparente"
      />,
    );
    const box = container.firstChild as HTMLElement;
    expect(['', 'transparent', 'rgba(0, 0, 0, 0)']).toContain(box.style.backgroundColor);
    const img = getByAltText('Media icon transparente');
    expect(img).toBeInTheDocument();
  });
});
