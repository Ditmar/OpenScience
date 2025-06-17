import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AvatarItem } from './AvatarBagde.tsx';

describe('AvatarItem', () => {
  test('renders without crashing', () => {
    render(<AvatarItem alt="Test" />);
    expect(screen.getByRole('img') || screen.getByRole('generic')).toBeInTheDocument();
  });

  test('displays initials when src is not provided', () => {
    const altText = 'John Doe';
    render(<AvatarItem alt={altText} />);
    expect(screen.getByText('JD')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('displays image when src is provided', () => {
    const imageUrl = 'https://example.com/avatar.jpg';
    const altText = 'User Avatar';
    render(<AvatarItem src={imageUrl} alt={altText} />);
    const avatarImage = screen.getByRole('img', { name: altText });
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', imageUrl);
    expect(
      screen.queryByText(
        altText
          .split(' ')
          .map((n) => n[0])
          .join(''),
      ),
    ).not.toBeInTheDocument();
  });

  test('is not rendered when hidden prop is true', () => {
    render(<AvatarItem alt="Hidden" hidden />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.queryByText('H')).not.toBeInTheDocument();
  });
});
