import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeProvider } from '@mui/material/styles';
import BurgerIconButton from './BurgerIconButton';
import { lightTheme } from '../../../../style-library/themes/default';

describe('BurgerIconButton', () => {
  const renderWithTheme = (ui: React.ReactElement) =>
    render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);

  it('should render three bars', () => {
    renderWithTheme(<BurgerIconButton onClick={() => {}} />);
    const bars = screen.getAllByRole('presentation');
    expect(bars.length).toBe(3);
  });

  it('must execute onClick when the button is clicked', () => {
    const onClickMock = vi.fn();
    renderWithTheme(<BurgerIconButton onClick={onClickMock} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('must use custom aria-label if provided', () => {
    renderWithTheme(<BurgerIconButton onClick={() => {}} ariaLabel="Abrir menú" />);
    const button = screen.getByLabelText('Abrir menú');
    expect(button).toBeDefined();
  });
});
