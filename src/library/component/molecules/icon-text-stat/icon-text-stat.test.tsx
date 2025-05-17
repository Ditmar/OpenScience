import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import IconTextStat from './icon-text-stat';
import type { IProps } from './types/IProps';

vi.mock('./icon-text-stat.module.scss', () => ({
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

vi.mock('./types/iconMap', () => ({
  iconMap: {
    up: () => <svg data-testid="mock-icon" />,
  },
}));

describe('IconTextStat Component', () => {
  const props: IProps = {
    title: 'Active Users',
    mainValue: '150',
    subValue: 'Compared to last month',
    variant: 'success',
    size: 'medium',
    border: 'sharp',
    icon: 'up',
    description: 'It rose 10% since April',
    onClick: vi.fn(),
    className: 'custom-class',
  };

  test('renders with minimum required props', () => {
    render(<IconTextStat title={props.title} mainValue={props.mainValue} />);

    expect(screen.getByText('Active Users')).toBeInTheDocument();
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

    expect(screen.getByText('Active Users')).toBeInTheDocument();
    expect(screen.getByText('150')).toBeInTheDocument();
    expect(screen.getByText('Compared to last month')).toBeInTheDocument();
    expect(screen.getByText('It rose 10% since April')).toBeInTheDocument();
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

    expect(screen.getByTestId('checkbox-input')).toBeInTheDocument();
  });

  test('applies variant class correctly', () => {
    const { container } = render(
      <IconTextStat title={props.title} mainValue={props.mainValue} variant="secondary" />,
    );

    expect(container.firstChild).toHaveClass('secondary');
  });

  test('applies size class correctly', () => {
    const { container } = render(
      <IconTextStat title={props.title} mainValue={props.mainValue} size="small" />,
    );

    expect(container.firstChild).toHaveClass('small');
  });

  test('applies border class correctly', () => {
    const { container } = render(
      <IconTextStat title={props.title} mainValue={props.mainValue} border="sharp" />,
    );

    expect(container.firstChild).toHaveClass('sharp');
  });

  test('applies custom className', () => {
    const { container } = render(
      <IconTextStat
        title={props.title}
        mainValue={props.mainValue}
        className="test-custom-class"
      />,
    );

    expect(container.firstChild).toHaveClass('test-custom-class');
  });
});
