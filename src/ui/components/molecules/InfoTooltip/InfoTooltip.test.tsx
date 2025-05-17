import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeAll, afterAll, beforeEach } from 'vitest';
import InfoTooltip from './InfoTooltip';

describe('InfoTooltip Component', () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  beforeEach(() => {
    vi.clearAllTimers();
  });

  it('renders without crashing', () => {
    render(<InfoTooltip content="Test tooltip" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('shows tooltip on hover', () => {
    render(<InfoTooltip content="Test tooltip" />);
    const trigger = screen.getByRole('button');

    fireEvent.mouseEnter(trigger);
    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByText('Test tooltip')).toBeVisible();

    fireEvent.mouseLeave(trigger);
    expect(screen.queryByText('Test tooltip')).toBeNull();
  });

  it('shows tooltip on focus', () => {
    render(<InfoTooltip content="Test tooltip" />);
    const trigger = screen.getByRole('button');

    fireEvent.focus(trigger);
    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByText('Test tooltip')).toBeVisible();

    fireEvent.blur(trigger);
    expect(screen.queryByText('Test tooltip')).toBeNull();
  });

  it('respects position prop', () => {
    render(<InfoTooltip content="Test tooltip" position="bottom" />);
    const trigger = screen.getByRole('button');

    fireEvent.mouseEnter(trigger);
    act(() => {
      vi.advanceTimersByTime(300);
    });

    const tooltip = screen.getByText('Test tooltip');
    expect(tooltip.className).toMatch(/bottom/);
  });

  it('respects size prop', () => {
    render(<InfoTooltip content="Test tooltip" size="large" />);
    const trigger = screen.getByRole('button');

    fireEvent.mouseEnter(trigger);
    act(() => {
      vi.advanceTimersByTime(300);
    });

    const tooltip = screen.getByText('Test tooltip');
    expect(tooltip.className).toMatch(/large/);
  });

  it('applies delay before showing', () => {
    render(<InfoTooltip content="Test tooltip" delay={500} />);
    const trigger = screen.getByRole('button');

    fireEvent.mouseEnter(trigger);
    expect(screen.queryByText('Test tooltip')).toBeNull();

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(screen.getByText('Test tooltip')).toBeVisible();
  });

  it('hides tooltip when pressing Escape', () => {
    render(<InfoTooltip content="Test tooltip" />);
    const trigger = screen.getByRole('button');

    fireEvent.mouseEnter(trigger);
    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByText('Test tooltip')).toBeVisible();

    fireEvent.keyDown(trigger, { key: 'Escape' });
    expect(screen.queryByText('Test tooltip')).toBeNull();
  });

  it('renders custom icon when provided', () => {
    render(<InfoTooltip content="Test tooltip" icon={<span data-testid="custom-icon">?</span>} />);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('renders children instead of default icon when provided', () => {
    render(
      <InfoTooltip content="Test tooltip">
        <button data-testid="custom-trigger">Click me</button>
      </InfoTooltip>,
    );
    expect(screen.getByTestId('custom-trigger')).toBeInTheDocument();
    expect(screen.queryByRole('img')).toBeNull();
  });
});
