import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Label } from './Label';
import type { LabelProps } from './types/IProps';

vi.mock('../../../utils/vite-svgr/Icon', () => ({
  Icon: ({ iconName }: { iconName: string }) => <div data-testid="icon">{iconName}</div>,
}));

describe('Label', () => {
  const defaultProps: LabelProps = {
    children: 'Test Label',
    htmlFor: 'test-input',
  };

  it('renders correctly with default props', () => {
    render(<Label htmlFor={defaultProps.htmlFor}>{defaultProps.children}</Label>);
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'test-input');
  });

  it('renders with required asterisk when required prop is true', () => {
    render(<Label required>{defaultProps.children}</Label>);
    const label = screen.getByText('Test Label');
    const asterisk = screen.getByText('*');
    expect(label).toBeInTheDocument();
    expect(asterisk).toBeInTheDocument();
  });

  it('displays required asterisk when required prop is true', () => {
    render(<Label {...defaultProps} required />);

    const asterisk = screen.getByText('*');
    expect(asterisk).toBeInTheDocument();
    expect(asterisk).toHaveStyle('color: rgb(211, 47, 47)'); // Color de error de Material-UI
  });

  it('renders icon when iconName is provided', () => {
    render(<Label {...defaultProps} iconName="Info-Tooltip" />);

    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveTextContent('Info-Tooltip');
  });

  it('applies correct size styles', () => {
    const { rerender } = render(<Label {...defaultProps} size="small" />);
    let label = screen.getByText('Test Label');
    expect(label).toHaveStyle('font-size: 0.75rem');

    rerender(<Label {...defaultProps} size="medium" />);
    label = screen.getByText('Test Label');
    expect(label).toHaveStyle('font-size: 1rem');

    rerender(<Label {...defaultProps} size="large" />);
    label = screen.getByText('Test Label');
    expect(label).toHaveStyle('font-size: 1.25rem');
  });

  it('applies custom sx styles', () => {
    const customStyles = { color: 'red', margin: '10px' };
    render(<Label {...defaultProps} sx={customStyles} />);

    const label = screen.getByText('Test Label');
    const styles = getComputedStyle(label);
    expect(styles.color).toBe('rgb(255, 0, 0)');
    expect(styles.margin).toBe('10px');
  });

  it('passes additional props to the Typography component', () => {
    render(<Label {...defaultProps} data-testid="custom-label" aria-hidden="true" />);

    const label = screen.getByTestId('custom-label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('aria-hidden', 'true');
  });
});