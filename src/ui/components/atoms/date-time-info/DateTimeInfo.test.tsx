import { render, screen } from '@testing-library/react';
import { DateTimeInfo } from './DateTimeInfo';
import styles from './DateTimeInfo.module.scss';

describe('DateTimeInfo - Unit tests', () => {
  test('renders "seconds ago" for a recent timestamp', () => {
    const recent = new Date(Date.now() - 45 * 1000);
    render(<DateTimeInfo timestamp={recent} />);
    expect(screen.getByText(/second[s]? ago/i)).toBeInTheDocument();
  });

  test('renders "minutes ago"', () => {
    const date = new Date(Date.now() - 5 * 60 * 1000);
    render(<DateTimeInfo timestamp={date} />);
    expect(screen.getByText(/minute[s]? ago/i)).toBeInTheDocument();
  });

  test('renders "hours ago"', () => {
    const date = new Date(Date.now() - 3 * 3600 * 1000);
    render(<DateTimeInfo timestamp={date} />);
    expect(screen.getByText(/hour[s]? ago/i)).toBeInTheDocument();
  });

  test('renders "days ago"', () => {
    const date = new Date(Date.now() - 5 * 86400 * 1000);
    render(<DateTimeInfo timestamp={date} />);
    expect(screen.getByText(/day[s]? ago/i)).toBeInTheDocument();
  });

  test('renders formatted string with custom format()', () => {
    const someDate = new Date('2025-05-31T12:00:00Z');
    const format = (ts: string | Date) => (typeof ts === 'string' ? ts : ts.toISOString());

    render(<DateTimeInfo timestamp={someDate} format={format} />);
    expect(screen.getByText('2025-05-31T12:00:00.000Z')).toBeInTheDocument();
  });

  test('renders "Invalid date" for malformed input', () => {
    render(<DateTimeInfo timestamp="invalid-date" />);
    expect(screen.getByText('Invalid date')).toBeInTheDocument();
  });

  const sizes = ['small', 'medium', 'large'] as const;

  test.each(sizes)('applies correct size class for size="%s"', (size) => {
    const { container } = render(<DateTimeInfo timestamp={new Date()} size={size} />);
    const expectedClass = styles[`size--${size}`];
    expect(container.firstChild).toHaveClass(expectedClass);
  });

  test('does not render any icon if showIcon is false', () => {
    const { container } = render(<DateTimeInfo timestamp={new Date()} showIcon={false} />);
    const icons = container.querySelectorAll(`.${styles.icon}`);
    expect(icons.length).toBe(0);
  });

  test('text element has correct accessibility and class', () => {
    render(<DateTimeInfo timestamp={new Date(Date.now() - 90 * 1000)} />);
    const textEl = screen.getByText(/minute[s]? ago/i);
    expect(textEl).toBeInTheDocument();
    expect(textEl).toHaveClass(styles.text);
  });
});
