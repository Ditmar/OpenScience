import { render, screen } from '@testing-library/react';
import Rectangle28 from './__mock__/imgs/Rectangle28.png';
import Rectangle30 from './__mock__/imgs/Rectangle30.png';
import Thumbnail from './Thumbnail.tsx';

describe('First testing Thumbnail React Component', () => {
  test('should be rendere the thumbnail image Rectangle28', () => {
    render(<Thumbnail pathImage={String(Rectangle28)} alt="text" />);
    const thumbnailElement = screen.getByAltText('text');
    expect(thumbnailElement).toBeInTheDocument();
  });
});

describe('Second testing Thumbnail React Component', () => {
  test('should be rendere the thumbnail image Rectangle30', () => {
    render(<Thumbnail pathImage={String(Rectangle30)} alt="text" />);
    const thumbnailElement = screen.getByAltText('text');
    expect(thumbnailElement).toBeInTheDocument();
  });
});
