import { render, screen } from '@testing-library/react';
import Label from './Label.tsx';

describe('Testing Label React Component', () => {
  test('should render with default props', () => {
    render(<Label>Artículos</Label>);
    const labelElement = screen.getByText(/Artículos/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('should render with primary variant', () => {
    render(<Label variant="primary">Artículos</Label>);
    const labelElement = screen.getByText(/Artículos/i);
    expect(labelElement).toHaveClass('label--primary');
  });

  test('should render with secondary variant', () => {
    render(<Label variant="secondary">Artículos</Label>);
    const labelElement = screen.getByText(/Artículos/i);
    expect(labelElement).toHaveClass('label--secondary');
  });
});
