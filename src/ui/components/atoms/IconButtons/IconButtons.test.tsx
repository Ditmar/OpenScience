// IconButtons.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconButton from './IconButtons';
import styles from './IconButtons.module.scss';
import type { IIconButtonProps } from './types/Iprops';

function MockIcon(): JSX.Element {
  return <svg data-testid="mock-icon" />;
}

describe('IconButton Component', () => {
  const baseProps: IIconButtonProps = {
    icon: <MockIcon />,
    ariaLabel: 'Action',
  };

  test('renders with icon, correct aria-label, and default classes', () => {
    render(<IconButton icon={baseProps.icon} ariaLabel={baseProps.ariaLabel} />);
    const button = screen.getByLabelText('Action');

    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    expect(button).toHaveClass(styles.iconButton, styles.md, styles.square, styles.neutral);
  });

  test('handles onClick event when not disabled', () => {
    let clicked = false;
    const handleClick = (): void => {
      clicked = true;
    };
    render(
      <IconButton icon={baseProps.icon} ariaLabel={baseProps.ariaLabel} onClick={handleClick} />,
    );
    fireEvent.click(screen.getByLabelText('Action'));
    expect(clicked).toBe(true);
  });

  test('is disabled and does not handle onClick when disabled prop is true', () => {
    let clicked = false;
    const handleClick = (): void => {
      clicked = true;
    };
    render(
      <IconButton
        icon={baseProps.icon}
        ariaLabel={baseProps.ariaLabel}
        disabled
        onClick={handleClick}
      />,
    );
    const button = screen.getByLabelText('Action');

    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(clicked).toBe(false);
  });

  test('applies custom variants (size, shape, color) and className', () => {
    render(
      <IconButton
        icon={baseProps.icon}
        size="lg"
        shape="circle"
        color="brand"
        className="my-custom-btn"
        ariaLabel="Custom Button"
      />,
    );
    const button = screen.getByLabelText('Custom Button');

    expect(button).toHaveClass(styles.lg);
    expect(button).toHaveClass(styles.circle);
    expect(button).toHaveClass(styles.brand);
    expect(button).toHaveClass('my-custom-btn');
    expect(button).toHaveClass(styles.iconButton);
  });
});
