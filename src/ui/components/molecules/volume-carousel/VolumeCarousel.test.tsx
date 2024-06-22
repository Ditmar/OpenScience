import { render, screen } from '@testing-library/react';
import VolumeCarousel from './VolumeCarousel';

describe('VolumeCarousel Component', () => {
  test('should render correctly with props', () => {
    const props = {
      pathImage: 'path/to/image.jpg',
      alt: 'Thumbnail Alt Text',
      volumen: 'Volume Title',
      id: 1,
      date: new Date('2023-06-01'),
      overflow: false,
    };

    render(
      <VolumeCarousel
        pathImage={props.pathImage}
        alt={props.alt}
        volumen={props.volumen}
        id={props.id}
        date={props.date}
        overflow={props.overflow}
      />,
    );

    const thumbnailElement = screen.getByAltText(props.alt);
    const volumenElement = screen.getByText(new RegExp(`${props.volumen}.*${String(props.id)}`));
    const dateElement = screen.getByText('Mayo 31 | 2023');

    expect(thumbnailElement).toBeInTheDocument();
    expect(volumenElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });
});
