import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AtomText from './AtomText';
import { lightTheme } from '../../../../style-library/themes/default';

describe('AtomText Component', () => {
  it('renderiza correctamente con texto simple', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <AtomText>Texto de prueba</AtomText>
      </ThemeProvider>,
    );
    getByText('Texto de prueba');
    expect(true).toBe(true);
  });

  it('acepta props básicas como color, size, align, fontWeight y gutterBottom', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <AtomText color="paragraph_dark" size="md" align="center" fontWeight={500} gutterBottom>
          Texto con props
        </AtomText>
      </ThemeProvider>,
    );
    getByText('Texto con props');
    expect(true).toBe(true);
  });
});
