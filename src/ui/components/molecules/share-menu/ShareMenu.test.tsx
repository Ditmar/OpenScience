import { describe, test, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShareMenu from './ShareMenu';

interface MultiFunctionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon: string;
  color: string;
}

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  icon: string;
  color: string;
}

vi.mock('../../atoms/multi-function-button/MultiFunctionButton', () => {
  // eslint-disable-next-line react/function-component-definition, react/display-name
  const MockMultiFunctionButton = ({
    children,
    icon,
    color,
    ...props
  }: MultiFunctionButtonProps) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button {...props} data-testid="mock-multi-function-button">
      {/* Mantenemos este texto, pero ahora lo usaremos en el query del padre */}
      {icon && <span data-testid="mock-share-icon">ICONO PRINCIPAL DE COMPARTIR</span>}
      {children}
    </button>
  );
  return { default: MockMultiFunctionButton };
});

vi.mock('../../atoms/icon-button/IconButton', () => {
  // eslint-disable-next-line react/function-component-definition, react/display-name
  const MockIconButton = ({ children, icon, color, ...props }: IconButtonProps) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button {...props} data-testid={`mock-icon-button-${String(children)}`}>
      {icon && (
        <span data-testid={`mock-${String(children)}-icon`}>
          ICONO DE {String(children).toUpperCase()}
        </span>
      )}
    </button>
  );
  return { default: MockIconButton };
});

describe('ShareMenu', () => {
  test('renders the COMPARTIR button initially', () => {
    render(<ShareMenu />);
    const shareButton = screen.getByRole('button', {
      name: 'ICONO PRINCIPAL DE COMPARTIR share COMPARTIR',
    });
    expect(shareButton).toBeInTheDocument();

    expect(screen.queryByTestId('mock-icon-button-whatsapp')).not.toBeInTheDocument();
    expect(screen.queryByTestId('mock-icon-button-telegram')).not.toBeInTheDocument();
    expect(screen.queryByTestId('mock-icon-button-facebook')).not.toBeInTheDocument();
  });

  test('shows share options when COMPARTIR button is clicked', () => {
    render(<ShareMenu />);
    const shareButton = screen.getByRole('button', {
      name: 'ICONO PRINCIPAL DE COMPARTIR share COMPARTIR',
    });

    fireEvent.click(shareButton);

    expect(screen.getByTestId('mock-icon-button-whatsapp')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon-button-telegram')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon-button-facebook')).toBeInTheDocument();
  });

  test('hides share options when COMPARTIR button is clicked again', () => {
    render(<ShareMenu />);
    const shareButton = screen.getByRole('button', {
      name: 'ICONO PRINCIPAL DE COMPARTIR share COMPARTIR',
    });

    fireEvent.click(shareButton);
    expect(screen.getByTestId('mock-icon-button-whatsapp')).toBeInTheDocument();

    fireEvent.click(shareButton);

    expect(screen.queryByTestId('mock-icon-button-whatsapp')).not.toBeInTheDocument();
    expect(screen.queryByTestId('mock-icon-button-telegram')).not.toBeInTheDocument();
    expect(screen.queryByTestId('mock-icon-button-facebook')).not.toBeInTheDocument();
  });

  test('MultiFunctionButton renders with the correct icon placeholder', () => {
    render(<ShareMenu />);
    const shareIconPlaceholder = screen.getByTestId('mock-share-icon');
    expect(shareIconPlaceholder).toBeInTheDocument();
    expect(shareIconPlaceholder).toHaveTextContent('ICONO PRINCIPAL DE COMPARTIR');
  });
});
