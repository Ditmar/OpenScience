import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../../../style-library/themes/default';
import BadgeCard from './BadgeCard';

describe('BadgeCard Component', () => {
  it('renderiza correctamente con avatar, texto y pill', () => {
    const { getByText, getByAltText } = render(
      <ThemeProvider theme={lightTheme}>
        <BadgeCard
          size="md"
          rounded="r_md"
          backgroundColor="primary"
          avatar={{ src: 'https://via.placeholder.com/150', alt: 'avatar test' }}
          text={{ content: 'Texto del Badge', color: 'paragraph_dark', fontWeight: 500 }}
          pill={{ text: 'Pill texto', color: 'brand-primary', variant: 'filled', rounded: 'r_md' }}
        />
      </ThemeProvider>,
    );

    getByText('Texto del Badge');
    getByText('Pill texto');
    getByAltText('avatar test');

    expect(true).toBe(true);
  });
});
