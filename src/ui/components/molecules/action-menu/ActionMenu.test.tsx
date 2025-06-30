import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ActionMenu from './ActionMenu';
import '@testing-library/jest-dom';

describe('ActionMenu', () => {
  beforeEach(() => {
    render(<ActionMenu />);
  });

  it('muestra los botones PDF, Link e Imagen', () => {
    expect(screen.getByRole('button', { name: /picture as pdf/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /link/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /image/i })).toBeInTheDocument();
  });
});
