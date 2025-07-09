import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import TextCardStat from './TextCardStat';

describe('TextCardStat Organism', () => {
  test('renders title and description', () => {
    render(
      <TextCardStat
        label="Users"
        title="User Stats"
        description="Description of users"
        badgeNumber={99}
      />,
    );

    expect(screen.getByText(/User Stats/i)).toBeInTheDocument();
    expect(screen.getByText(/Description of users/i)).toBeInTheDocument();
  });

  test('renders badge number', () => {
    render(<TextCardStat label="Label" title="Title" description="Desc" badgeNumber={20} />);

    expect(screen.getByText('20')).toBeInTheDocument();
  });

  test('calls onClick when card is clicked', () => {
    const handleClick = vi.fn();
    render(
      <TextCardStat
        label="Click me"
        title="Clickable"
        description="Card"
        badgeNumber={1}
        onClick={handleClick}
      />,
    );

    fireEvent.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('disables interaction when isDisabled is true', () => {
    const handleClick = vi.fn();
    render(
      <TextCardStat
        label="Disabled"
        title="Cannot click"
        description="Nope"
        badgeNumber={0}
        onClick={handleClick}
        isDisabled
      />,
    );

    fireEvent.click(screen.getByText('Cannot click'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
