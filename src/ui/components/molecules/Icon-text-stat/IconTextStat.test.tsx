import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import IconTextStat from './IconTextStat';
import type { IProps } from './types/IProps';

vi.mock('./IconTextStat.module.scss', () => ({
  default: {
    'icon-text-stat': 'icon-text-stat',
    'icon-text-stat-checkbox': 'icon-text-stat-checkbox',
    'icon-text-stat-icon': 'icon-text-stat-icon',
    'icon-text-stat-text': 'icon-text-stat-text',
    'icon-text-stat-title': 'icon-text-stat-title',
    'icon-text-stat-main-value': 'icon-text-stat-main-value',
    'icon-text-stat-sub-value': 'icon-text-stat-sub-value',
    'icon-text-stat-description': 'icon-text-stat-description',
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
  const icon = <svg data-testid="mock-icon" />;

  const props: IProps = {
    title: 'Usuarios Activos',
    mainValue: '150',
    subValue: 'Comparado con el mes pasado',
    variant: 'success',
    size: 'medium',
    border: 'sharp',
    icon,
    description: 'Subió 10% desde abril',
    onClick: vi.fn(),
    className: 'custom-class',
  };

  test('renders with minimum required props', () => {
    render(<IconTextStat title={props.title} mainValue={props.mainValue} />);

    expect(screen.getByText('Usuarios Activos')).toBeInTheDocument();
    expect(screen.getByText('150')).toBeInTheDocument();
  });

  test('renders with all props', () => {
    render(
      <IconTextStat
        title={props.title}
        mainValue={props.mainValue}
        subValue={props.subValue}
        variant={props.variant}
        size={props.size}
        border={props.border}
        icon={props.icon}
        description={props.description}
        onClick={props.onClick}
        className={props.className}
      />,
    );

    expect(screen.getByText('Usuarios Activos')).toBeInTheDocument();
    expect(screen.getByText('150')).toBeInTheDocument();
    expect(screen.getByText('Comparado con el mes pasado')).toBeInTheDocument();
    expect(screen.getByText('Subió 10% desde abril')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  test('renders with child components', () => {
    render(
      <IconTextStat
        title={props.title}
        mainValue={props.mainValue}
        subValue={props.subValue}
        variant={props.variant}
        size={props.size}
        border={props.border}
        icon={props.icon}
        description={props.description}
        onClick={props.onClick}
        className={props.className}
      >
        <input type="checkbox" data-testid="checkbox-input" />
      </IconTextStat>,
    );

    expect(screen.getByText('Usuarios Activos')).toBeInTheDocument();
    expect(screen.getByText('150')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-input')).toBeInTheDocument();
  });

  test('applies variant class correctly', () => {
    const { container } = render(
      <IconTextStat title={props.title} mainValue={props.mainValue} variant="secondary" />,
    );

    const rootElement = container.firstChild;
    expect(rootElement).toHaveClass('secondary');
  });

  test('applies size class correctly', () => {
    const { container } = render(
      <IconTextStat title={props.title} mainValue={props.mainValue} size="small" />,
    );

    const rootElement = container.firstChild;
    expect(rootElement).toHaveClass('small');
  });

  test('applies border class correctly', () => {
    const { container } = render(
      <IconTextStat title={props.title} mainValue={props.mainValue} border="sharp" />,
    );

    const rootElement = container.firstChild;
    expect(rootElement).toHaveClass('sharp');
  });

  test('applies custom className', () => {
    const { container } = render(
      <IconTextStat
        title={props.title}
        mainValue={props.mainValue}
        className="test-custom-class"
      />,
    );

    const rootElement = container.firstChild;
    expect(rootElement).toHaveClass('test-custom-class');
  });
});
