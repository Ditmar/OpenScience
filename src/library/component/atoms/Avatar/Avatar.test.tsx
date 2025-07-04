import React from 'react';
import { render, screen } from '@testing-library/react';
import AtomAvatar from './Avatar';
import type { AvatarProps } from './types/IProps';

const renderWithProps = (props: AvatarProps) =>
  render(<AtomAvatar size={props.size} rounded={props.rounded} alt={props.alt} src={props.src} />);

describe('AtomAvatar tamaños y bordes', () => {
  test.each(['sm', 'md', 'lg'] as const)('renderiza avatar con tamaño %s', (size) => {
    renderWithProps({
      size,
      alt: `Avatar ${size}`,
      src: 'https://via.placeholder.com/150',
    });
    const avatar = screen.getByAltText(`Avatar ${size}`);
    expect(avatar).toBeInTheDocument();
  });

  test.each(['r_none', 'r_md', 'r_full'] as const)('renderiza avatar con borde %s', (rounded) => {
    renderWithProps({
      rounded,
      alt: `Avatar ${rounded}`,
      src: 'https://via.placeholder.com/150',
    });
    const avatar = screen.getByAltText(`Avatar ${rounded}`);
    expect(avatar).toBeInTheDocument();
  });
});
