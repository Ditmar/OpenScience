import { render, screen } from '@testing-library/react';
import Volumen from './LabelVol.tsx';

describe('Testing React Label Volument Component', () => {
  test('Must Render Volume 1', () => {
    render(<Volumen volumen="Vol." id={1} />);
    const volumenElement = screen.getByText('Vol. 1');
    expect(volumenElement).toBeInTheDocument();
  });
  test('Must Render Tome 2', () => {
    render(<Volumen volumen="Tome." id={2} />);
    const volumenElement = screen.getByText('Tome. 2');
    expect(volumenElement).toBeInTheDocument();
  });
  test('Must Render Part 3', () => {
    render(<Volumen volumen="Part." id={3} />);
    const volumenElement = screen.getByText('Part. 3');
    expect(volumenElement).toBeInTheDocument();
  });
});
