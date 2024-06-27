import { render, screen } from '@testing-library/react';
import Volume from './Volume';

describe('Volume Component', () => {
  test('should render correctly with props', () => {
    const props = {
      pathImage: 'path/to/image.jpg',
      alt: 'Thumbnail Alt Text',
      volumen: 'Volume Title',
      id: 1,
      date: new Date(2022, 0, 5),
      overflow: false,
    };

    render(
      <Volume
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
    const dateElement = screen.getByText('Enero 5 | 2022');

    expect(thumbnailElement).toBeInTheDocument();
    expect(volumenElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });
});
