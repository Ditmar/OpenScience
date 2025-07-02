import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ButtonUrl } from './Button-Url';
import type { ButtonUrlProps } from './types/IProps';

vi.mock('../../../utils/vite-svgr/Icon', () => ({
  Icon: ({ iconName }: { iconName: string }) => <div data-testid="icon">{iconName}</div>,
}));

describe('ActionButton', () => {
  const defaultProps: ButtonUrlProps = {
    children: 'Click me',
    onClick: vi.fn(),
  };

  it('renders correctly with default props', () => {
    render(
      <ButtonUrl radius="small" loading={false} disabled={false}>
        {defaultProps.children}
      </ButtonUrl>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
    expect(button).not.toBeDisabled();
  });

  it('renders with custom icon', () => {
    render(
      <ButtonUrl iconName="fi-rr-copy" radius="small" loading={false} disabled={false}>
        {defaultProps.children}
      </ButtonUrl>,
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveTextContent('fi-rr-copy');
  });

  it('calls onClick when clicked', () => {
    render(
      <ButtonUrl onClick={defaultProps.onClick} radius="small" loading={false} disabled={false} />,
    );

    const button = screen.getByRole('button');
    button.click();
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('renders as disabled when disabled prop is true', () => {
    render(
      <ButtonUrl radius="small" loading={false} disabled>
        {defaultProps.children}
      </ButtonUrl>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('apply all props correctly', () => {
    render(
      <ButtonUrl radius="medium" loading disabled={false} variant="error" iconName="fi-rr-copy">
        {defaultProps.children}
      </ButtonUrl>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Click me');
    expect(screen.getByTestId('icon')).toHaveTextContent('fi-rr-copy');
  });
});
