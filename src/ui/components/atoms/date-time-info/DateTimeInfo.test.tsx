import { render, screen } from '@testing-library/react';
import { DateTimeInfo } from './DateTimeInfo';

describe('DateTimeInfo - Unit tests', () => {
  test('renders relative time correctly for a recent timestamp', () => {
    const recentDate = new Date(Date.now() - 45 * 1000);
    render(<DateTimeInfo timestamp={recentDate} />);
    expect(screen.getByText(/second[s]? ago/i)).toBeInTheDocument();
  });

  test('renders relative time correctly for a timestamp minutes ago', () => {
    const minutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    render(<DateTimeInfo timestamp={minutesAgo} />);
    expect(screen.getByText(/minute[s]? ago/i)).toBeInTheDocument();
  });

  test('renders relative time correctly for a timestamp hours ago', () => {
    const hoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000);
    render(<DateTimeInfo timestamp={hoursAgo} />);
    expect(screen.getByText(/hour[s]? ago/i)).toBeInTheDocument();
  });

  test('renders relative time correctly for a timestamp days ago', () => {
    const daysAgo = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
    render(<DateTimeInfo timestamp={daysAgo} />);
    expect(screen.getByText(/day[s]? ago/i)).toBeInTheDocument();
  });

  test('renders ISO 8601 formatted string when format prop is used', () => {
    const someDate = new Date('2025-05-31T12:00:00Z');
    const format = (ts: string | Date) => {
      if (typeof ts === 'string') return ts;
      return ts.toISOString();
    };
    render(<DateTimeInfo timestamp={someDate} format={format} />);
    expect(screen.getByText('2025-05-31T12:00:00.000Z')).toBeInTheDocument();
  });
});
