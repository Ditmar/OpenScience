import { render, screen } from '@testing-library/react';
import BannerArticles from './BannerArticles';
import type { IProps } from './types/IProps';

describe('BannerArticles Component', () => {
  const mockProps: IProps = {
    textSearch: 'Buscar más artículos',
    backgroundImage: 'test-image.jpg',
    logo: 'test-logo.jpg',
  };

  test('renders Logo, HeroBanner, and NavBar components', () => {
    render(
      <BannerArticles
        textSearch={mockProps.textSearch}
        backgroundImage={mockProps.backgroundImage}
        logo={mockProps.logo}
      />,
    );

    expect(screen.getByAltText('Logotipo de la empresa')).toBeInTheDocument();
    expect(screen.getByAltText('Rectangle6')).toBeInTheDocument();
    expect(screen.getByText('Artículos')).toBeInTheDocument();
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Volúmenes')).toBeInTheDocument();
  });

  test('renders with provided props', () => {
    render(
      <BannerArticles
        textSearch={mockProps.textSearch}
        backgroundImage={mockProps.backgroundImage}
        logo={mockProps.logo}
      />,
    );

    const backgroundImage = screen.getByAltText('Rectangle6');
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute('src', mockProps.backgroundImage);

    const logo = screen.getByAltText('Logotipo de la empresa');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', mockProps.logo);
  });

  test('does not render elements when showMore is false by default', () => {
    render(
      <BannerArticles
        textSearch={mockProps.textSearch}
        backgroundImage={mockProps.backgroundImage}
        logo={mockProps.logo}
      />,
    );

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.queryByTestId('button__glass1')).not.toBeInTheDocument();

    const layoutDiv = screen.getByRole('banner');
    expect(layoutDiv).toBeInTheDocument();
  });
});
