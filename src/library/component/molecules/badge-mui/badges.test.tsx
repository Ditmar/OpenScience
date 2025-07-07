import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BadgeItem from './badges';
import type { BadgeItemProps } from './types/IProps';

const mockTheme = createTheme({
  palette: {
    common: {
      white: '#ffffff',
    },
    grey: {
      500: '#6c757d',
    },
    primary: {
      main: '#0d6efd',
    },
    secondary: {
      main: '#6610f2',
    },
    warning: {
      main: '#ffc107',
    },
    text: {
      primary: '#000000',
    },
    divider: '#dee2e6',
  },
  customColorsBadge: {
    gray: '#e0e0e0',
  },
});

describe('BadgeItem Component', () => {
  const baseProps: Omit<BadgeItemProps, 'text'> = {
    size: 'medium',
    variant: 'filled',
    color: 'neutral',
    shape: 'square',
  };

  it('renders with default props', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <BadgeItem
          text="Test Badge"
          size={baseProps.size}
          variant={baseProps.variant}
          color={baseProps.color}
          shape={baseProps.shape}
        />
      </ThemeProvider>,
    );

    expect(screen.getByText('Test Badge')).toBeInTheDocument();
    expect(screen.getByTestId('avatar-badge-item')).toBeInTheDocument();
  });

  it('displays the correct text', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <BadgeItem
          text="Custom Text"
          size={baseProps.size}
          variant={baseProps.variant}
          color={baseProps.color}
          shape={baseProps.shape}
        />
      </ThemeProvider>,
    );

    expect(screen.getByText('Custom Text')).toBeInTheDocument();
  });

  it('shows avatar when avatarSrc is provided', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <BadgeItem
          text="Test Badge"
          size={baseProps.size}
          variant={baseProps.variant}
          color={baseProps.color}
          shape={baseProps.shape}
          avatarSrc="test.jpg"
        />
      </ThemeProvider>,
    );

    const avatar = screen.getByAltText('avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'test.jpg');
  });

  it('renders with small size correctly', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <BadgeItem
          text="Test Badge"
          size="small"
          variant={baseProps.variant}
          color={baseProps.color}
          shape={baseProps.shape}
        />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('avatar-badge-item')).toHaveStyle('padding: 2px 6px');
  });

  it('renders with large size correctly', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <BadgeItem
          text="Test Badge"
          size="large"
          variant={baseProps.variant}
          color={baseProps.color}
          shape={baseProps.shape}
        />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('avatar-badge-item')).toHaveStyle('padding: 6px 12px');
  });
});
