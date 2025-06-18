import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeProvider from '../../../../style-library/core/ThemeProvider.tsx';
import { AvatarItem } from './AvatarBagde.tsx';

// Esta sección de mock de Jest fue eliminada porque NO es necesaria en este archivo de test.
// Si esta línea está activa en tu archivo, causará el "ReferenceError: jest is not defined".
// jest.mock('../../atoms/pills/Pill', () => ({
//   __esModule: true,
//   default: jest.fn(({ text, children }) => <span data-testid="mock-pill">{text || children}</span>),
// }));

const renderWithTheme = (component) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('AvatarItem', () => {
  test('renders without crashing', () => {
    renderWithTheme(<AvatarItem alt="Test" />);
    expect(screen.getByText('T')).toBeInTheDocument();
  });

  test('displays initials when src is not provided', () => {
    const altText = 'John Doe';
    renderWithTheme(<AvatarItem alt={altText} />);
    expect(screen.getByText('J')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('displays image when src is provided', () => {
    const imageUrl = 'https://example.com/avatar.jpg';
    const altText = 'User Avatar';
    renderWithTheme(<AvatarItem src={imageUrl} alt={altText} />);
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
    renderWithTheme(<AvatarItem alt="Hidden" hidden />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.queryByText('H')).not.toBeInTheDocument();
  });
});
