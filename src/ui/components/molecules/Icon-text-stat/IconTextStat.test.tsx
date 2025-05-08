/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import IconTextStat from './IconTextStat';
import type { IProps } from './types/IProps';

vi.mock('./IconTextStat.module.scss', () => ({
  default: {
    'icon-text-stat': 'icon-text-stat',
    'icon-text-stat__checkbox': 'icon-text-stat__checkbox',
    'icon-text-stat__icon': 'icon-text-stat__icon',
    'icon-text-stat__text': 'icon-text-stat__text',
    'icon-text-stat__title': 'icon-text-stat__title',
    'icon-text-stat__main': 'icon-text-stat__main',
    'icon-text-stat__sub': 'icon-text-stat__sub',
    'icon-text-stat__desc': 'icon-text-stat__desc',
    secondary: 'secondary',
    tertiary: 'tertiary',
    warning: 'warning',
    success: 'success',
    error: 'error',
    primary: 'primary',
    small: 'small',
    medium: 'medium',
    large: 'large',
    sharp: 'sharp',
    soft: 'soft',
  },
}));

describe('IconTextStat Component', () => {
  const mockIcon = <svg data-testid="mock-icon" />;

  const defaultProps: IProps = {
    title: 'Test Title',
    mainValue: 'Main Value',
  };

  test('renders with minimum required props', () => {
    render(<IconTextStat {...defaultProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Main Value')).toBeInTheDocument();
  });

  test('renders with all props', () => {
    const fullProps: IProps = {
      ...defaultProps,
      subValue: 'Sub Value',
      variant: 'primary',
      size: 'large',
      border: 'sharp',
      icon: mockIcon,
      description: 'Test Description',
      className: 'custom-class',
    };

    render(<IconTextStat {...fullProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Main Value')).toBeInTheDocument();
    expect(screen.getByText('Sub Value')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  test('renders with child components', () => {
    render(
      <IconTextStat {...defaultProps}>
        <input type="checkbox" data-testid="checkbox-input" />
      </IconTextStat>,
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Main Value')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-input')).toBeInTheDocument();
  });

  test('applies variant class correctly', () => {
    const { container } = render(<IconTextStat {...defaultProps} variant="secondary" />);

    const rootElement = container.firstChild;
    expect(rootElement).toHaveClass('secondary');
  });

  test('applies size class correctly', () => {
    const { container } = render(<IconTextStat {...defaultProps} size="small" />);

    const rootElement = container.firstChild;
    expect(rootElement).toHaveClass('small');
  });

  test('applies border class correctly', () => {
    const { container } = render(<IconTextStat {...defaultProps} border="sharp" />);

    const rootElement = container.firstChild;
    expect(rootElement).toHaveClass('sharp');
  });

  test('applies custom className', () => {
    const { container } = render(<IconTextStat {...defaultProps} className="test-custom-class" />);

    const rootElement = container.firstChild;
    expect(rootElement).toHaveClass('test-custom-class');
  });
});
