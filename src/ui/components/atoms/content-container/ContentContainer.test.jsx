import { render, screen } from '@testing-library/react';
import Container from './ContentContainer.tsx';
import icon from './_mock_/image/container.png';

describe('Testing ContentContainer React Component', () => {
  test('should be rendere ContentContainer', () => {
    render(<Container pathImage={String(icon)} alt="text" />);
    const thumbnailElement = screen.getByAltText('text');
    expect(thumbnailElement).toBeInTheDocument();
  });
});
