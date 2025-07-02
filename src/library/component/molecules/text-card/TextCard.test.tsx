import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../../../style-library/themes/default'; // ✅ ajusta esta ruta según tu proyecto
import TextCard from './TextCard';

describe('TextCard Component', () => {
  const size = 'md';
  const rounded = 'r_md';
  const title = 'Título de prueba';
  const description = 'Descripción de prueba';

  const badgeProps = {
    size: 'sm',
    rounded: 'r_md',
    backgroundColor: 'primary',
    avatar: {
      size: 'sm',
      rounded: 'r_md',
      alt: 'Avatar de prueba',
      src: 'https://example.com/avatar.png',
    },
    text: {
      content: 'Badge',
      color: 'paragraph_dark',
      size: 'md',
      align: 'left',
      fontWeight: 400,
      gutterBottom: false,
    },
    pill: {
      text: 'Ejemplo',
      color: 'neutral-dark',
      variant: 'filled',
      rounded: 'r_md',
    },
  } as const;

  const titleProps = {
    color: undefined,
    align: undefined,
    fontWeight: undefined,
    gutterBottom: undefined,
  };

  const descriptionProps = {
    color: undefined,
    align: undefined,
    fontWeight: undefined,
    gutterBottom: undefined,
  };

  const renderWithTheme = (ui: React.ReactElement) =>
    render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);

  it('renders title and description', () => {
    renderWithTheme(
      <TextCard
        size={size}
        rounded={rounded}
        title={title}
        description={description}
        checkProps={{
          checked: false,
          onChange: vi.fn(),
          disabled: false,
          name: 'checkbox1',
          value: 'value1',
          variant: 'neutral-dark',
        }}
        badgeProps={badgeProps}
        titleProps={titleProps}
        descriptionProps={descriptionProps}
      />,
    );

    expect(screen.getByText('Título de prueba')).toBeDefined();
    expect(screen.getByText('Descripción de prueba')).toBeDefined();
  });

  it('calls onChange when checkbox is clicked', () => {
    const onChangeMock = vi.fn();

    renderWithTheme(
      <TextCard
        size={size}
        rounded={rounded}
        title={title}
        description={description}
        checkProps={{
          checked: false,
          onChange: onChangeMock,
          disabled: false,
          name: 'checkbox1',
          value: 'value1',
          variant: 'neutral-dark',
        }}
        badgeProps={badgeProps}
        titleProps={titleProps}
        descriptionProps={descriptionProps}
      />,
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalled();
  });

  it('renders BadgeCard with correct text', () => {
    renderWithTheme(
      <TextCard
        size={size}
        rounded={rounded}
        title={title}
        description={description}
        checkProps={{
          checked: false,
          onChange: vi.fn(),
          disabled: false,
          name: 'checkbox1',
          value: 'value1',
          variant: 'neutral-dark',
        }}
        badgeProps={badgeProps}
        titleProps={titleProps}
        descriptionProps={descriptionProps}
      />,
    );

    expect(screen.getByText('Badge')).toBeDefined();
  });
});
