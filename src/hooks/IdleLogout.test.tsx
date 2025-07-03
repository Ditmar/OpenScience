import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import IdleLogout from './IdleLogout';

vi.mock('./useIdleLogout', () => ({
  useIdleLogout: () => ({
    showWarning: true,
    countdown: 7,
  }),
}));

describe('IdleLogout', () => {
  it('muestra advertencia cuando showWarning es true', () => {
    render(<IdleLogout idleTimeout={10000} warningDuration={5000} />);

    expect(screen.getByText(/vas a ser desconectado/i)).toBeInTheDocument();
    expect(screen.getByText(/7 segundos/)).toBeInTheDocument();
  });
});
